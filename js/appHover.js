//235447 cursir ok 31/03

window.localStorage.setItem("blockHoverFor4secs", "unblocked");


let relaysOptions = {
    li: "#relaysa",
   // li: "#relaysOverlay",
    overlay: "#relaysOverlay",
    stroked: ".relaysStroked",
    screenshots:[
        "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/3a/e6/9c/3ae69cb5-53bf-91f2-7638-bc58de5f1120/c111156a-1be9-4afe-91bf-c74fc3dc059c_iPhone-58-Relays-screensArtboard-2.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/72/b2/fa/72b2fa2c-0b4a-2c54-d2eb-256d1d12ba86/5f4954dc-83c8-45fa-9069-7ea1bc4a4fa8_iPhone-58-Relays-screensFind-perfect-buddies.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8d/38/06/8d380639-1e4c-e908-256d-86e2d474dfbb/43c55054-72f1-4bd1-8c93-2e6865325e9d_iPhone-58-Relays-screensArtboard-6.png/460x0w.webp"
    ],

    uniqueContainerID: "#rls",
    storeClass: ".xstores"
}

toGeneric(relaysOptions);



let evenyOptions = {
    li: "#evenysa",
    overlay: "#evenyOverlay",
    stroked: ".evenyStroked",
    screenshots:[
        "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/90/a1/63/90a16304-b0ee-a640-9db5-f29e3e3be48e/pr_source.png/460x0w.webp",
        "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/f4/0a/49/f40a49e4-1c7d-2fef-9499-d1e726fc4885/pr_source.png/460x0w.webp",
        "https://is4-ssl.mzstatic.com/image/thumb/PurpleSource113/v4/d5/7b/55/d57b554c-e5c7-03e5-1032-98d778fdd7f7/3e9dc813-736d-4699-8600-6376cc55efd3_iCloud-SYNC-58.png/600x0w.webp"
    ],

    uniqueContainerID: "#rlsa",
    storeClass: ".ystores"
}

toGeneric(evenyOptions); // 12:20:02 Both, Eveny not full loopback !!!



let runnyOptions = {
    li: "#runnysa",
    overlay: "#runnyOverlay",
    stroked: ".runnyStroked",
    screenshots:[
        "https://is5-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/a8/ce/fe/a8cefec5-538c-ad3c-c618-82dd239c3773/34cad328-3423-49c7-8cec-0135692f9395_SECRET-screens-20-4-19-lateaArtboard-1.png/460x0w.webp",
        "https://is5-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/92/22/bf/9222bf33-0574-0bde-fe18-4b280bcd26ce/1e5e848e-1405-44c9-b4cc-4e14f40dbe03_SECRET-screens-20-4-19-lateaArtboard-2.png/460x0w.webp",
       "https://is3-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ac/37/72/ac3772c7-bd00-718e-dffa-b549145f17a4/dafd6ace-e23a-44bf-b7ca-3bf3ce8d5f56_SECRET-screens-20-4-19-lateaArtboard-5.png/460x0w.webp"
    ],

    uniqueContainerID: "#rlsb",
    storeClass: ".zstores"
}

toGeneric(runnyOptions); // 12:20:02 Both, Eveny not full loopback !!!






let swimrunOptions = {
    li: "#swimrunnysa",
    overlay: "#swimrunnyOverlay",
    stroked: ".swimrunnyStroked",
    screenshots:[
       "https://is4-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/cd/bc/9f/cdbc9f58-9919-89de-be38-ea8459800abb/80d6aab9-ea2b-4bb9-aff5-4b260df70c19_Races.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/29/b6/89/29b68994-542b-eca9-37cd-37414807dd5e/pr_source.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/3a/da/b0/3adab043-46d2-20eb-239a-aacf20ccb611/pr_source.png/460x0w.webp"
    ],

    uniqueContainerID: "#rlsc",
    storeClass: ".lstores"
}

toGeneric(swimrunOptions); // 12:20:02 Both, Eveny not full loopback !!!






