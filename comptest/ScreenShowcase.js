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
  border-radius: 1rem;
  margin: 1rem;
  }


 
  .cover {
  overflow-x: scroll;
             display: flex;
            transform: rotate(-3deg);
             justify-content: flex-start;
            /* width: 90%; */
             margin-left: auto;
              margin-right: auto;
             height: 700px;
             grid-area: 1 / 1;
             z-index: 1;
             margin-top: -21rem;
           
             
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
    this.cover.scrollLeft = scrollLeftValue;



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


    this.cover.children[0].style.transform = `scale(${mapped}) rotate(-${mappedLeft}deg)`;
    this.cover.children[1].style.transform = `scale(${mapped}) rotate(-${mappedLeft}deg)`;
    this.cover.children[2].style.transform = `scale(${mapped}) rotate(-${mappedLeft}deg)`;;
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