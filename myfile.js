class EL {
  constructor(){
    this.el = document.createElement("h1");
    let node = document.createTextNode("A");
    this.el.appendChild(node);
  }

  ere(){

    return  this.el;
  }
}
