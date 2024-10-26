
function SA(el) {
    return document.querySelectorAll(el);
}

// I do not wanna update this each year :D
//S(".footer-em").innerHTML = new Date().getFullYear();
//  S("#insta").addEventListener("click", () => window.open("https://www.instagram.com/filipvabrousek/"));
// S("#fba").addEventListener("click", () => window.open("https://www.facebook.com/filipvabrousek"));
// S("#macinformer").addEventListener("click", () => window.open("https://macdownload.informer.com/eveny/"));

var isHidden = true;
var isExpanded = true;


const makeDoers = () => {

    isExpanded = true;

    S("#h").animate([
        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-120%, 0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });


    S("#l").animate([
        { transform: 'translate(-140%, 0)', opacity: "1", },
        { transform: 'translate(0,0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });


    S("#navback").animate([
        { transform: 'translate(-100%, 0)', opacity: "0", },
        { transform: 'translate(0,0)', opacity: "1", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });

/*
    S(".firstName").animate([ // NO-EFFECT

        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
       
    });*/

    S(".lastName").animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });



    let s = document.querySelectorAll(".sideSmall")[0];
    s.animate([
        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 800
    });


    let sSecond = document.querySelectorAll(".sideSmall")[1];
    sSecond.animate([
        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 1100
    });

    S(".newSubtitle").animate([ // OKAY
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 200
    });

}



S("#h").addEventListener("click", () => {
/*S("#h").click(function(event){
    event.preventDefault();
 });*/

makeDoers();

});


const oladoers = () => {


    isExpanded = false;

    S("#l").animate([

        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-140%, 0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });


    S("#h").animate([
        { transform: 'translate(-120%, 0)', opacity: "1", },
        { transform: 'translate(0,0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });




    let sSecond = document.querySelectorAll(".sideSmall")[1];
    sSecond.animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 800
    });



    let s = document.querySelectorAll(".sideSmall")[0];
    s.animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 1100
    });




    S("#navback").animate([
        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-100%, 0)', opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1500
    });

/*
    S(".firstName").animate([

        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });*/

    S(".lastName").animate([
        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1700
    });

    S(".newSubtitle").animate([ // NOT OKAY
        { transform: 'translateY(150%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1700
    });


/*
    window.setTimeout(() => {
     window.location = "sport.html"; 185431
    }, 2000);*/
}



const oladoersWithTimeout = () => {


    isExpanded = false;

    S("#l").animate([

        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-140%, 0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });


    S("#h").animate([
        { transform: 'translate(-120%, 0)', opacity: "1", },
        { transform: 'translate(0,0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });




    let sSecond = document.querySelectorAll(".sideSmall")[1];
    sSecond.animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 800
    });



    let s = document.querySelectorAll(".sideSmall")[0];
    s.animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 700,
        fill: 'forwards',
        delay: 1100
    });




    S("#navback").animate([
        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-100%, 0)', opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1500
    });



    S(".lastName").animate([
        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },


    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1700
    });


    window.setTimeout(() => {
     window.location = "sport.html"; // 185431
    }, 3000);
}

S("#l").addEventListener("click", () => {
    oladoers();
});








// let sp = document.querySelector("#sportHover img");
let wp = document.querySelector("#workHover img");



if (isExpanded){


this.wasAtSport = false;
S("#workHover .sideSmall").onmouseover = () => {
    wp.setAttribute("src", "https://media1.giphy.com/media/13GIgrGdslD9oQ/giphy.gif");
  

    if (this.wasAtSport){ // move 90px up
        this.wasAtSport = false;
       
     //   S("#workHover .sideSmall").onmouseout = () => {
            if (isExpanded) {
                wp.animate([
                    { transform: "translateY(250px) rotate(10deg)", },
                    {  transform: "translateY(0px) rotate(-10deg)", },
                ], {
                    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
                    duration: 300,
                    fill: 'forwards',
                    delay: 200
                });
            }
       // }
    }
   
}

}


/*
S("#workHover .sideSmall").onmouseout = () => {
    if (isExpanded) {
        wp.animate([
            { opacity: "1", },
            { opacity: "0", },
        ], {
            easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
            duration: 300,
            fill: 'forwards',
            delay: 200
        });
    }
}*/


if (isExpanded){






            S("#sportHover .sideSmall").onmouseover = () => {
                
                this.wasAtSport = true;

                wp.setAttribute("src", "https://gifdb.com/images/high/runner-s-mountain-trail-athletes-ai01nacaqhgy2g35.gif");


               

    if (isExpanded) {
      wp.animate([
        { transform: "translateY(0px) rotate(-10deg)", },
        {  transform: "translateY(250px) rotate(10deg)", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 0
    });
              }
            }

        }


          /*  S("#sportHover .sideSmall").onmouseout = () => {
    if (isExpanded) {
      wp.animate([
        { opacity: "1", },
        {  opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 0
    });
              }
            }*/