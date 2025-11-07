
        import * as THREE from 'three';

        // === 1. IMAGEDISTORTIONEFFECT CLASS DEFINITION ===

        class ImageDistortionEffect {
            constructor(canvasSelector, options = {}) {
                this.canvas = document.querySelector(canvasSelector);
                if (!this.canvas) throw new Error("Canvas element not found.");

                // Default Settings (Adjusted for extreme stretch/jiggle)
                this.settings = {
                    width: 6, 
                    height: 4.5, 
                    imageUrls: options.imageUrls || [],

                    smoothing: 0.08, 
                    distortionDecay: 0.85, 
                    distortionReactivity: 0.15, 
                    
                    maxDistortion: 1.5, 
                    MAX_TARGET_DISTORTION: 1.2, 
                    ...options
                };

                // State
                this.scrollY = window.scrollY; 
                this.lastScrollY = window.scrollY; 
                this.targetDistortion = 0;
                this.currentDistortion = 0;

                // Three.js Objects
                this.mesh = null; 
                this.renderer = null;
                this.scene = null;
                this.camera = null;
                this.clock = new THREE.Clock();

                this.initThree();
                this.initImage();
                this.initEvents();
                this.animate();
            }

            initThree() {
                this.renderer = new THREE.WebGLRenderer({ 
                    canvas: this.canvas,
                    antialias: true 
                });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 

                this.scene = new THREE.Scene();
                this.scene.background = new THREE.Color(0xf0f0f0); 

                this.camera = new THREE.PerspectiveCamera(
                    75, 
                    window.innerWidth / window.innerHeight, 
                    0.1, 
                    1000 
                );
                this.camera.position.z = 5; 

                this.textureLoader = new THREE.TextureLoader();
                this.pageScrollRangeY = document.body.scrollHeight - window.innerHeight;
            }

            // --- Single Image Creation ---

            correctColorSpace(texture) {
                texture.colorSpace = THREE.SRGBColorSpace;
                return texture;
            }

            initImage() {
                const geometry = new THREE.PlaneGeometry(
                    this.settings.width, 
                    this.settings.height, 
                    96, // Increased segments for smoother extreme bend
                    32  
                );

                const material = new THREE.MeshBasicMaterial({ color: 0x333333 }); 
                this.mesh = new THREE.Mesh(geometry, material);

                this.mesh.position.set(0, 0, 0); 
                
                this.mesh.userData.originalPositions = geometry.attributes.position.array.slice();

                let textureUrl = this.settings.imageUrls[0] || "https://images.unsplash.com/photo-1550953683857-ab459207e2c9?w=1080&h=720&fit=crop";
                
                this.textureLoader.load(textureUrl, (texture) => {
                    this.correctColorSpace(texture);
                    this.mesh.material.map = texture;
                    this.mesh.material.color.set(0xffffff); 
                    this.mesh.material.needsUpdate = true;
                    
                    // Aspect ratio adjustment 
                    const aspect = texture.image.width / texture.image.height;
                    const planeAspect = this.settings.width / this.settings.height;
                    if (aspect > planeAspect) {
                        this.mesh.scale.y = (planeAspect / aspect);
                    } else {
                        this.mesh.scale.x = (aspect / planeAspect);
                    }
                }, undefined, (error) => {
                    console.error('Texture failed to load:', textureUrl, error);
                });

                this.scene.add(this.mesh);
            }

            // --- Distortion Logic (Diagonal Asymmetrical Bend) ---

            updateCurve(mesh, distortionFactor) {
                const geometry = mesh.geometry;
                const originalPositions = mesh.userData.originalPositions;
                const livePositions = geometry.attributes.position.array;

                const maxCurvature = distortionFactor * this.settings.maxDistortion; 
                // Set the total radius to the diagonal distance from center to corner
                const diagonalRadius = Math.sqrt(
                    (this.settings.width / 2) ** 2 + (this.settings.height / 2) ** 2
                );

                for (let i = 0; i < originalPositions.length; i += 3) {
                    const ox = originalPositions[i]; // Local X position
                    const oy = originalPositions[i + 1]; // Local Y position
                    
                    // 1. Calculate a raw combined distance factor (closer to a diagonal center)
                    // The distance to a line y = -x is proportional to (x+y)
                    // We use (ox + oy) for a diagonal axis and scale it by the radius
                    const distFactor = Math.abs(ox + oy) / (diagonalRadius * 2); 
                    
                    // 2. Introduce asymmetry and make the distortion strongest at the corners
                    // We use the distance from the actual center (0, 0) for the main magnitude.
                    const radialDist = Math.sqrt(ox * ox + oy * oy);
                    let normalizedDist = radialDist / diagonalRadius;
                    normalizedDist = Math.max(0, 1 - normalizedDist);
                    
                    // Use a curve factor that peaks at the edges and center, but is applied diagonally
                    const baseCurveFactor = Math.pow(Math.sin(normalizedDist * Math.PI), 1.5);

                    // 3. Apply Asymmetry and Direction
                    // The 'tilt' factor determines which corners bend the most and in what direction.
                    // (ox + oy) is positive in the top-right half and negative in the bottom-left half.
                    // Using this signed value creates the asymmetry.
                    const asymmetryFactor = (ox + oy) / diagonalRadius;
                    
                    // We modulate the curve magnitude using the base curve and the asymmetry factor
                    // This creates a twisting, asymmetrical bend strongest along the diagonal
                    const finalMagnitude = baseCurveFactor * Math.abs(asymmetryFactor);
                    
                    // The Z-Offset applies a twist where one half pushes forward and the other pulls back.
                    // The sign of 'asymmetryFactor' determines the direction (push/pull)
                    const zOffset = finalMagnitude * maxCurvature * Math.sign(asymmetryFactor); 

                    // Apply bend to Z-axis
                    livePositions[i + 2] = zOffset; 
                }

                geometry.attributes.position.needsUpdate = true;
                geometry.computeVertexNormals(); 
            }

            // --- Event Handlers ---

            handleScroll = () => {
                const currentScrollY = window.scrollY;
                const scrollDelta = currentScrollY - this.lastScrollY;
                this.lastScrollY = currentScrollY;
                
                this.scrollY = currentScrollY; 

                let newDistortion = Math.abs(scrollDelta) * 0.05 * this.settings.distortionReactivity; 
                this.targetDistortion += Math.min(newDistortion, this.settings.MAX_TARGET_DISTORTION * 0.1); 
            }

            handleWheel = (e) => {
                let newDistortion = Math.abs(e.deltaY) * 0.001 * this.settings.distortionReactivity;
                this.targetDistortion += Math.min(newDistortion, this.settings.MAX_TARGET_DISTORTION * 0.01);
            }
            
            handleResize = () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.pageScrollRangeY = document.body.scrollHeight - window.innerHeight;
            }

            initEvents() {
                window.addEventListener('scroll', this.handleScroll);
                window.addEventListener('wheel', this.handleWheel, { passive: true }); 
                window.addEventListener('resize', this.handleResize);
            }

            // --- Animation Loop ---

            animate = () => {
                requestAnimationFrame(this.animate);
                const deltaTime = this.clock.getDelta(); 
                const lastScrollY = this.scrollY; 

                const velocity = Math.abs(this.scrollY - lastScrollY) / deltaTime; 

                const isScrolling = velocity > 0.01;
                
                if (!isScrolling) {
                    this.targetDistortion *= this.settings.distortionDecay;
                }
                
                this.targetDistortion = Math.min(this.targetDistortion, this.settings.MAX_TARGET_DISTORTION);

                this.currentDistortion += (this.targetDistortion - this.currentDistortion) * this.settings.smoothing;
                this.currentDistortion = Math.max(0, this.currentDistortion); 
                
                // Apply distortion to the single mesh
                this.updateCurve(this.mesh, this.currentDistortion); 

                this.renderer.render(this.scene, this.camera);
            }
        }

        // === 2. INITIALIZATION (Start the Effect) ===

        document.addEventListener('DOMContentLoaded', () => {
            const singleImageUrl = [
               "https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2729"
            ];

            const myEffect = new ImageDistortionEffect('#webgl-canvas', {
                imageUrls: singleImageUrl,
            });
        });


