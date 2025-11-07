import * as THREE from 'three';

        // === SHADER DEFINITIONS ===

        // Basic fragment shader
        const basicFragmentShader = `
            uniform sampler2D uTexture;
            varying vec2 vUv;

            vec3 toLinear(vec3 c) {
                return pow(c, vec3(2.2)); // approximate sRGB → linear
            }

            vec3 toSRGB(vec3 c) {
                return pow(c, vec3(1.0 / 2.2)); // linear → sRGB
            }

            void main() {
                vec4 texColor = texture2D(uTexture, vUv);
                // Convert sampled sRGB texture to linear
                vec3 linear = toLinear(texColor.rgb);
                // Convert back to sRGB for display
                gl_FragColor = vec4(toSRGB(linear), texColor.a);
            }
        `;

        // Vertex Shader with Combined Distortion Logic
        const customVertexShader = `
            uniform float uScrollDistortionFactor; 
            uniform float uHoverDistortionStrength; 
            uniform vec2 uMouse; 
            uniform vec2 uMeshSize; 

            varying vec2 vUv;
            #define PI 3.1415926535

            void main() {
                vUv = uv;

                vec3 newPosition = position;
                
                // --- 1. Calculate Scroll/Base Distortion (Diagonal Asymmetrical) ---
                float ox = newPosition.x;
                float oy = newPosition.y;
                float diagonalRadius = length(uMeshSize / 2.0); 
                
                float radialDist = length(newPosition.xy);
                float normalizedRadialDist = radialDist / diagonalRadius;
                normalizedRadialDist = max(0.0, 1.0 - normalizedRadialDist);
                
                float baseCurveFactor = pow(sin(normalizedRadialDist * PI), 1.5);

                float asymmetryFactor = (ox + oy) / diagonalRadius;
                
                float finalMagnitude = baseCurveFactor * abs(asymmetryFactor);
                
                // This is the extreme diagonal twist
                float zOffsetBase = finalMagnitude * uScrollDistortionFactor * sign(asymmetryFactor); 
                
                // --- 2. Calculate Mouse Distortion (Local Push/Pull) ---
                
                // Convert mesh position to normalized UV space for distance check
                vec2 meshUv = (newPosition.xy / uMeshSize) + 0.5; 
                
                float distToMouse = distance(meshUv, uMouse);
                
                // Smooth falloff, strongest at mouse position (0.4 is effect radius)
                float mouseFalloff = smoothstep(0.4, 0.0, distToMouse); 
                
                // Use a negative multiplier for a "pull" effect towards the screen
                float zOffsetMouse = mouseFalloff * uHoverDistortionStrength * -1.0; 

                // --- 3. Combine and Apply ---
                newPosition.z += zOffsetBase + zOffsetMouse;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `;

        // === 1. IMAGEDISTORTIONEFFECT CLASS DEFINITION (Mesh Manager) ===
        class ImageDistortionEffect {
            constructor(container, imageUrl, options = {}) {
                this.container = container;
                if (!this.container) throw new Error("Container element not provided.");
                
                this.sharedScene = options.sharedScene; 
                if (!this.sharedScene) throw new Error("Shared scene not provided.");

                // Create a DUMMY DIV to handle local events (like cursor change)
                this.canvas = document.createElement('div');
                this.canvas.style.position = 'absolute';
                this.canvas.style.top = '0';
                this.canvas.style.left = '0';
                this.canvas.style.width = '100%';
                this.canvas.style.height = '100%';
                this.canvas.style.cursor = 'pointer'; 
                this.canvas.style.zIndex = "99999";
                this.container.appendChild(this.canvas);
                
                let factora = 1;
                if (window.innerWidth <= 430){
                   // factora = 0.4;
                }

                this.settings = {
                    width: 6 * 2.32 * factora,  
                    height: 4.5 * 2.32 * factora, 
                    imageUrls: [imageUrl], 
                    smoothing: 0.12, 
                    distortionDecay: 0.85, 
                    distortionReactivity: 0.25, 
                    maxDistortion: 2.5, 
                    MAX_TARGET_DISTORTION: 1.8, 
                    HOVER_DISTORTION_STRENGTH: 0.5, 
                    ...options
                };

                // State (Scroll Distortion)
                this.scrollY = window.scrollY; 
                this.lastScrollY = window.scrollY; 
                this.targetScrollDistortion = 0;
                this.currentScrollDistortion = 0;

                // State (Hover Distortion)
                this.isHovered = false;
                this.targetHoverStrength = 0.0;
                this.currentHoverStrength = 0.0;
                this.mouse = new THREE.Vector2(0.5, 0.5); 

                // Three.js Objects
                this.mesh = null; 
                this.clock = new THREE.Clock();
                this.material = null;
                
                this.textureLoader = new THREE.TextureLoader();
                this.initImage();
                this.initEvents();
            }

            correctColorSpace(texture) {
                texture.colorSpace = THREE.SRGBColorSpace;
                return texture;
            }

            initImage() {
                const geometry = new THREE.PlaneGeometry(
                    this.settings.width * 1, 
                    this.settings.height * 1, 
                    96, 
                    32  
                );

                this.material = new THREE.ShaderMaterial({
                    uniforms: {
                        uTexture: { value: null }, 
                        uScrollDistortionFactor: { value: 0.0 }, 
                        uHoverDistortionStrength: { value: 0.0 }, 
                        uMouse: { value: this.mouse },
                        uMeshSize: { value: new THREE.Vector2(this.settings.width, this.settings.height) }
                    },
                    vertexShader: customVertexShader,
                    fragmentShader: basicFragmentShader,
                    side: THREE.DoubleSide,
                    defines: {
                        'USE_MAP': '' 
                    },
                    flatShading: true, 
                });
                
                this.mesh = new THREE.Mesh(geometry, this.material);

                // FIX: Move mesh backward (Z-Shift) to avoid clipping from distortion
                const MAX_DISTORTION_SAFETY_MARGIN = -2.5; 
                this.mesh.position.set(0, 0, MAX_DISTORTION_SAFETY_MARGIN);

                let textureUrl = this.settings.imageUrls[0];
                
                this.textureLoader.load(textureUrl, (texture) => {
                    this.correctColorSpace(texture);
                    this.material.uniforms.uTexture.value = texture; 
                    this.material.map = texture;
                    this.material.needsUpdate = true;
                    
                    const aspect = texture.image.width / texture.image.height;
                    const planeAspect = this.settings.width / this.settings.height;

                    // Scaling logic for "Fit"
                    this.mesh.scale.set(1, 1, 1); 
                    if (aspect > planeAspect) {
                        this.mesh.scale.y = (planeAspect / aspect); 
                        this.mesh.scale.x = 1; 
                    } else {
                        this.mesh.scale.x = (aspect / planeAspect);
                        this.mesh.scale.y = 1; 
                    }

                }, undefined, (error) => {
                    console.error('Texture failed to load:', textureUrl, error);
                });

                this.sharedScene.add(this.mesh);
            }
            
            // NEW: Method called by ScreenShowcase to manage hover state and mouse position
            setHoverState(isHovered, normalizedMousePosition) {
                if (isHovered) {
                    this.targetHoverStrength = this.settings.HOVER_DISTORTION_STRENGTH;
                    this.mouse.copy(normalizedMousePosition); // Update the shader mouse uniform
                } else {
                    this.targetHoverStrength = 0.0;
                    this.mouse.set(0.5, 0.5); // Reset for shader smoothness
                }
                this.isHovered = isHovered;
                this.material.uniforms.uMouse.value = this.mouse;
            }


            // --- General Event Handlers (Scroll/Wheel remain local) ---
            handleScroll = () => {
                const currentScrollY = window.scrollY;
                const scrollDelta = currentScrollY - this.lastScrollY;
                this.lastScrollY = currentScrollY;
                
                this.scrollY = currentScrollY; 

                let newDistortion = Math.abs(scrollDelta) * 0.05 * this.settings.distortionReactivity; 
                this.targetScrollDistortion += Math.min(newDistortion, this.settings.MAX_TARGET_DISTORTION * 0.1); 
            }

            handleWheel = (e) => {
                let newDistortion = Math.abs(e.deltaY) * 0.001 * this.settings.distortionReactivity;
                this.targetScrollDistortion += Math.min(newDistortion, this.settings.MAX_TARGET_DISTORTION * 0.01);
            }
            
            initEvents() {
                window.addEventListener('scroll', this.handleScroll);
                window.addEventListener('wheel', this.handleWheel, { passive: true }); 
            }

            // Update method called by ScreenShowcase's single animate loop
            update(deltaTime) {
                const lastScrollY = this.scrollY; 
                const velocity = this.clock.getDelta() > 0 ? Math.abs(this.scrollY - lastScrollY) / this.clock.getDelta() : 0; 
                const isScrolling = velocity > 0.01;
                
                // 1. Update Scroll Distortion
                if (!isScrolling) {
                    this.targetScrollDistortion *= this.settings.distortionDecay;
                }
                this.targetScrollDistortion = Math.min(this.targetScrollDistortion, this.settings.MAX_TARGET_DISTORTION);
                this.currentScrollDistortion += (this.targetScrollDistortion - this.currentScrollDistortion) * this.settings.smoothing;
                this.currentScrollDistortion = Math.max(0, this.currentScrollDistortion); 

                // 2. Update Hover Distortion Strength
                this.currentHoverStrength += (this.targetHoverStrength - this.currentHoverStrength) * 0.2; 
                this.currentHoverStrength = Math.max(0, this.currentHoverStrength); 
                
                // 3. Update Shader Uniforms
                this.material.uniforms.uScrollDistortionFactor.value = this.currentScrollDistortion;
                this.material.uniforms.uHoverDistortionStrength.value = this.currentHoverStrength;
            }
            
            dispose() {
                // Remove window event listeners
                window.removeEventListener('scroll', this.handleScroll);
                window.removeEventListener('wheel', this.handleWheel); 
                
                // Remove mesh from the shared scene
                if (this.sharedScene && this.mesh) {
                    this.sharedScene.remove(this.mesh);
                }

                // Dispose of Three.js objects
                if (this.mesh) { this.mesh.geometry.dispose(); }
                if (this.material) {
                    if (this.material.uniforms.uTexture.value) {
                        this.material.uniforms.uTexture.value.dispose();
                    }
                    this.material.dispose();
                }
                
                // Remove the DUMMY DIV from the DOM
                if (this.canvas && this.canvas.parentNode) {
                    this.canvas.parentNode.removeChild(this.canvas);
                }
            }
        }

        // === 2. SCREENSHOWCASE WEB COMPONENT DEFINITION (Single Context Manager) ===

        const templatea = document.createElement("template");
        templatea.innerHTML = `
            <div class="cover" id="uniqueContainerID">
                <canvas id="sharedCanvas"></canvas> <div class="screenshot-container firsta" id="firstImageContainer"></div>
                </div>

            <style>
                .screenshot-container {
                    width: 900px; 
                    height: 500px; 
                    box-shadow: none; 
                    border-radius: 0.3rem;
                    margin-right: 1rem;
                    position: relative; 
                    overflow: visible; 
                    transform: translateZ(0);
                    /* NEW: Ensure z-index is low so sharedCanvas is on top */
                    z-index: 1; 
                }

                .cover {
                    overflow-x: visible; 
                    overflow-y: visible; 
                    display: flex;
                    flex-wrap: wrap; 
                    justify-content: flex-start;
                    margin: 2rem auto;
                    grid-area: 1 / 1;
                    z-index: 1;
                    position: relative; 
                    width: fit-content;
                }

                #sharedCanvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    /* FIX: REMOVE pointer-events: none; */ 
                    z-index: 100; /* Must be on top to catch events */
                }

                .cover::-webkit-scrollbar {
                    display: none;
                }
            </style>
        `;


        class ScreenShowcase extends HTMLElement {
            constructor(){
                super();
                const shadow = this.attachShadow({mode: "open"})
                shadow.append(templatea.content.cloneNode(true));
                
                this.cover = this.shadowRoot.querySelector(".cover");
                this.sharedCanvas = this.shadowRoot.querySelector("#sharedCanvas"); 

                this.firstImageContainer = this.shadowRoot.querySelector("#firstImageContainer");
                this.secondImageContainer = this.shadowRoot.querySelector("#secondImageContainer");
                this.thirdImageContainer = this.shadowRoot.querySelector("#thirdImageContainer");

                this.setLimit = {from: 0, to: 1500};
                this.minusConstant = 0; 
                this.appName = "";
                
                this.imageUrls = { first: "", second: "", third: "" };
                this.distortionEffects = [];

                this.renderer = null;
                this.scene = null;
                this.camera = null;
                this.clock = new THREE.Clock();
                this.animationFrameId = null; 
                this.activeHoverEffect = null; 

                this.initSharedThree();
                this.setHandleScroll();
                this.animate();
            }

            connectedCallback() {
                this.initDistortionEffects();
                this.initGlobalPointerEvents(); // Attach hover listeners
            }
            
            initSharedThree() {
                const width = this.clientWidth || 900;
                const height = this.clientHeight || 500;

                this.renderer = new THREE.WebGLRenderer({ 
                    canvas: this.sharedCanvas,
                    antialias: true,
                    alpha: true 
                });
                this.renderer.outputEncoding = THREE.sRGBEncoding;
                this.renderer.setSize(width, height);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 

                this.scene = new THREE.Scene();
                this.scene.background = null; 

                this.camera = new THREE.PerspectiveCamera(
                    75, 
                    width / height, 
                    0.1, 
                    1000 
                );
                this.camera.position.z = 5; 

                window.addEventListener('resize', this.handleResize);
            }

            initDistortionEffects() {
                this.distortionEffects.forEach(effect => {
                    if(effect && typeof effect.dispose === 'function') {
                         effect.dispose();
                    }
                });
                this.distortionEffects = [];

                if (!this.scene) return; 

                // Pass the shared scene
                if (this.imageUrls.first && this.firstImageContainer) {
                    this.distortionEffects.push(
                        new ImageDistortionEffect(this.firstImageContainer, this.imageUrls.first, { sharedScene: this.scene })
                    );
                }
                if (this.imageUrls.second && this.secondImageContainer) {
                    this.distortionEffects.push(
                        new ImageDistortionEffect(this.secondImageContainer, this.imageUrls.second, { sharedScene: this.scene })
                    );
                }
                if (this.imageUrls.third && this.thirdImageContainer) {
                    this.distortionEffects.push(
                        new ImageDistortionEffect(this.thirdImageContainer, this.imageUrls.third, { sharedScene: this.scene })
                    );
                }
            }
            
            // FIX: Attach listeners to the shared canvas, which is now the hit-target
            initGlobalPointerEvents() {
                if (!this.sharedCanvas) return;

                this.sharedCanvas.addEventListener('pointermove', this.handleGlobalPointerMove);
                this.sharedCanvas.addEventListener('pointerleave', this.handleGlobalPointerLeave);
            }

            // FIX: Global Pointer Move Handler uses shared canvas rect
            handleGlobalPointerMove = (event) => {
                let newHoveredEffect = null;
                let localNormalizedMouse = new THREE.Vector2();
                const canvasRect = this.sharedCanvas.getBoundingClientRect(); // Use the canvas's rect

                // 2. Determine which container (effect) the mouse is over
                for (const effect of this.distortionEffects) {
                    const containerRect = effect.container.getBoundingClientRect();
                    
                    // Check if mouse is inside this container
                    if (event.clientX >= containerRect.left &&
                        event.clientX <= containerRect.right &&
                        event.clientY >= containerRect.top &&
                        event.clientY <= containerRect.bottom) 
                    {
                        newHoveredEffect = effect;

                        // Calculate local normalized mouse position (0 to 1, relative to the container)
                        localNormalizedMouse.x = (event.clientX - containerRect.left) / containerRect.width;
                        localNormalizedMouse.y = 1.0 - ((event.clientY - containerRect.top) / containerRect.height); 
                        
                        break; 
                    }
                }
                
                // 3. Update hover states
                if (newHoveredEffect && newHoveredEffect !== this.activeHoverEffect) {
                    if (this.activeHoverEffect) {
                        this.activeHoverEffect.setHoverState(false); 
                    }
                    newHoveredEffect.setHoverState(true, localNormalizedMouse);
                    this.activeHoverEffect = newHoveredEffect;

                } else if (newHoveredEffect) {
                    newHoveredEffect.setHoverState(true, localNormalizedMouse);
                    
                } else if (this.activeHoverEffect) {
                    this.activeHoverEffect.setHoverState(false);
                    this.activeHoverEffect = null;
                }
            }

            handleGlobalPointerLeave = () => {
                if (this.activeHoverEffect) {
                    this.activeHoverEffect.setHoverState(false);
                    this.activeHoverEffect = null;
                }
            }
            
            animate = () => {
                this.animationFrameId = requestAnimationFrame(this.animate); 
                const deltaTime = this.clock.getDelta(); 

                this.distortionEffects.forEach(effect => effect.update(deltaTime)); 
                
                if (this.renderer && this.scene && this.camera) {
                    this.renderer.render(this.scene, this.camera);
                }
            }

            handleResize = () => {
                const width = this.clientWidth;
                const height = this.clientHeight;
                
                this.camera.aspect = width / height;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(width, height);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }


            mapRange(value, inMin, inMax, outMin, outMax) {
                value = Math.max(inMin, Math.min(value, inMax));
                return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
            }

            setHandleScroll = () => {
                const handle = () => { }
                handle(); 
                window.addEventListener('scroll', handle);
            }

            static get observedAttributes() { 
                return ["app-for", "first-url", "second-url", "third-url", "app-for-limit", "app-minus-constant"]; 
            }
            
            attributeChangedCallback(attr, oldVal, newVal) {
                if (oldVal === newVal) return; 
                switch (attr) {
                    case "app-for-limit":
                        if (newVal) {
                            let parts = newVal.split("-");
                            if (parts.length === 2) {
                                this.setLimit = {from: Number(parts[0]), to: Number(parts[1])};
                            }
                        }
                        break;
                    case "app-minus-constant":
                        this.minusConstant = Number(newVal) || 0;
                        break;
                    case 'app-for':
                        this.appName = newVal;
                        if (newVal === "spatial-gravity") {
                            this.cover.style.filter = "brightness(3.1)";
                        } else if (newVal === "Relays"){
                            this.cover.style.filter = "brightness(1.03)";
                        } else {
                            this.cover.style.filter = "none";
                        }
                        break;
                    case "first-url":
                        this.imageUrls.first = newVal;
                        this.initDistortionEffects(); 
                        break;
                    case "second-url":
                        this.imageUrls.second = newVal;
                        this.initDistortionEffects();
                        break;
                    case "third-url":
                        this.imageUrls.third = newVal;
                        this.initDistortionEffects();
                        break;
                }
            }
        }

        customElements.define("screen-showcase-new", ScreenShowcase);
        // Thanks Gemini 07/11/25 multiple canvas fix