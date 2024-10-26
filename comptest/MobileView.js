const templatead = document.createElement("template");
templatead.innerHTML = `

<h1>o</h1>

<div id="flex">
<img class="icon" src="">
</div>

<p></p>

<img class="appstore"/>
<img class="googleplay"/>

<img class="featured"/>

<div id="mobile-showcase">
   <img class="mobile-first"/>
   <img class="mobile-second"/>
   <img class="mobile-third"/>
</div>




<style>
* {
font-family: Arial, sans-serif;
}

#flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
   
    text-align: center;
}

p {
 font-size: 1.3rem;
 padding: 1rem;
}

#mobile-showcase {
display: flex;
justify-content: flex-start;
align-items: flex-start;
overflow-x:scroll;
margin-top: 1rem;
}

#mobile-showcase img {
padding: 0.3rem;
height: 18rem;
/*height: 10rem;*/
}

.mobile-first {
/*padding-left: 38rem !important;*/
}

.icon {
width: 160px;
height: auto;
border-radius: 20px;
}

.appstore, .googleplay {
display: block;
width: 160px;
height: auto;
margin-left: auto;
margin-right: auto;
margin-bottom: 1.6rem;
}

.featured {
display: none;
width: 240px;
margin: auto;
}
</style>
`;


class MobileView extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(templatead.content.cloneNode(true));
        // This cannot be title for some reason
        this.titlea = this.shadowRoot.querySelector("h1");
        this.desca = this.shadowRoot.querySelector("p");
        this.icona = this.shadowRoot.querySelector(".icon");
        this.firstImg = this.shadowRoot.querySelector(".mobile-first");
        this.secondImg = this.shadowRoot.querySelector(".mobile-second");
        this.thirdImg = this.shadowRoot.querySelector(".mobile-third");
        this.appStore = this.shadowRoot.querySelector(".appstore");
        this.googlePlay = this.shadowRoot.querySelector(".googleplay");
        this.featured = this.shadowRoot.querySelector(".featured");
        this.googlePlay.setAttribute("src", "https://filipvabrousek.github.io/images/playStore.png");
        this.googlePlay.style.display = "none";
        this.appStore.setAttribute("src", "https://filipvabrousek.github.io/images/download.png");
        this.featured.setAttribute("src", "https://filipvabrousek.github.io/images/appstore-feature.png");
        this.appDesc = "";
      }
      
      static get observedAttributes() { return ["app-desc", "app-title", "app-icon", "mobile-first", "mobile-second", "mobile-third", "mobile-play-url", "mobile-appstore-url", "mobile-featured"]; }

      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        switch (attr) {

          case 'app-title':
           // this.titlea = newVal;
            this.titlea.textContent = `${newVal || 'world'}`;

            if (newVal==="Spatial Network"){
              this.firstImg.style.height = "10rem";
              this.secondImg.style.height = "10rem";
              this.thirdImg.style.height = "10rem";
            

             // this.firstImg.style.paddingLeft = "38rem !important";

            } else {
            //  alert("/")
            //  this.firstImg.style.paddingLeft = "88rem !important";
            }


            break;


              case 'app-desc':
                this.appDesc = newVal;
                this.desca.textContent = `${newVal || 'world'}`;
                break;

              case 'app-icon':
                this.icona.setAttribute("src", newVal);
                break;

                case 'mobile-first':
                  this.firstImg.setAttribute("src", newVal);
                  break;

                  case 'mobile-second':
                    this.secondImg.setAttribute("src", newVal);
                    break;

                    case 'mobile-third':
                      this.thirdImg.setAttribute("src", newVal);
                      break;

                      case 'mobile-play-url':
                      this.googlePlay.style.display = "block";
                      this.googlePlay.addEventListener("click", () => {
                        window.open(newVal);
                      });
                      break;

                      case 'mobile-appstore-url':
                        this.appStore.addEventListener("click", () => {
                          window.open(newVal);
                        });
                        break;

                        case 'mobile-featured':
                          this.featured.style.display = "block";
                          this.featured.addEventListener("click", () => {
                            window.open("https://apps.apple.com/story/id1531962992");
                          });
                          break;

                    

              
        }
      }
}

customElements.define("mobile-view", MobileView);





