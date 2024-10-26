const templatead = document.createElement("template");
templatead.innerHTML = `
<h1>Relays</h1>

<h2>Relays</h2>

<style>
h1 {
    color: orange;
}
</style>
`;


class MobileView extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(templatead.content.cloneNode(true));
        // This cannot be title for some reason
        this.titlea = this.shadowRoot.querySelector("h2");
        this.appDesc = "";
      }
      
      static get observedAttributes() { return ["app-desc"]; }

      attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal === newVal) return; // nothing to do
        switch (attr) {
              case 'app-desc':
                this.appDesc = newVal;
                this.titlea.textContent = `${newVal || 'world'}!`;
                break;
        }
      }
}

customElements.define("mobile-view", MobileView);





