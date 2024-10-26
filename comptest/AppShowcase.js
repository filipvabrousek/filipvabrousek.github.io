const template = document.createElement("template");
template.innerHTML = `

<div class="appShowcaseApp">
<h2 class="largeHidden" id="runnyLarge">

</h2>

<p class="descSlot">
<slot name="desc"></slot>
</p>

<div id="flexa">

<img src="images/runny-orig.png" class="app-imga" />
<h2 class="titles"></h2>
</div>
<p class="desc"></p>
<div class="add"></div>

<div class="oneMoreOverlay modernSection">


  <div class="blobImage blobImageRunny"></div>

<div id="runnyOverlay">

<div id="runnysa" class="leftIcon leftIconRunny">
  <div class="sidesImages">
    <img src="images/runny-orig.png" class="app-img" />
  </div>

  <div class="leftAppWrapper">

    <h2 class="stroked runnyStroked"><slot></slot></h2>
    <p class="appDesc">
    </p>

    <div class="stores">
     
    </div>
  </div>
</div>
</div>

<!---Make green gradient blob instead of an image and change its shape on scroll--->



</div>




</div>


<style>
.titles, .desc, .app-imga, .appstore  {
opacity: 1;
transform: translateY(100px);
}

.titles {
margin-bottom: 3rem;
letter-spacing: .4rem;
font-family: Bebas Neue, Roboto Condensed, Arial;
text-transform: uppercase;
}


.app-imga {
margin-left: 2rem;
opacity: 0;
}

.appstore {
width: 200px;
}

.desc {
color: black;
padding-bottom: 3rem;
font-size: 1.6rem;
}

#runnyOverlay, .blobImage {
opacity: 0;
transform: translateY(100px);
}

.titles {
font-size: 6rem;
margin-left: 2rem;

}


* {
margin: 0;
}

.appShowCaseApp {
height: 800px;
}

#flexa {
display: flex;
flex-direction: row;

align-items: center;

}

#flexa img {
width: 130px;
height: 100%

}

h2 {
color: transparent;
font-family: Arial;
font-size: 7rem;
}

.blobImage {
width: 700px;
height: 600px;
border-radius: 43% 56% 72% 28% / 42% 42% 56% 48%;
}

.app-img, .app-imga {
width: 250px;
border-radius: 30px;
opacity: 0;
}

.app-img {
display: none;
}
/*
.app-img, .blobImage {
position: absolute;
}*/



 .cover > img {
 border-radius: 1rem;
 }

 .cover {
 overflow-x: scroll;
            display: flex;
           transform: rotate(-3deg);
            justify-content: flex-start;
            width: 90%;
            margin-left: auto;
             margin-right: auto;
            height: 700px;
            grid-area: 1 / 1;
            z-index: 1;
            margin-top: 14rem; 
            
        }

        .cover::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Webkit-based browsers */
}

        .stroked {
            z-index: 1;
            /* Add more styles if necessary */
        }

        .screenshot {
            max-width: 460px;
            margin: 10px;
        }

        .desc {
        font-family: Arial;
        color: gray;
        } 

     
</style>

<script>
alert("a");
</script>
`;


class ScrollDrivenArrayInterpolator {
  constructor(startArray, endArray, scrollStart, scrollEnd) {
      if (startArray.length !== endArray.length) {
          throw new Error("Arrays must be of the same length.");
      }
      this.startArray = startArray;
      this.endArray = endArray;
      this.scrollStart = scrollStart; // Scroll position at which interpolation starts
      this.scrollEnd = scrollEnd;     // Scroll position at which interpolation ends
  }

  interpolateByScroll(scrollY) {
      // Clamp scrollY to be within the scroll range
      const clampedScrollY = Math.min(Math.max(scrollY, this.scrollStart), this.scrollEnd);

      // Normalize scrollY between 0 and 1
      const t = (clampedScrollY - this.scrollStart) / (this.scrollEnd - this.scrollStart);
      
      return this.startArray.map((startValue, i) => {
          const endValue = this.endArray[i];
          return startValue + (endValue - startValue) * t;
      });
  }
}


