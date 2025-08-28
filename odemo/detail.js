

let r = new Center().items(
    [
        new Text("Best ship")
            .set({
                font: "Arial",
                clampc: "S1",
                em: 4.2,
                color: "white",
                weight: "bold",
                removeDecoration: true,
                id: "header",
                arrayMargin: { sides: ["top"], value: "7rem" },
            })
    ]
)

let ropo = document.createElement("a");
ropo.setAttribute("href", "index");

let l = new Link("Hello", "index.html").set({
    link: "index.html",
    data: {
        options: {
            url: "index.html",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2048px-Back_Arrow.svg.png",
            size: "70px",
            radius: "0.1rem"
        }
    },

});

let flex = new FlexRow().items([
    l,
    new Spacer(true),
]);

let ela = flex.render();
ela.style.marginTop = "1rem";
document.body.appendChild(ela);


let el = r.render();

document.body.appendChild(el);
document.querySelector("#header").style.transform = "translateY(200px)";
document.querySelector("#header").animate([
    { opacity: "1", opacity: "0" },
    { transform: "translateY(200px)", transform: "translateY(0px)", },

], {
    duration: 800,
    fill: 'forwards'
});


let a = document.createElement('a');
a.href = 'index.html';

let e = new Image("https://media.cnn.com/api/v1/images/stellar/prod/ap24002766263400.jpg?c=original", 'exact').set({
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/ap24002766263400.jpg?c=original',
    class: "img-small",
    width: "900px",
    height: "600px",

    arrayMargin: { sides: ["top"], value: "7rem" },
    vtn: "iconimg"
});

let ra = new Center().items(
    [
        e
    ]);



let tz = ra.render();

a.appendChild(tz);
document.body.appendChild(a);


let paragraph = new Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a maximus massa. Nam at egestas ante, vitae posuere turpis. Suspendisse non metus sagittis, tristique sem id, pellentesque urna. Phasellus tempus quam at tellus suscipit, non maximus leo euismod. Nunc quis facilisis turpis. Donec tristique vel felis eu finibus. Maecenas malesuada rutrum est pulvinar dapibus. Praesent eu sem condimentum, posuere turpis sit amet, mollis libero. Praesent nulla nibh, sagittis sed justo ut, facilisis malesuada odio.")
    .set({
        font: "Arial",
        clampc: "S1",
        em: 1.2, color: "white",
        weight: "bold",
        removeDecoration: true,
        id: "header",
        arrayMargin: { sides: ["left", "right"], value: "auto" },
        width: "50%",
        arrpad: { sides: ["bottom", "top"], value: "2.6rem" }
    });

document.body.appendChild(paragraph.render());

let paragraphB = new Text("Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vulputate nunc a turpis tristique vestibulum. Aliquam pretium aliquam risus, ac laoreet eros ullamcorper et. Maecenas elementum libero vestibulum cursus fringilla. Sed facilisis, nibh et convallis pharetra, eros nisl placerat risus, eget varius magna arcu sit amet dui. Pellentesque consectetur nulla sit amet arcu tristique varius. Nullam at elit sit amet lectus cursus tempus vel et ligula. Pellentesque a tincidunt felis, vitae semper enim. Integer luctus nunc nec elementum dignissim. Nam aliquet euismod quam, non pellentesque arcu tristique porta.")
    .set({
        font: "Arial",
        clampc: "S1",
        em: 1.2, 
        color: "white",
        weight: "bold",
        removeDecoration: true,
        id: "header",
        width: "50%",
        arrayMargin: { sides: ["left", "right"], value: "auto" },
        arrpad: { sides: ["bottom"], value: "2.6rem" }
    });


let paragraphC = new Text("Nullam a ornare eros, a vestibulum nulla. Aenean cursus dui pharetra, pellentesque leo eu, euismod tortor. Curabitur tempor mollis lorem, in dignissim nisl convallis at. Etiam dictum, ex eu tempus varius, massa purus malesuada ipsum, elementum aliquet sem quam ut ante. Quisque sed facilisis lacus. Curabitur aliquet egestas nisl sit amet malesuada. Cras vitae finibus ligula, vitae vestibulum magna. Cras molestie ac elit eu aliquam. Phasellus posuere sit amet tellus ut mattis. Quisque blandit at lacus at hendrerit.")
    .set({
        font: "Arial",
        clampc: "S1",
        em: 1.2, 
        color: "white",
        weight: "bold",
        removeDecoration: true,
        id: "header",
        width: "50%",
        arrayMargin: { sides: ["left", "right"], value: "auto" },
    });

document.body.appendChild(paragraph.render());
document.body.appendChild(paragraphB.render());
document.body.appendChild(paragraphC.render());