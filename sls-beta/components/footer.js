class FooterEl extends Base {
    constructor() {
      super();
    }

    render() {
      return new Center().items([
        new Text("Petr Vabrousek@2025").set({
          exact: "1em",
          font: "Arial",
          weight: "bold",
          //bold: true,
          color: "gray",
          pad: [{ tb: "3rem" }]
        })
      ])
    }
  }


  export {FooterEl};
