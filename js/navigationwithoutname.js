
function SA(el) {
    return document.querySelectorAll(el);
}

// I do not wanna update this each year :D
//S(".footer-em").innerHTML = new Date().getFullYear();
//  S("#insta").addEventListener("click", () => window.open("https://www.instagram.com/filipvabrousek/"));
// S("#fba").addEventListener("click", () => window.open("https://www.facebook.com/filipvabrousek"));
// S("#macinformer").addEventListener("click", () => window.open("https://macdownload.informer.com/eveny/"));

var isHidden = true;



const makeDoer = () => {

    this.isExpanded = true;

    S("#h").animate([
        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-120%, 0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });


    S("#l").animate([
        { transform: 'translate(-120%, 0)', opacity: "1", },
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


   /* S(".firstName").animate([

        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });

    S(".lastName").animate([
        { transform: 'translateY(0)', opacity: "1", },
        { transform: 'translateY(100%)', opacity: "0", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });
*/


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

}







S("#h").addEventListener("click", makeDoer);








//  else {

S("#l").addEventListener("click", () => {
    // S("#l").textContent = "☰";



    this.isExpanded = false;

    S("#l").animate([

        { transform: 'translate(0,0)', opacity: "1", },
        { transform: 'translate(-120%, 0)', opacity: "1", },


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


   /* S(".firstName").animate([

        { transform: 'translateY(100%)', opacity: "0", },
        { transform: 'translateY(0)', opacity: "1", },

    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards',
        delay: 1700
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






    S(".firstName").animate([
        { transform: 'translate(0, 100%)', opacity: "1", },
        { transform: 'translate(0,0)', opacity: "1", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 1000,
        fill: 'forwards'
    });
*/

});





let sp = document.querySelector("#sportHover img");
let wp = document.querySelector("#workHover img");

  S("#workHover .sideSmall").onmouseover = () => {
    if (this.isExpanded) {
      wp.animate([
        { opacity: "0", },
        {  opacity: "1", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 200
    });
              }
            }


            S("#workHover .sideSmall").onmouseout = () => {
    if (this.isExpanded) {
      wp.animate([
        { opacity: "1", },
        {  opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 200
    });
              }
            }



            S("#sportHover .sideSmall").onmouseover = () => {
    if (this.isExpanded) {
      sp.animate([
        { opacity: "0", },
        {  opacity: "1", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 0
    });
              }
            }


            S("#sportHover .sideSmall").onmouseout = () => {
    if (this.isExpanded) {
      sp.animate([
        { opacity: "1", },
        {  opacity: "0", },
    ], {
        easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
        duration: 300,
        fill: 'forwards',
        delay: 0
    });
              }
            }