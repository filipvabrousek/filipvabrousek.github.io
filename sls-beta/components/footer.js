class FooterEl extends Base {
    constructor() {
      super();
    }

    render() {
      return new Center().items([
        new Text("Petr Vabrousek@2025").set({
          size: "S6",
          font: "Arial",
          pad: [{ tb: "1rem" }]
        })
      ])
    }
  }


  export {FooterEl};
