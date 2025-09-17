 let links = [
      {text: "Neopreny", url: "K"},
      {text: "Plavecké kombinézy", url: "K"},
      {text: "Plavecké brýle", url: "K"},
      {text: "Závodní plavky", url: "K"},
      {text: "Doplňky", url: "K"},
      {text: "Triatlonové kombinézy", url: "K"}
    ];




const makeLinks = () =>
  links.map(el =>
    new Link(el.text).set({
      cursor: "hand",
      fluidc: "S6",
      url: el.url,
      pad: [{ l: 10, r: 10, b: 12 }],
      font: "Arial"
    })
  );


   new Switcher().set({
        breakpoints: [
        { at: "0px", view: new MobileBar().set({
background: "#ecf0f1",
brand: new Image("img/blue70logo.png")
.set({
    width: "100px",
    height: "auto"
}),
mar: [{"a":21}],
pad: undefined,
resmar: undefined,
respad: undefined,
radius: "1rem",
}).add([
                         new Link().set({
    text: "Home",
    url: "#a"
}),

   


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
  url: "#e",
    cursor: "hand",
    flex: true, // implement
    icon: {
        padding: 30,
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    fluidc: "S6",
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

...makeLinks()    

]),


  new Link().set({
    text: "Team blueseventy",
    url: "#a"
}),


new Link().set({
    text: "Uživatelské tipy",
    url: "#b"
}),

new Link().set({
    text: "Kontakt",
    url: "https://www.abcnews.com"
})

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
new Image("img/blue70logo.png").set({
  width: "100px"
})
,
new Spacer(undefined),


new Link().set({
    text: "Home",
    url: "#a"
}),

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
    url: "A",
    cursor: "hand",
    flex: true, // update
    icon: {
        padding: 30,
        url: "https://cdn-icons-png.flaticon.com/512/60/60995.png"
    },
    fluidc: "S6",
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

new Link().set({
    text: "Teams blueseventy",
    url: "#a"
}),

new Link().set({
    text: "Uživatelské tipy",
    url: "#a"
}),

new Link().set({
    text: "Kontakt",
    url: "#a"
})
]) }, 

        ]
      }).render("#mount"); 