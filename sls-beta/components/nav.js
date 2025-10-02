let links = [
  {text: "Neopreny", url: "https://filipvabrousek.github.io/sls-beta/products?cat=wetsuits"},
  {text: "Plavecké kombinézy", url: "https://filipvabrousek.github.io/sls-beta/products?cat=swimskins"},
  {text: "Plavecké brýle", url: "https://filipvabrousek.github.io/sls-beta/products?cat=goggles"},
  {text: "Závodní plavky", url: "https://filipvabrousek.github.io/sls-beta/products?cat=racesswimwear"},
  {text: "Doplňky", url: "https://filipvabrousek.github.io/sls-beta/products?cat=amenities"},
  {text: "Triatlonové kombinézy", url: "https://filipvabrousek.github.io/sls-beta/products?cat=triskins"}
];
//http://localhost:2000/products?cat=wetsuits
// To link wrapper in dropdown: z-index: 9999px
class NavLink extends Base {
  constructor(obj) {
    super();
    this.text = obj.text;
    this.url = obj.url
  }

  render() {
    return new Link().set({
      text: this.text,
      bold: true,
      url: this.url,
      fluidc: "S6", // add exact
      hover: {
        color: "#3498db"

      }
    });

  }
}


const makeLinks = () =>
  links.map(el =>
    new Link(el.text).set({
      cursor: "hand",
      size: "S6",
      url: el.url,
      pad: [{ l: 10, r: 10, b: 12 }],
      font: "Arial",
      hover: {
        color: "#3498db",
        // background: "#3498db" also works nicely!
      }
    })
  );


new Switcher().set({
  breakpoints: [
    {
      at: "0px", view: new MobileBar().set({
        background: "#ecf0f1",
        brand: new Image("img/blue70logo.png")
          .set({
            width: "100px",
            height: "auto"
          }),
        mar: [{ "a": 21 }],
        pad: undefined, // REMOVE FROM CODEGEN
        resmar: undefined,
        respad: undefined,
        radius: "1rem",
      }).add([
        new NavLink({
          text: "Home",
          url: "index.html",
          cursor: "hand"
        }).render(),


new Dropdown().set({
  behaviour: "mouseover",
  pad: [{"a":40}],
  mar: [{"lr":"auto"}],
  breakpoint: "1200px",
  padding: "10px",
  border: "1px solid black",
  height: "auto"
}).add([
 new Link("Katalog").set({
  text: "Katalog",
  url: "categories.html",
    cursor: "hand",
    flex: true, // implement
    icon: {
        padLeft: "40px", // should be padRight 
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    size: "S6",
    flex: true,
    pad: [
        {
            l: 10,
            r: 10
        }
    ],
    font: "Arial",
    align: "center",
    weight: "bold"
}),

new Wrapper()
  .set({ 
    display: "flex",
  flexDir: "column",
  mar: [
    {
      t: "10px"
    }
  ],
  radius: ".3rem"
})
  .add([...makeLinks() ])



 

]),


 new NavLink({
        text: "Team Blueseventy",
        url: "team-blueseventy"
    }).render(),

new NavLink({
        text: "Uživatelské tipy",
        url: "user-tips"
    }).render(),

new NavLink({
        text: "Kontakt",
        url: "contact"
    }).render(),

                    ]) }, 
{ at: "1200px", view: new DesktopBar()
.set({background:"#ecf0f1",
mar:[{a:21}],
maxHeight:"100px",
// error
//brand: new Image("https://sls3.weebly.com/uploads/4/0/5/5/40554337/659389662_orig.png"),
radius:"1rem"
}).add([
                 

/*
new Text("SLS3").set({
    size: "S6",
    font: "Helvetica"
})*///,

new Link().set({
  data: {
    options: {
      img: "img/blue70logo.png",
      url: "index.html",
      size: "80px"
    }
  }
})
/*
new Image("img/blue70logo.png").set({
  width: "100px"
})*/
,
new Spacer(undefined),

    new NavLink({
        text: "Home",
        url: "index.html"
    }).render(),

new Dropdown().set({
  behaviour: "mouseover",
  pad: [{"a":40}],
  padding: "10px",
  border: "1px solid black",
  radius: "30px",
  width: "130px"
}).add([
 new Link("Katalog").set({
    text: "Katalog",
    url: "categories.html",
    cursor: "hand",
    flex: true, // update
    icon: {
         padLeft: "40px", 
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    size: "S6",
    pad: [
        {
            l: 10,
            r: 10
        }
    ],
    font: "Arial",
    align: "center",
    weight: "bold"
}),new Wrapper()
  .set({
  flexDir: "column",
  mar: [
    {
      t: "10px"
    }
  ],
  radius: ".3rem"
})
  .add([...makeLinks() ]/*[
...other
  ]*/)

]),

new NavLink({
        text: "Team blueseventy",
        url: "team-blueseventy"
    }).render(),

new NavLink({
        text: "Uživatelské tipy",
        url: "user-tips"
    }).render(),

new NavLink({
        text: "Kontakt",
        url: "contact"
    }).render(),
]) }, 

        ]
      }).render("#mount"); 