class AppShowcase extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(template.content.cloneNode(true));
        this.img = this.shadowRoot.querySelector(".app-img");
        this.appimga = this.shadowRoot.querySelector(".app-imga");
        this.blobImg = this.shadowRoot.querySelector(".blobImage");
        this.cover = this.shadowRoot.querySelector(".cover");
        this.titles = this.shadowRoot.querySelector(".titles");
        this.appstore = this.shadowRoot.querySelector(".appstore");
        this.runnyOverlay = this.shadowRoot.querySelector("#runnyOverlay");
        this.desc = this.shadowRoot.querySelector(".desc");
        this.imageRange = {min: 0, max: 1500};
        this.handleScroll();


       this.runnyOverlay.animate([
        { opacity: 1, transform: "translateY(0)" } // Adjust translation
      ], {
        duration: 1000, // Duration of the animation in milliseconds
        fill: 'forwards' // Retain the last keyframe after animation
      });

      this.blobImg.animate([
        { opacity: 1, transform: "translateY(0)" } // Adjust translation
      ], {
        duration: 1000, // Duration of the animation in milliseconds
        fill: 'forwards' // Retain the last keyframe after animation
      });
      }

      static get observedAttributes() { return ['greeting-name', "app-title", "app-desc", "app-img", "app-background", "app-anim-range", "fire-at-range", "app-minus-constant"]; }
      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        switch (attr) {
          case 'greeting-name':
            this.p.textContent = `${newVal || 'world'}!`;
            break;

            case 'app-title':
              this.er = newVal;
              console.log(`oValue is ${newVal}`);

             
              if (this.er === "SPATIAL-NETWORK"){
                console.log("IOHO");
                console.log("OH HELLO");
              //  alert("Hello")
               // this.shadowRoot.querySelector(".cover").style.height = "2000px";
                this.shadowRoot.querySelector('.titles').style.fontSize = "8rem";
              } else {
                this.shadowRoot.querySelector('.titles').style.fontSize = "8rem";
              }

              console.log("START IS ");
              console.log(newVal);
              // CHANGE THE IMAGE RANGE HERE FROM ATTR
      


               let letters = ["A", "B", "C", "D", "E", "G", "H", "I", "N", "O", "P", "Q", "R", "S",  "T", "U", "V"];

               let h1 = document.createElement("h3");
               h1.style.textAlign = "center";
               
               this.er.split("").map((l, i) => {
                let gen = document.createElement("span");
                gen.textContent = l;
                gen.setAttribute("id", letters[i])
                h1.appendChild(gen);

                if (this.er === "SPATIAL-NETWORK" && l === "L"){
                  let wbr = document.createElement("br");
                  h1.appendChild(wbr);
                  console.log("LAPPO")
                }
               });

              
      
              this.shadowRoot.querySelector('.titles').appendChild(h1);
             // this.title.textContent = `${newVal || 'world'}!`;
              break;

              case 'app-desc':
                this.shadowRoot.querySelector('.desc').textContent = newVal;

              case 'app-img':
                console.log(`aValue is ${newVal}`);
                this.shadowRoot.querySelector('.app-img').src = newVal;
                this.shadowRoot.querySelector('.app-imga').src = newVal;
               // this.title.textContent = `${newVal || 'world'}!`;
                break;


                case 'app-limit':
                  console.log(`Value is ${newVal}`);
                  this.globalLimit = newVal;
                  //this.handleScroll(newVal)
                 // this.title.textContent = `${newVal || 'world'}!`;
                  break;

                  case 'fire-at-range':
                    console.warn(`Anim start is ${newVal}`);
                    let mina = Number(newVal.split("-")[0]);
                    let maxa = Number(newVal.split("-")[1]);

                    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    const isEdge = navigator.userAgent.includes("Edg");

                    if (isSafari){
                     
                      mina = mina * .85;
                    //  max = max * 1.25;
                    }

                    if (isEdge){
                      mina = mina * 0.85;
                    }


                    this.fireAtRange = {from: mina, to: maxa};
                    break;

                  case 'app-anim-range':
                    console.warn(`Anim start is ${newVal}`);
                    let min = Number(newVal.split("-")[0]);
                    let max = Number(newVal.split("-")[1]);

    

                    this.imageRange = {min: min, max: max};
                  //  console.log(rangeObj);
                   // this.globalLimit = newVal;
                    //this.handleScroll(newVal)
                   // this.title.textContent = `${newVal || 'world'}!`;
                    break;

                  case 'app-background':
                    console.log(`aValue is ${newVal}`);
                  //  this.shadowRoot.querySelector('.titles').style.opacity = 0.6;
                    this.shadowRoot.querySelector('.blobImage').style.backgroundImage = `url("${newVal}")`;
                    this.shadowRoot.querySelector('.blobImage').style.backgroundSize = "900px";
                      this.shadowRoot.querySelector('.blobImage').style.backgroundRepeat = "no-repeat";
                    // .background = //"radial-gradient(#2ecc71, #1abc9c)";
                    //.backgroundImage = `url("https://res.cloudinary.com/simpleview/image/upload/v1579299474/clients/catalinaislandccvb/Untitled_Panorama1_be5bf235-9ac1-4ed9-9ba1-622fcf38611a.jpg")`;
                  
                    // this.title.textContent = `${newVal || 'world'}!`;
                    break;


                    case 'app-minus-constant':
                      console.log(`aValue is ${newVal}`);

                     
                      this.appMinusConstant = Number(newVal);
                    //  this.shadowRoot.querySelector('.titles').style.opacity = 0.6;
                      //this.shadowRoot.querySelector('.blobImage').style.background = "radial-gradient(#2ecc71, #1abc9c)";
                      //.backgroundImage = `url("https://res.cloudinary.com/simpleview/image/upload/v1579299474/clients/catalinaislandccvb/Untitled_Panorama1_be5bf235-9ac1-4ed9-9ba1-622fcf38611a.jpg")`;
                    
                      // this.title.textContent = `${newVal || 'world'}!`;
                      break;
        }
      }


      connectedCallback() {
        // Listen for the scroll event and expand the image if scrollY > 600
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
  
      disconnectedCallback() {
        // Clean up the event listener when the element is removed from the DOM
        window.removeEventListener('scroll', this.handleScroll.bind(this));
      }

      
      mapRange(value, inMin, inMax, outMin, outMax) {
        value = Math.max(inMin, Math.min(value, inMax));
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  
      handleScroll() {
        let progress = this.mapRange(window.scrollY, 0, 150, 0, 100);
        console.warn("PROG:" + progress);
      //  this.appimga.style.opacity = 1;
        this.desc.style.opacity = progress / 100;

        let el = this.shadowRoot.querySelector(`#A`);
   
        if (el != null){

       
        //  el.style.transform = `scale(0)`;
        

       const letters = ["A", "B", "C", "D", "E", "G", "H", "I", "N", "O", "P", "Q", "R", "S",  "T", "U", "V"];

        let word = this.er;


        for (var i = 0; i < word.length; i++) {
          
        /*  // Define a delay for each letter based on its index
          let delay = i * 0.1; // Adjust delay as needed (0.1 works well)
  let progress = this.mapRange(window.scrollY, 0, 150, 0, 1); // Normalized progress (0 to 1)

  // Only start scaling each letter after its delay
  let adjustedProgress = Math.max(0, (progress - delay) / (1 - delay)); // Adjust for the delay, rescaling to 0-1 range

  // Map scale from 0.3 to 1 as adjustedProgress goes from 0 to 1
  let scale = this.mapRange(adjustedProgress, 0, 1, 0, 1);

  // Ensure that scale doesn't exceed 1
  scale = Math.min(scale, 1);*/


  let fireAt = this.fireAtRange; 

    if (this.fireAtRange === undefined){
      return;
    }

    if (this.er === "SPATIAL-NETWORK") {
      this.shadowRoot.querySelector("#I").style.color = "transparent";
    }


    if (this.er === "RUNNY"){
      console.log("For runnya");
      console.warn(fireAt); 
      
    }
    

let maxDelay = 0.5; // Maximum delay (in seconds)
let wordLength = word.length;
let adjustedMaxDelay = Math.min(maxDelay, 1 / wordLength); // Scale delay based on word length

  // Adjust the delay for each letter
  let delay = i * adjustedMaxDelay;

  let progress = this.mapRange(window.scrollY, fireAt.from, fireAt.from + 400, 0, 1); // Normalized progress (0 to 1)
  
  // Adjust for delay, rescaling to 0-1 range
  let adjustedProgress = Math.max(0, (progress - delay) / (1 - delay));

  // Scale and rotation transformations
  let scale = this.mapRange(adjustedProgress, 0, 1, 0, 1);
  let rotationAngle = this.mapRange(adjustedProgress, 0, 1, 200, 360);
  
  rotationAngle = Math.max(rotationAngle, 270);

  // not applied to all letters in Spatial Network
  let el = this.shadowRoot.querySelector(`#${letters[i]}`);
  if (rotationAngle > 0){
    // alert(this.er);

    if (this.er === "SPATIAL-NETWORK"){
      el.style.color = "#1abc9c";
    } if (this.er === "RELAYS"){
      el.style.color = "#3498db";
    } else if (this.er === "EVENY"){
      el.style.color = "#4EABE8";
    }   else if (this.er === "RUNNY") {
      el.style.color = "#1abc9c";
    }
    
   // el.style.color = "black";
  } else {
    el.style.color = "transparent";
  }



/*

  let scaledScale = scale;
  //alert(this.er);
  if (this.er === "SPATIAL-NETWORK"){
    if (Math.abs(scale) > 0.8){
      scaledScale = 0.8;
    }
  } else {
    scaledScale = Math.abs(scale);
  }
  if (this.er === "SPATIAL-NETWORK"){
     console.log("SCA" + scaledScale);
   // alert(scaledScale);
  }*/



  this.appimga.style.opacity = 1;
  //el.style.textShadow = "3px 3px 10px #808080";
  el.style.transform = `scale(0)`;
  el.style.display = `inline-block`;
  el.style.transform = `rotate3D(1, 0, 0, ${rotationAngle}deg)`;
  this.appimga.style.transform = `rotate3D(1, 0, 0, ${rotationAngle}deg) scale(${Math.abs(scale)})`;
  // el.style.transform = `scale(${Math.abs(scale)})`;
        }
      }



      

          if (window.scrollY > 0) {

            // Example range (custom scroll range)
            const scrollRange = { from: this.imageRange.min, to: /*this.imageRange.max*/ this.imageRange.min + 600 }; // Define the custom range
            const scrollPositionA = Math.max(0, Math.min(window.scrollY, scrollRange.to)); // Clamp between from and to

            // Normalize scroll position within the range [0, 1]
            const t = (scrollPositionA - scrollRange.from) / (scrollRange.to - scrollRange.from);

            const startBorderRadius = [42, 56, 72, 28, 42, 42, 56, 48]; // Start values
            const endBorderRadius = [100, 20, 20, 100, 50, 80, 30, 30]; // End values
            const [beg, stp] = [scrollRange.from, scrollRange.to]; //[20, 400];

            const scrollInterpolator = new ScrollDrivenArrayInterpolator(startBorderRadius, endBorderRadius, beg, stp);
            const interpolatedBorderRadius = scrollInterpolator.interpolateByScroll(window.scrollY);
          
   
            console.log("INTERPOLAAAA");
            console.log(interpolatedBorderRadius);

            if (this.er === "SPATIAL-NETWORK"){ // 2900-3400 expecte range
           // console.clear(); // REAL RANGE IS 1600-2800
            console.log("SPATIAL RANGE");
            console.log("SR " + scrollRange.from + " - " + scrollRange.to);

              console.log(window.scrollY);
              console.log(t);
            }
            // Apply the calculated border-radius to the blobImg element
          
        //  if (t > 0){

     /*   let offsetScrollYBy = 0;
        let scroll = ((window.scrollY + offsetScrollYBy) / 10) + 1;
        scroll = scroll / 50;
*/
       /* let r = 42* scroll;
        if (43 * scroll < 20){

        }*/ // scroll si too small
         //   console.log("SCROLL-FACTOR:" + scroll);
            this.blobImg.style.borderRadius = `${interpolatedBorderRadius[0]}% ${interpolatedBorderRadius[1]}% ${interpolatedBorderRadius[2]}% ${interpolatedBorderRadius[3]}% / ${interpolatedBorderRadius[0]}% ${interpolatedBorderRadius[1]}% ${interpolatedBorderRadius[2]}% ${interpolatedBorderRadius[3]}%`;
        //  }


        this.appMinusConstant = this.imageRange.min;

         //   window.addEventListener("scroll", () => {
              const scrollPositionAB = window.scrollY - this.appMinusConstant;
              const maxScrollForW = 300;
              const clampedScroll = Math.max(0, Math.min(scrollPositionAB, maxScrollForW)); 
              console.log("CL" + clampedScroll);

            if (clampedScroll < 0){
              clampedScroll = 0;
            }
              
            const scrollPosition = window.scrollY; // Get current scroll position
            console.log("Scroll event fired. Current scroll position:", scrollPosition);
        
            // Calculate the translation based on scroll position
            const translateY = Math.min(scrollPosition, 100); // Limit translation to a maximum of 500px
            const translateX = Math.min(((100) * scrollPosition / 500), window.innerWidth / 2); // Center the image horizontally
            this.img.style.transform = `translate(${translateX}px, ${translateY}px)`; 
          } 
      }
}

// on monday
// sheep šíp
// palma palm

customElements.define("app-showcase", AppShowcase);


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