const templatea = document.createElement("template");
templatea.innerHTML = `

<div class="cover" id="uniqueContainerID">
    <img class="screenshot firsta" id="firstImage" src="https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/3a/e6/9c/3ae69cb5-53bf-91f2-7638-bc58de5f1120/c111156a-1be9-4afe-91bf-c74fc3dc059c_iPhone-58-Relays-screensArtboard-2.png/460x0w.webp" alt="Screenshot 1">
    <img class="screenshot" id="secondImage" src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/72/b2/fa/72b2fa2c-0b4a-2c54-d2eb-256d1d12ba86/5f4954dc-83c8-45fa-9069-7ea1bc4a4fa8_iPhone-58-Relays-screensFind-perfect-buddies.png/460x0w.webp" alt="Screenshot 2">
  <!--  <img class="screenshot" id="thirdImage" src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8d/38/06/8d380639-1e4c-e908-256d-86e2d474dfbb/43c55054-72f1-4bd1-8c93-2e6865325e9d_iPhone-58-Relays-screensArtboard-6.png/460x0w.webp" alt="Screenshot 3"> -->

 <img class = "screenshot" id="thirdImage" src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8e/96/68/8e966867-7df5-8f08-26ef-0bf8bac57639/94abf0e8-bcb7-4ed4-b460-77a823cc6c5a_Artboard_2.png/960x540mv.webp">
</div>

<style>

.screenshot {
    box-shadow: 0px 0px 10px #000;
    }

.cover > img {
  border-radius: 0.3rem;
  margin-right: 1rem;
  }


 
  .cover {
  overflow-x: scroll;
             display: flex;
          
             justify-content: flex-start;
            /* width: 90%; */
             margin-left: auto;
              margin-right: auto;
            /* height: 700px;*/
             grid-area: 1 / 1;
             z-index: 1;
           
           
             
         }
 
         .cover::-webkit-scrollbar {
     display: none;  /* Chrome, Safari, Webkit-based browsers */
 }
</style>
`;


