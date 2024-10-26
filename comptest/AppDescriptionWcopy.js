const templatead = document.createElement("template");
templatead.innerHTML = `
<h1>Hello</h1>

<style>
h1 {
    display: block;
    width: 500px;
    height: 500px;
    color: orange;
    opacity: 1;
    z-index: 1;
    border: 3px solid orange;
}
</style>
`;


class Titlesa extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(templatead.content.cloneNode(true));
        this.titlea = this.shadowRoot.querySelector("h1");
        this.appDesc = "";
      }
      
      static get observedAttributes() { return ["app-desc"]; }

      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        switch (attr) {
              case 'app-desc':
                this.appDesc = newVal;
                this.title.textContent = `${newVal || 'world'}!`;
                break;
        }
      }
}

customElements.define("wapp-description", Titlesa);