// 11:34:55









function toGeneric(options){


    let li = document.querySelector(options.li);
    let overlay = document.querySelector(options.overlay);
    
    function getImage(url, i) {
        let screenshot = document.createElement("img");
        screenshot.style.width = "9rem";
        screenshot.style.height = "19rem";
        screenshot.setAttribute("src", url);
        screenshot.style.zIndex = "1";
        screenshot.style.gridArea = "1/1";
        screenshot.style.borderRadius = "1rem";
        screenshot.style.margin = "1rem";
        screenshot.style.boxShadow = "3px 3px 10px #000";
       


        if (i === 0){
            screenshot.setAttribute("class", "firstImage");
        }
       
        return screenshot;
    }
    
    
    let addedRelays = false;
    let allowHover = true;

    let allowHoverEveny = true;
    let allowHoverRunny = true;
    let allowHoverSwimrunny = true;
    


// 233746 scroll 06/04
// 234158 open nav while text loading wow 06/04







let isSafarii = navigator.vendor.match(/apple/i) &&
!navigator.userAgent.match(/crios/i) &&
!navigator.userAgent.match(/fxios/i) &&
!navigator.userAgent.match(/Opera|OPT\//);

const evenyLimit = isSafarii ? 2570 * 0.93 : 2570;

const relaysLimit = isSafarii ? 1500 * 0.85 : 1500;

const runnyLimit = isSafarii ? 4220 * 0.85 : 4220;

const swimrunnyLimit = isSafarii ? 5800 * 0.85 : 5800;

    window.addEventListener("scroll", () => {
        if (window.scrollY > relaysLimit && allowHover && options.li === "#relaysa"){
            allowHover = false;
            S("#relaysLarge").style.opacity = 1;
            S("#relaysLarge").style.transform = "translateY(0px)";
            S(".relaysStroked").style.display = "none";

            mouseOverAction();
        }

        if (window.scrollY > evenyLimit && allowHoverEveny && options.li === "#evenysa"){
            allowHoverEveny = false;
            mouseOverAction();
        }

        if (window.scrollY >  runnyLimit && allowHoverRunny && options.li === "#runnysa"){
            allowHoverRunny = false;
            mouseOverAction();
        }

        if (window.scrollY > swimrunnyLimit && allowHoverSwimrunny && options.li === "#swimrunnysa"){
            allowHoverSwimrunny = false;
            mouseOverAction();
        }
    });



    
  /*
        li.addEventListener("click", () => {
    const isMobile = window.matchMedia("(max-width: 415px").matches;
    



        if (allowHover && isMobile === false) {
            allowHover = false;
            mouseOverAction();
        }

    });
*/

    


    // 145008
    function mouseOverAction() {

       // alert(options.li);


        document.querySelector(".offGridImage").animate([ 
 
            { transform: 'translateX(0px) scale(1)' },
            { transform: ' translateX(200px) scale(2.4)' },
              
                  ], {
                      duration: 1000,
                      fill: 'both'
                  });


                  document.querySelector(".offGridImage").animate([ 
 
                    { transform: 'translateX(0px)' },
                    { transform: ' translateX(200px)' },
                      
                          ], {
                              duration: 1000,
                              fill: 'both'
                          });


                 /*   document.querySelector(".blobImage").animate([ 
 
                            { borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%', transform: "scale(1)" },
                            { borderRadius: '42% 28% 48% 48% / 28% 28% 72% 72%', transform: "scale(3)" },
                              
                                  ], {
                                      duration: 1000,
                                      fill: 'both'
                                  });
*/





let str = ".blobImageRelays";
let strLeft = ".leftIconRelays";



if (options.li === "#evenysa" && window.scrollY > evenyLimit){ // 13:08:37 05/04/2023
    str = ".blobImageEveny"
    strLeft = ".leftIconEveny";

    S("#evenyLarge").style.opacity = 1;
    S("#evenyLarge").style.transform = "translateY(0px)";
    S(".evenyStroked").style.display = "none";
}


// console.log(options.li);
console.log(`option.li: ${options.li}, scrollY: ${window.scrollY}`);

if (options.li === "#runnysa" && window.scrollY > runnyLimit){ 
    str = ".blobImageRunny"
    strLeft = ".leftIconRunny"

    S("#runnyLarge").style.opacity = 1;
    S("#runnyLarge").style.transform = "translateY(0px)";
    S(".runnyStroked").style.display = "none";
} 

if (options.li === "#swimrunnysa" && window.scrollY > swimrunnyLimit){ 
    str = ".blobImageSwimrunny"
    strLeft = ".leftIconSwimrunny" // 174833 nice 05/04

    S("#swimrunnyLarge").style.opacity = 1;
    S("#swimrunnyLarge").style.transform = "translateY(0px)";
    S(".swimrunnyStroked").style.display = "none";
}

let rs = document.querySelector(strLeft);
rs.style.borderRadius = "7px";
 // rs.style.borderRadius = "42% 56% 72% 28% / 42% 42% 56% 48%";
// rs.style.borderRadius = "20% 30% 40% / 30% 20% 60%";
// rs.style.borderRadius = "42% 56% 72% 28% / 42% 42% 56% 48%";



let br = document.querySelector(str);
// br.style.borderRadius = "42% 56% / 42% 42% ";
// 21:46:39




br.style.borderRadius = "88% 12% 76% 24% / 37% 36% 64% 63% ";
br.style.width = "90%";   
br.style.height = "600px";   



let mat = window.matchMedia("(max-device-width: 415px)").matches;
br.style.opacity =  mat ? 0.3 : 0.83; // 140250 29/06


//br.style.animation="blob 3s linear";
/*
br.animate([ // 22:52:40 28/03
{ borderRadius: ' 7px' },
{ borderRadius: ' 20px' }, // 23:13:27
], {
duration: 800,
fill: 'forwards'
});
*/










                          
        
/*
                  document.querySelector(".blobImage").animate([ 
 
                    { transform: 'translateX(0px) scale(1)' },
                    { transform: ' translateX(200px) scale(2.4)' },
                      
                          ], {
                              duration: 1000,
                              fill: 'both'
                          });
        */



        window.localStorage.setItem("blockHoverFor4secs", "unblocked");

        let cover = document.createElement("div");
        cover.style.gridArea = "1/1";
        cover.style.width = "100%";
      //  cover.style.height = "200%";
        document.querySelector(options.stroked).style.zIndex = "1";
    
        let screenShotDiv = document.createElement("div");
        screenShotDiv.style.display = "flex";
        screenShotDiv.style.justifyContent = "center";
        screenShotDiv.style.gridArea = "1/1";
        screenShotDiv.style.zIndex = "1";
      //  screenShotDiv.style.width = "100vw";
        screenShotDiv.style.height = "100%";
        screenShotDiv.setAttribute("id", options.uniqueContainerID.substring(1));
        screenShotDiv.setAttribute("class", "cover");
       // screenShotDiv.addEventListener("click", down);
    
       /* let screenshots = [
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/3a/e6/9c/3ae69cb5-53bf-91f2-7638-bc58de5f1120/c111156a-1be9-4afe-91bf-c74fc3dc059c_iPhone-58-Relays-screensArtboard-2.png/460x0w.webp",
            "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/72/b2/fa/72b2fa2c-0b4a-2c54-d2eb-256d1d12ba86/5f4954dc-83c8-45fa-9069-7ea1bc4a4fa8_iPhone-58-Relays-screensFind-perfect-buddies.png/460x0w.webp",
            "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8d/38/06/8d380639-1e4c-e908-256d-86e2d474dfbb/43c55054-72f1-4bd1-8c93-2e6865325e9d_iPhone-58-Relays-screensArtboard-6.png/460x0w.webp"
        ];*/
    
    
        for (var i = 0; i < options.screenshots.length; i++) {
            screenShotDiv.appendChild(getImage(options.screenshots[i], i)); // 13:33:10
        }

        let btn = document.createElement("button");
        btn.style.height = "20px";
        let te = document.createTextNode("Close");
        btn.appendChild(te);
        btn.addEventListener("click", down);
        
    
       // document.querySelector(`${options.li} .stores`).appendChild(btn);
    
    
        // document.createNSResolver 142134
    
        let img = document.createElement("img");
        img.setAttribute("src", "images/download.png");
        img.style.width = "200px";
        img.style.height = "auto";
    
        let imga = document.createElement("img");
        imga.setAttribute("src", "images/playStore.png");
        imga.style.width = "200px";
        imga.style.height = "auto";
    
        let wrdiv = document.createElement("div");
        wrdiv.appendChild(img);
        wrdiv.appendChild(imga);

    
    
        if (!addedRelays) {
            addedRelays = true;
            overlay.insertAdjacentElement("afterbegin", screenShotDiv);
            //  overlay.appendChild(wrdiv);
            overlay.appendChild(cover);
        }
    
    
        li.style.gridArea = "1/1";
    

// Check for mobile Safari
        let isSafarii = navigator.vendor.match(/apple/i) &&
        !navigator.userAgent.match(/crios/i) &&
        !navigator.userAgent.match(/fxios/i) &&
        !navigator.userAgent.match(/Opera|OPT\//);
        
        document.querySelector(options.uniqueContainerID).animate([ // 22:52:40 28/03
            { transform: ' scale(0)' },
            { transform: ' scale(1)' }, // 23:13:27
        ], {
            duration: 800,
            fill: 'forwards'
        });
    
        document.querySelector(options.uniqueContainerID).children[0].animate([ // 22:52:40 28/03
            { transform: ' translateY(0px)' },
            { transform: ` translateY(${isSafarii ? 160 : 30}px)` },
    
        ], {
            duration: 1000,
            fill: 'forwards'
        });


        if (isSafarii){
            document.querySelector(options.uniqueContainerID).children[1].animate([ // 22:52:40 28/03
            { transform: ' translateY(0px)' },
            { transform: ` translateY(${isSafarii ? 100 : 30}px)` },
    
        ], {
            duration: 1000,
            fill: 'forwards'
        });

        }
    
        document.querySelector(options.uniqueContainerID).children[2].animate([ // 22:52:40 28/03
            { transform: ' translateY(0px)' },
            { transform: ' translateY(-15px)' }, //-30px
    
        ], {
            duration: 1000,
            fill: 'forwards'
        });






        document.querySelector(`${options.storeClass}`).animate([ // 22:52:40 28/03   xyzstores
        { opacity: 0 },
        { opacity: 1 },

    ], {
        duration: 1000,
        fill: 'forwards'
    });
    
    
    
       /* document.querySelector(`${options.li} .appDesc`).animate([
            { opacity: 1 },
            { opacity: 0 },
        ], {
            duration: 300,
            fill: 'forwards'
        });*/



        let safariAppDescData = [
            { transform: "translateY(0px)" },
            { transform: "translateY(270px)" },
        ];


      
        
        if (window.matchMedia("(min-width: 1400px)").matches) {
            safariAppDescData[safariAppDescData.length - 1] =  { transform: "translateY(433px)" };
        }

/*
        window.setTimeout(() => {
            S(".appDesc").style.color = "#ffffff9e"; // 134239 opacity
        }, 500);*/
       

     //   S(".relaysStroked").style.color = "#ffffff9e";

        let isSafari = (navigator.vendor.match(/apple/i) &&
        !navigator.userAgent.match(/crios/i) &&
        !navigator.userAgent.match(/fxios/i) &&
        !navigator.userAgent.match(/Opera|OPT\//)) || window.navigator.userAgent.indexOf("Edg") > -1;

        



        const smallerThan1400 = window.matchMedia("(max-width: 1400px)").matches;

if (isSafari){
        safariAppDescData[safariAppDescData.length - 1] =  { transform: `translateY(${smallerThan1400 ? 380 : 500}px)` };
}


if (window.matchMedia("(max-device-width: 415px)").matches) {
    safariAppDescData[safariAppDescData.length - 1] =  { transform: "translateY(480px)" };
    // 470

   // alert("Hello");
}


        document.querySelector(`${options.li} .appDesc`).animate(safariAppDescData, {
            duration: 300,
            fill: 'forwards'
        });



     
        if (window.matchMedia("(max-device-width: 415px)").matches) {


            if (isSafari){

                document.querySelector(`${options.li} .app-img`).animate([
                    { transform: "translate(0, 0) scale(1)" },
                    { transform: "translate(60px, -170px) scale(0.6)" },
                ], {
                    duration: 400,
                    fill: 'forwards'
                });
                
            } else {



                document.querySelector(`${options.li} .app-img`).animate([
                    { transform: "translate(0, 0) scale(1)" },
                    { transform: "translate(60px, -177px) scale(0.6)" }, // Chrome
                ], {
                    duration: 400,
                    fill: 'forwards'
                });



            }
           


        } else if (window.matchMedia("(max-width: 1400px)").matches) {
         
            
            document.querySelector(`${options.li} .app-img`).animate([
                { transform: "translate(0, 0) scale(1)" },
                { transform: "translate(190px, -250px) scale(0.6)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
    
        } else {

            // Weird here
          
        

            document.querySelector(`${options.li} .app-img`).animate([
                { transform: "translateX(0px) scale(1)" },
                { transform: "translateX(-170px) scale(1.5)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        }
    
    
    /*
        if (window.matchMedia("(max-width: 1400px").matches) {
            document.querySelector(`${options.li}  .stores`).animate([
                { transform: "translateY(0px)" },
                { transform: "translateY(-1rem)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else if (window.matchMedia("(max-width: 1200px").matches) {
            document.querySelector(`${options.li} .stores`).animate([
                { transform: "translateY(0px)" },
                { transform: "translateY(1.5rem)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else {
            document.querySelector(`${options.li} .stores`).animate([
                { transform: "translateY(0px)" },
                { transform: "translateY(9rem)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        }*/

        document.querySelector(`${options.li} .stores`).animate([
            { opacity: 1 },
            { opacity: 0 },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    
        //-----------------------------------------------------------------------------------------------
        if (window.matchMedia("(max-width: 1400px").matches) {

            let isSafaria = navigator.vendor.match(/apple/i) &&
            !navigator.userAgent.match(/crios/i) &&
            !navigator.userAgent.match(/fxios/i) &&
            !navigator.userAgent.match(/Opera|OPT\//);
         
            document.querySelector(`${options.li} ${options.stroked}`).animate([
                { transform: "translate(0, 0)" },
                { transform: "translate(-120px, -380px)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else if (window.matchMedia("(max-width: 1200px").matches) {
            document.querySelector(`${options.li} ${options.stroked}`).animate([
                { transform: "translateY(0px)" },
                { transform: "translateY(-260px)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else {



            // FIX HERE

          //  alert("hello");

            let animationSafari = [
                { transform: ' scale(1.0) translateY(0px)', opacity: 1 },
              /* { transform: ' scale(1.35) translateY(-90px)', opacity: 0.6 },
                { transform: ' scale(1.1) translateY(-90px)', opacity: 0.6 },*/
                { transform: ' scale(1.3) translateY(-90px)', opacity: 0.6 }, // -290 for Safari, -90 for Chrome
            ];

            let isSafari = navigator.vendor.match(/apple/i) &&
             !navigator.userAgent.match(/crios/i) &&
             !navigator.userAgent.match(/fxios/i) &&
             !navigator.userAgent.match(/Opera|OPT\//);


            if (isSafari){
                animationSafari[animationSafari.length - 1] =  { transform: ' scale(1.3) translateY(-180px)', opacity: 0.6 }
            }

            document.querySelector(`${options.stroked}`).animate(animationSafari, {
                duration: 500,
                fill: 'forwards'
            });
        }
        //-----------------------------------------------------------------------------------------------
    
        let re = document.querySelector(`${options.li} .app-img`);
        re.style.boxShadow = "2px 2px 15px #000";
    }
    
    
    function down() { // 140804 code in comment 
    


        window.localStorage.setItem("blockHoverFor4secs", "blocked");



        let re = document.querySelector(`${options.li} .app-img`);
        re.style.boxShadow = "";
        allowHover = true;
    


        document.querySelector(`${options.li} .stores`).animate([
            { opacity: 0 },
            { opacity: 1 },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    
      /*  if (window.matchMedia("(max-width: 1400px").matches) {
            document.querySelector(`${options.li} .stores`).animate([
                { transform: "translateY(-1rem)" },
                { transform: "translateY(0px)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else if (window.matchMedia("(max-width: 1200px").matches) {
            document.querySelector(`${options.li} .stores`).animate([
                { transform: "translateY(1.5rem)" },
                { transform: "translateY(0px)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else {
            document.querySelector(`${options.li} .stores`).animate([
                { transform: "translateY(9rem)" },
                { transform: "translateY(0px)" },
            ], {
                duration: 400,
                fill: 'forwards'
            });
        }*/
    
    
        document.querySelector(`${options.uniqueContainerID}`).animate([
            { transform: ' scale(1)' },
            { transform: ' scale(0)' },
        ], {
            duration: 300,
            fill: 'forwards'
        });
    
    
    
    if (window.matchMedia("(max-width: 1400px").matches) {
        document.querySelector(`${options.li} ${options.stroked}`).animate([
            { transform: "translate(-380px)" },
            { transform: "translate(0px)" },
          
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else if (window.matchMedia("(max-width: 1200px").matches) {
        document.querySelector(`${options.li} ${options.stroked}`).animate([
            { transform: "translateY(-260px)" },
            { transform: "translateY(0px)" },
          
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else {
        document.querySelector(`${options.li} ${options.stroked}`).animate([
            { transform: ' scale(1.35) translateY(0px)', opacity: 0.6 },
            { transform: ' scale(1.1) translateY(0px)', opacity: 0.6 },
            { transform: ' scale(1.3) translateY(0px)', opacity: 0.6 },
            { transform: ' scale(1) translateY(0px)', opacity: 0.6 },
          //  { transform: ' scale(1.0) translateY(-90px)', opacity: 1 },
           
        ], {
            duration: 500,
            fill: 'forwards'
        });
    }
    
    
        document.querySelector(`${options.overlay} .cover`).animate([
            { opacity: 0 },
            { opacity: 1 },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    
        document.querySelector(`${options.overlay} .appDesc`).animate([
            { opacity: 0 },
            { opacity: 1 },
        ], {
            duration: 300,
            fill: 'forwards'
        });
    
        document.querySelector(`${options.li} .app-img`).animate([
            { transform: "translateX(-200px)" },
            { transform: "translateX(0px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    }
    




    // moveEla(options.overlay); // "#relaysOverlay"



}






function moveEla(id, tres){
   // alert(id);


   console.log(id);
    const isMobile = window.matchMedia("(max-width: 415px").matches;


if (!isMobile) {

    const card = document.querySelector(id);
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    let THRESHOLD = 6;



    if (id === "#swimrunnyOverlay"){
        THRESHOLD = 3;
    }


    if (tres){
        THRESHOLD = tres;
    }

   
    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
        card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    if (!motionMatchMedia.matches) {
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
    }
}
}






// moveEla("#hero", 8);









































































/*
let li = document.querySelector("#relaysa");
let overlay = document.querySelector("#relaysOverlay");

function getImage(url) {
    let screenshot = document.createElement("img");
    screenshot.style.width = "9rem";
    screenshot.style.height = "19rem";
    screenshot.setAttribute("src", url);
    screenshot.style.zIndex = "1";
    screenshot.style.gridArea = "1/1";
    screenshot.style.borderRadius = "1rem";
    screenshot.style.margin = "1rem";
    screenshot.style.boxShadow = "3px 3px 10px #000";
    return screenshot;
}


let addedRelays = false;
let allowHover = true;

li.onmouseover = () => {
    const isMobile = window.matchMedia("(max-width: 415px").matches;

    if (allowHover && isMobile === false) {
        allowHover = false;
        mouseOverAction();
    }
};

function mouseOverAction() {
    let cover = document.createElement("div");
    cover.style.gridArea = "1/1";
    cover.style.width = "100%";
    cover.style.height = "200%";
    document.querySelector(".relaysStroked").style.zIndex = "1";

    let screenShotDiv = document.createElement("div");
    screenShotDiv.style.display = "flex";
    screenShotDiv.style.justifyContent = "center";
    screenShotDiv.style.gridArea = "1/1";
    screenShotDiv.style.zIndex = "1";
    screenShotDiv.style.width = "50rem";
    screenShotDiv.style.height = "100%";
    screenShotDiv.setAttribute("id", "rls");
    screenShotDiv.setAttribute("class", "cover");
    screenShotDiv.addEventListener("click", down);

    let screenshots = [
        "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/3a/e6/9c/3ae69cb5-53bf-91f2-7638-bc58de5f1120/c111156a-1be9-4afe-91bf-c74fc3dc059c_iPhone-58-Relays-screensArtboard-2.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/72/b2/fa/72b2fa2c-0b4a-2c54-d2eb-256d1d12ba86/5f4954dc-83c8-45fa-9069-7ea1bc4a4fa8_iPhone-58-Relays-screensFind-perfect-buddies.png/460x0w.webp",
        "https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8d/38/06/8d380639-1e4c-e908-256d-86e2d474dfbb/43c55054-72f1-4bd1-8c93-2e6865325e9d_iPhone-58-Relays-screensArtboard-6.png/460x0w.webp"
    ];


    for (var i = 0; i < screenshots.length; i++) {
        screenShotDiv.appendChild(getImage(screenshots[i])); // 13:33:10
    }



    // document.createNSResolver 142134

    let img = document.createElement("img");
    img.setAttribute("src", "images/download.png");
    img.style.width = "200px";
    img.style.height = "auto";

    let imga = document.createElement("img");
    imga.setAttribute("src", "images/playStore.png");
    imga.style.width = "200px";
    imga.style.height = "auto";

    let wrdiv = document.createElement("div");
    wrdiv.appendChild(img);
    wrdiv.appendChild(imga);


    if (!addedRelays) {
        addedRelays = true;
        overlay.insertAdjacentElement("afterbegin", screenShotDiv);
        //  overlay.appendChild(wrdiv);
        overlay.appendChild(cover);
    }


    li.style.gridArea = "1/1";

    document.querySelector("#rls").animate([ // 22:52:40 28/03
        { transform: ' scale(0)' },
        { transform: ' scale(1.07)' },
        { transform: ' scale(0.93)' },
        { transform: ' scale(1.03)' },
        { transform: ' scale(0.97)' },
        { transform: ' scale(1)' }, // 23:13:27
    ], {
        duration: 800,
        fill: 'forwards'
    });

    document.querySelector("#rls").children[0].animate([ // 22:52:40 28/03
        { transform: ' translateY(0px)' },
        { transform: ' translateY(30px)' },

    ], {
        duration: 1000,
        fill: 'forwards'
    });

    document.querySelector("#rls").children[2].animate([ // 22:52:40 28/03
        { transform: ' translateY(0px)' },
        { transform: ' translateY(-30px)' },

    ], {
        duration: 1000,
        fill: 'forwards'
    });



    document.querySelector("#relaysOverlay .appDesc").animate([
        { opacity: 1 },
        { opacity: 0 },
    ], {
        duration: 300,
        fill: 'forwards'
    });


    if (window.matchMedia("(max-width: 1400px)").matches) {
        // 557
        document.querySelector("#relaysa .app-img").animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(-457px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });

    } else {
        document.querySelector("#relaysa .app-img").animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(-170px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    }



    if (window.matchMedia("(max-width: 1400px").matches) {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-1rem)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else if (window.matchMedia("(max-width: 1200px").matches) {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(1.5rem)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(9rem)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    }


    //-----------------------------------------------------------------------------------------------
    if (window.matchMedia("(max-width: 1400px").matches) {
        document.querySelector("#relaysa .relaysStroked").animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-380px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else if (window.matchMedia("(max-width: 1200px").matches) {
        document.querySelector("#relaysa .relaysStroked").animate([
            { transform: "translateY(0px)" },
            { transform: "translateY(-260px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else {
        document.querySelector(".relaysStroked").animate([
            { transform: ' scale(1.0) translateY(0px)', opacity: 1 },
            { transform: ' scale(1.35) translateY(-90px)', opacity: 0.6 },
            { transform: ' scale(1.1) translateY(-90px)', opacity: 0.6 },
            { transform: ' scale(1.3) translateY(-90px)', opacity: 0.6 },
        ], {
            duration: 500,
            fill: 'forwards'
        });
    }
    //-----------------------------------------------------------------------------------------------

    let re = document.querySelector("#relaysa .app-img");
    re.style.boxShadow = "2px 2px 15px #000";
}


function down() { // 140804 code in comment 

    let re = document.querySelector("#relaysa .app-img");
    re.style.boxShadow = "";
    allowHover = true;


    if (window.matchMedia("(max-width: 1400px").matches) {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(-1rem)" },
            { transform: "translateY(0px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else if (window.matchMedia("(max-width: 1200px").matches) {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(1.5rem)" },
            { transform: "translateY(0px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else {
        document.querySelector("#relaysa .stores").animate([
            { transform: "translateY(9rem)" },
            { transform: "translateY(0px)" },
        ], {
            duration: 400,
            fill: 'forwards'
        });
    }


    document.querySelector("#rls").animate([
        { transform: ' scale(1)' },
        { transform: ' scale(0)' },
    ], {
        duration: 300,
        fill: 'forwards'
    });



if (window.matchMedia("(max-width: 1400px").matches) {
    document.querySelector("#relaysa .relaysStroked").animate([
        { transform: "translateY(-380px)" },
        { transform: "translateY(0px)" },
      
    ], {
        duration: 400,
        fill: 'forwards'
    });
} else if (window.matchMedia("(max-width: 1200px").matches) {
    document.querySelector("#relaysa .relaysStroked").animate([
        { transform: "translateY(-260px)" },
        { transform: "translateY(0px)" },
      
    ], {
        duration: 400,
        fill: 'forwards'
    });
} else {
    document.querySelector(".relaysStroked").animate([
        { transform: ' scale(1.35) translateY(0px)', opacity: 0.6 },
        { transform: ' scale(1.1) translateY(0px)', opacity: 0.6 },
        { transform: ' scale(1.3) translateY(0px)', opacity: 0.6 },
        { transform: ' scale(1) translateY(0px)', opacity: 0.6 },
      //  { transform: ' scale(1.0) translateY(-90px)', opacity: 1 },
       
    ], {
        duration: 500,
        fill: 'forwards'
    });
}


    document.querySelector("#relaysOverlay .cover").animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration: 400,
        fill: 'forwards'
    });

    document.querySelector("#relaysOverlay .appDesc").animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration: 300,
        fill: 'forwards'
    });

    document.querySelector("#relaysa .app-img").animate([
        { transform: "translateX(-200px)" },
        { transform: "translateX(0px)" },
    ], {
        duration: 400,
        fill: 'forwards'
    });
}




// ------ 3D HOVER OKAY 144333 29/03/2023
const isMobile = window.matchMedia("(max-width: 415px").matches;


if (!isMobile) {

    const card = document.querySelector("#relaysOverlay");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 8;

   
    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
        card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    if (!motionMatchMedia.matches) {
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
    }
}*/