class ScreenShowcase extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(templatea.content.cloneNode(true));
        this.cover = this.shadowRoot.querySelector(".cover");
        this.firstImage = this.shadowRoot.querySelector("#firstImage");
        this.secondImage = this.shadowRoot.querySelector("#secondImage");
        this.thirdImage = this.shadowRoot.querySelector("#thirdImage");
        this.setLimit = {from: 0, to: 1500};
        this.setHandleScroll();
      
      this.appName = "";

    

     
      }

       mapRange(value, inMin, inMax, outMin, outMax) {
        value = Math.max(inMin, Math.min(value, inMax));
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

      setHandleScroll = () => {
        const handle = () => {

if (this.appName === "Relays"){
  alert("P")
  console.log("SET LIMITA " + this.setLimit.from + " " + this.setLimit.to );
}


         
      // Assuming this.setLimit is already defined as { from: 0, to: 1500 }
    const scrollPositionY = window.scrollY - this.setLimit.from; // Subtract 'from' to start range from 0
    const maxScrollY = this.setLimit.to - this.setLimit.from;    // Ensure maxScrollY is within the range
    
    // Ensure scrollPositionY is clamped between 0 and maxScrollY
    const clampedScrollY = Math.max(0, Math.min(scrollPositionY, maxScrollY));
    
    // Calculate the maximum possible horizontal scroll
    const maxScrollLeft = this.cover.scrollWidth - this.cover.clientWidth;
    
    // Calculate the scrollLeft value proportionally based on vertical scroll
    const scrollLeftValue = (clampedScrollY / maxScrollY) * maxScrollLeft;
    
    // Set the scrollLeft property to offset the contents of the container
    //this.cover.scrollLeft = scrollLeftValue;



/*let minusConstant = 
if(this.appName === "Runny"){
minusConstant = 0;
} else  if (this.appName === "Relays"){
  minusConstant = 1500
} else if (this.appName == "Spatial"){
  minusConstant = 2600;
} else {
  minusConstant = 2900;
}
*/

if (this.minusConstant === undefined){
  this.minusConstant = 0;
}

    let mapped = Math.min((window.scrollY + 1 - this.minusConstant)/200, 1);
    mapped = Math.max(0, mapped);

    const scrollMin = this.setLimit.from;
    const scrollMax = this.setLimit.to;
  
    const rotMin = 10;
    const rotMax = 0;

    let mappedLeft = this.mapRange(window.scrollY, scrollMin, scrollMax, rotMin, rotMax);

    //alert(this.appName);
    if (this.appName === "Spatial-Network"){
      mapped = Math.min(mapped, 0.9);
      mappedLeft = Math.min(mappedLeft, 4);
    }


    this.cover.children[0].style.transform = `scale(${mapped})`;
    this.cover.children[1].style.transform = `scale(${mapped})`;
    this.cover.children[2].style.transform = `scale(${mapped})`;;
   //this.cover.children[1].style.transform = `scale(${scrollLeftValue/100 * 0.8})`;
   // this.cover.children[2].style.transform = `scale(${scrollLeftValue/100 * 0.8})`;

          if (this.appName === "Relays"){
            console.log("SAR" + scrollLeftValue);
          }
        }

        handle();

        window.addEventListener('scroll', () => {
          handle();
      });
      }


  
      


      static get observedAttributes() { return ["app-for", "first-url", "second-url", "third-url", "app-for-limit", "app-minus-constant"]; }
      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        switch (attr) {
         
// 9:37:24

            case "app-for-limit":
            let start = Number(newVal.split("-")[0]);
            let end = Number(newVal.split("-")[1])
           // alert(start + " " + end);
            this.setLimit = {from: start, to: end};
            break;


              case "app-minus-constant":
              this.minusConstant = Number(newVal);
              break;


              case 'app-for':
             

              if (newVal === "Spatial-Nework"){
                this.cover.style.height = "600px";
              }

                this.appName = newVal;
               if (newVal == "Runny") {
                this.cover.style.height = "600px";
             //   this.setLimit = {from: 0, to: 1500}; // 0
               } else if (newVal === "Relays") {
             //   this.setLimit = {from: 1700, to: 2700}; // Problem here
                console.log("MERA");
                console.log(`For ${newVal} ${this.setLimit}`);
               } else if (newVal === "Eveny"){
                
               } else {
                this.cover.style.height = "400px";
              //  this.setLimit = {from: 2900, to: 3900}; // Problem here
               }
         
                    // this.title.textContent = `${newVal || 'world'}!`;
                    break;

              case "first-url":
                this.firstImage.src = newVal;

              case "second-url":
                this.secondImage.src = newVal;

              case "third-url":
                this.thirdImage.src = newVal;

            


        }
      }


  
}

customElements.define("screen-showcase", ScreenShowcase);








/*
class HelloWorld extends HTMLElement {
  title = document.createElement("h1");
  p = document.createElement('p');
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).append(this.title, this.p);//.append(title);
  }
  
  // This has to be here
  static get observedAttributes() { return ['greeting-name', "app-title"]; }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal === newVal) return; // nothing to do
    switch (attr) {
      case 'greeting-name':
        this.p.textContent = `${newVal || 'world'}!`;
        break;

        case 'app-title':
          this.title.textContent = `${newVal || 'world'}!`;
          break;
    }
  }
  
  connectedCallback() {
    if (!this.getAttribute('greeting-name')) { this.setAttribute('greeting-name', 'world'); }
  }
}

customElements.define('hello-world', HelloWorld);*/