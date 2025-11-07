const bl = document.querySelector(".boldLarge");
const isSaf = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    document.querySelector("motion-text").style.opacity = 0;
S("#motion1").style.display = "flex";
let media = window.matchMedia("(min-device-width: 500px)");
if (isSaf && media.matches){
    bl.style.paddingTop = "12rem";
}


const possibleNulls = [

    S(".filipName"),
    S(".myDescription"),
    S(".floatContent"),
    S(".lo") 

];

if (possibleNulls.filter(n => n != null).length === possibleNulls.length){




localStorage.setItem("doNotMoveTitle", "false");

const dur = 450; // 155915


let alreadyScaledUp = false;

let isGoingUp = false;
let isGoingDown = false;
let opacityFlag = false;


/*
S(".firstName").animate([
    { transform: 'rotate3d(2, 1, 8, 90deg)',  opacity: "1",  },
    { transform: 'rotate3d(0,0,0, 0deg)',   opacity: "1",  },
], {
    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
    duration: 1000,
    fill: 'forwards'
});*/

S(".lastName").animate([
    { transform: 'translate(0, 100%)',  opacity: "1",  },
    { transform: 'translate(0,0)',   opacity: "1",  },
], {
    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
    delay: 400,
    duration: 900,
    fill: 'forwards'
});





/*

@keyframes reveal {
  0% {
    transform: translate(0,100%);
  }
  100% {
    transform: translate(0,0);
  }
}
*/
/*
S(".lastName").animate([
    { transform: 'scale(3.0) translateY(-20px)', opacity: "0",  },
    { transform: 'scale(1) translateY(0px)', opacity: "1",  },
], {
    duration: 700,
    fill: 'forwards'
});*/

/*

S(".newFilipName").animate([
    { transform: 'scale(3.0) translateY(-20px)', opacity: "0",  },
    { transform: 'scale(1) translateY(0px)', opacity: "1",  },
], {
    duration: 700,
    fill: 'forwards'
});*/



//  SA(".noScale")[i].style.transform = `scale(${conv}) translateY(-${conv * 10}px)`;



S(".newSubtitle").animate([
    {transform: 'translate(-200%, 0)'},
    {transform: 'translate(0, 0)' },
], {
    easing: "cubic-bezier(0.97, 0, 0.175, 1)", // 144700 on 01/04
    delay: 400,
    duration: 1200,
    fill: 'forwards'
});



S(".app1").animate([
    { transform: 'scale(0.0)', opacity: "0" },
    { transform: 'scale(1.2)', opacity: "1" },
], {
    duration: 700,
    fill: 'forwards'
});

S(".app2").animate([
    { transform: 'scale(0.0)', opacity: "0" },
    { transform: 'scale(1.2)', opacity: "1" },
], {
    duration: 800,
    fill: 'forwards'
});

S(".app3").animate([
    { transform: 'scale(0.0)', opacity: "0" },
    { transform: 'scale(1.2)', opacity: "1" },
], {
    duration: 900,
    fill: 'forwards'
});




/*
S(".myDescription").animate([
    { opacity: '0', color: '#000' },
    { opacity: '1', color: '#000' }
], 800).play();*/


function perform(event) {
    // console.log(event.pageX);
    // console.log(event.pageY);
    // 115146
    const only3D = document.querySelector(".filipName");

    const position = only3D.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    only3D.style.transform = `perspective(${x}px) translate3d(${y}px, 0, 0px)`;
    const shift = document.querySelectorAll(".prlx"); // 11:42:49


    shift.forEach((el, i) => {
        // 12:14:50

        const position = el.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        if (document.documentElement.scrollTop < 1000) { // 130955
            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        } else {
            el.style.transform = `translateX(0px) translateY(0px)`;
        }

    });
}


localStorage.setItem("allowMouseOver", "YES");
let about = document.querySelector(".aboutWrapper");

function scale(el, from, to, dur = 500) {
    S(el).animate([
        { transform: `scale(${from})` },
        { transform: `scale(${to})` }
    ], {
        duration: dur,
        fill: 'forwards'
    }).play();
}


function moveX(el, from, to, dur = 500) {
    S(el).animate([
        { transform: `translateX(${from}px)` },
        { transform: `translateX(${to}px)` }
    ], {
        duration: dur,
        fill: 'forwards'
    }).play();
}

function moveY(el, from, to) {
    S(el).animate([
        { transform: `translateY(${from}px)` },
        { transform: `translateY(${to}px)` }
    ], {
        duration: 500,
        fill: 'forwards'
    }).play();
}

function opacity(el, from, to) {
    S(el).animate([
        { opacity: from },
        { opacity: to }
    ], {
        duration: 500,
        fill: 'forwards'
    }).play();
}

function opacityIsElement(el, from, to) {
    el.animate([
        { opacity: from },
        { opacity: to }
    ], {
        duration: 500,
        fill: 'forwards'
    }).play();
}


function getAge() {
    let today = new Date();
    const yyyy = today.getFullYear();
    var age = yyyy - 1999 - 1;

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;

    if (dd >= 20 && mm >= 7) {
        age += 1;
    }

    return age;
}

let i = 0;
// let text = "Apps";

function typeWriter(id, text) {
    if (i < text.length) {
        S(id).innerText += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(id, text), 220);
        console.log("Looping...");
    }
}



let media = window.matchMedia("(max-device-width: 415px)");



let filipOffset = 200;
let descOffset = 4 * 16;
let myNameOffset = 220;



if (media.matches){
filipOffset = 0;
descOffset = 0;
myNameOffset = 0;
}

let hasDisappeared = false;





function convertRange( value, r1, r2 ) { 
    return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}


function convertRange(value, oldRange, newRange) {
    let ret = ((value - oldRange.min) * (newRange.max - newRange.min)) / (oldRange.max - oldRange.min) + newRange.min;
    if (ret > 1){
        ret = 1;
    }

    return ret;

}


function smartRange(value, oldRange, newRange) {
    let ret =
        ((value - oldRange.min) * (newRange.max - newRange.min)) /
            (oldRange.max - oldRange.min) +
        newRange.min;

    // Clamp to newRange
    ret = Math.max(newRange.min, Math.min(ret, newRange.max));

    return ret;
}


function getFinalOffset(el){
    const offsets = 2 * el.offsetLeft;
    const remainingScreenMidPoint = (window.innerWidth - offsets) / 2;
    const final = remainingScreenMidPoint / 2 - el.style.width / 2;
   return final;
}
  
    let offsetSaved = 0;
    let offset2Saved = 0;
    let percentageInScrollableRangeSAVED = 0;
    // 22:19:05 Okay, I am done
    // 10/04/2023

   function mapValue(x, inMin, inMax, outMin, outMax) {
  return outMin + ((x - inMin) * (outMax - outMin)) / (inMax - inMin);
}

    function moveScaleOnScroll() {
  if (S(".floatContent") === null || SA(".noScale").length === 0) return;

  // --- Base configuration ---
  let scrollLimit = 100;
  if (window.innerWidth > 1999) scrollLimit = 0;
  const end = scrollLimit + 100;
  const isWide = window.innerWidth > 1999;
  const scrollRotationLimit = isWide ? 450 : 767;

  const scrollY = window.scrollY;

  // --- Phase 1: Scale & fade .noScale elements ---
  SA(".noScale").forEach((el, i) => {
    const offset = (isWide ? 31 : 50) * i;
    const conv = smartRange(scrollY, { min: scrollLimit + offset, max: end + offset }, { min: 0, max: 1 });
    const clamped = Math.max(0, Math.min(1, conv));

    if (scrollY > scrollLimit + offset) {
      el.style.transform = `scale(${clamped}) translateY(-${clamped * 10}px)`;
      el.style.opacity = clamped;
    } else {
      el.style.transform = `scale(0) translateY(-10px)`;
      el.style.opacity = 0;
    }
  });

  // --- Phase 2: Paragraph rotation ---
  const convRotation = Math.max(
    0,
    Math.min(1, smartRange(scrollY, { min: scrollRotationLimit, max: scrollRotationLimit + 130 }, { min: 0, max: 1 }))
  );
  const rotationDeg = 90 * convRotation;
  S("#prelastP").style.transform = `rotate3d(1, 0, 0, ${rotationDeg}deg)`;
  S("#lastP").style.transform = `rotate3d(1, 0, 0, ${rotationDeg}deg)`;

  // --- Phase 3: Motion rotation ---
  if (scrollY > scrollRotationLimit + 131) {
    const convMotionRotation = Math.max(
      0,
      Math.min(1, smartRange(scrollY, { min: scrollRotationLimit + 131, max: scrollRotationLimit + 131 + 260 }, { min: 0, max: 1 }))
    );
    const motionDeg = 270 + convMotionRotation * 90;
    S("#motion1").style.transform = `rotate3d(1, 0, 0, ${motionDeg}deg)`;
    S("#motion2").style.transform = `rotate3d(1, 0, 0, ${motionDeg}deg)`;

    // --- Phase 4: Scale blackout + fade ---
    if (scrollY > scrollRotationLimit + 131 + 260) {
        const en = 500; // 400
     
     
        const convScaleBlackout = smartRange(scrollY, 
            { min: 1170, 
            max: 1200 }, 
            { min: 1, max: 3.1 });


              const offsetX = smartRange(scrollY, 
            { min: 1300, 
            max: 1609 }, 
            { min: 0, max: 1200 });
      

 

      const convScaleOffset = smartRange(scrollY,
         { min: scrollRotationLimit + 131, max: scrollRotationLimit + 190 },
         { min: 1, max: 100 });


      const convOpacity = Math.max(0, Math.min(1, smartRange(scrollY, { min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + en }, { min: 0, max: 1 })));
      const convOpacitya = Math.max(0, Math.min(1, smartRange(scrollY, { min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + en - 100 }, { min: 0, max: 1 })));

    //  S("motion-text").style.transform = `scale(${mapValue(convScaleBlackout, 1, 3.1, 3.1, 0.7)}) translateY(${convScaleOffset})`;
    const el = document.querySelectorAll("motion-text")[0];
const svg = el.shadowRoot.querySelector("svg");
svg.style.transformOrigin = "center";

if (window.innerWidth > 600){
svg.style.transform = `scale(${mapValue(convScaleBlackout, 1, 3.1, 3.1, 0.7)}) translateY(${convScaleOffset}px) translateX(${offsetX}px)`;
}



    const ela = document.querySelectorAll("motion-text")[1];
const svga = ela.shadowRoot.querySelector("svg");
svga.style.transformOrigin = "center";

if (window.innerWidth > 600){
svga.style.transform = `scale(${mapValue(convScaleBlackout, 1, 3.1, 3.1, 0.7)}) translateY(${convScaleOffset + 200}px) translateX(-${offsetX}px)`;
}


      S("#motion1").style.opacity = `${1 - convOpacity}`;
      S("#motion2").style.opacity = `${1 - convOpacitya}`;
     // S("#motion1").style.filter = `blur(${(convOpacity)}px)`;
      

      document.querySelectorAll(".bluens").forEach(el => el.style.opacity = 1 - convOpacitya);

      const clampedOffset = Math.max(0, Math.min(convScaleOffset, 150));
      //S("#m1").style.transform = `translateY(-${clampedOffset}px)`;
      //S("#m3").style.transform = `translateY(-${clampedOffset}px)`;
      //S("#m5").style.transform = `translateY(-${clampedOffset}px)`;

    } else {
      // Reset blackout section when outside its range
     // S("#motion1").style.transform = `rotate3d(1, 0, 0, ${motionDeg}deg)`;
     // S("#motion1").style.opacity = `1`;
     // S("#motion2").style.opacity = `1`;
     // S("#m1").style.transform = `translateY(0)`;
     // S("#m3").style.transform = `translateY(0)`;
     // S("#m5").style.transform = `translateY(0)`;
      document.querySelectorAll(".bluens").forEach(el => el.style.opacity = 1);
    }

  } else {
    // Reset rotation section before motion
    S("#motion1").style.transform = `rotate3d(1, 0, 0, 270deg)`;
    S("#motion2").style.transform = `rotate3d(1, 0, 0, 270deg)`;
    //S("#m1").style.transform = `translateY(0)`;
    //S("#m3").style.transform = `translateY(0)`;
  }

  // Keep aboutWrapper visible
  S(".aboutWrapper").style.opacity = "1";
}


// Check the direction and reverse it
function moveScaleOnScrolla(){
if (S(".floatContent") === null || SA(".noScale").length === 0){
    return;
}
   

let scrollLimit = 100; // 250 (was 100) make 0 on alrge screens?

if (window.innerWidth > 1999){ // 02/09/2025 1999 test
    scrollLimit = 0;
    console.log("INOA");
}

let end = scrollLimit + 100;

    
     if (window.scrollY > scrollLimit) { // WEIRD IN SAFARI 
//alert("Now")
        let conv = convertRange(window.scrollY, {min: scrollLimit, max: end}, {min: 0, max: 1});

        SA(".noScale")[0].style.transform = `scale(${conv})`;
        SA(".noScale")[0].style.transform = `opacity(${conv})`;
   
        let up = 0;
        for (var i = 0; i < 11; i++){
            up += window.innerWidth > 1999 ? 31 : 50;
           // up += 50;
            if (window.scrollY > scrollLimit + up){
                let conv = convertRange(window.scrollY, {min: scrollLimit + up, max: end + up}, {min: 0, max: 1});
                SA(".noScale")[i].style.transform = `scale(${conv}) translateY(-${conv * 10}px)`;
                SA(".noScale")[i].style.opacity = `${conv}`;
            } else {
                SA(".noScale")[i].style.transform = `scale(${0}) translateY(-10px)`;
                SA(".noScale")[i].style.opacity = `0`;
            }
        }

        // let later = 300;


       
let is1999 = window.innerWidth > 1999;
let scrollRotationLimit = is1999 ? 450 : 767;

if (window.scrollY > scrollRotationLimit){

        let convRotation = smartRange(window.scrollY, {min: scrollRotationLimit, max: scrollRotationLimit + 130}, {min: 0, max: 1});
        convrotation = convRotation < 0 ? 0 : convRotation;

        let fraction = 90 * convRotation;
       
        S("#prelastP").style.transform += ` rotate3d(1, 0, 0, ${fraction}deg)`;
        S("#lastP").style.transform += ` rotate3d(1, 0, 0, ${fraction}deg)`;
      


if (window.scrollY > scrollRotationLimit + 131){


         let convMotionRotation = smartRange(window.scrollY, 
             {min: scrollRotationLimit + 131, max: scrollRotationLimit + 131 + 260},
             {min: 0, max: 1}
            );
console.log("SMARTR");
console.log(convMotionRotation);

let motionDeg = 270 + convMotionRotation * 90; // Thanks GPT

S("#motion1").style.transform = `rotate3d(1, 0, 0, ${motionDeg}deg)`;
S("#motion2").style.transform = `rotate3d(1, 0, 0, ${motionDeg}deg)`;
        
if (window.scrollY > scrollRotationLimit + 131 + 260){
console.log("LNOW");


         let convScaleBlackout = smartRange(window.scrollY, 
             {min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + 400},
             {min: 1, max: 20}
            );

             let convScaleOffset = smartRange(window.scrollY, 
             {min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + 400},
             {min: 1, max: 150}
            );

               let convOpacity = smartRange(window.scrollY, 
             {min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + 400},
             {min: 0, max: 1}
            );

             let convOpacitya = smartRange(window.scrollY, 
             {min: scrollRotationLimit + 131 + 260, max: scrollRotationLimit + 131 + 300},
             {min: 0, max: 1}
            );

S("#motion1").style.transform = `scale(${convScaleBlackout}) translateY(${convScaleOffset}px) rotateZ(${1 - convOpacity * 100}deg)`;
S("#motion1").style.opacity = `${1 - convOpacity}`;


document.querySelectorAll(".bluens").forEach((el) => {
    el.style.opacity = 1 - convOpacitya;
     
});

//document.querySelector(".boldLarge:not(#motion1)").style.transform = `scale(${1 - convOpacitya})`;

document.querySelector("#motion2").style.opacity = 1 - convOpacitya;

//S("#m1").style.display = "block";
//S("#m2").style.display = "block";
//S("#m3").style.display = "block";
S("#m1").style.transform = `translateY(-${convScaleOffset}px)`;
S("#m3").style.transform = `translateY(-${convScaleOffset}px)`;
}



} else {
             S("#motion1").style.transform = ` rotate3d(1, 0, 0, 270deg)`;
            S("#motion2").style.transform = ` rotate3d(1, 0, 0, 270deg)`;
}


       
        
}

        S(".aboutWrapper").style.opacity = `1`;
    }






}

let descriptionHasAnimated = false;

function moveScale() {
    // moveY("#left", 0.0, -200);

    S("#age").innerText = getAge();

    S(".filipName").animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(-300px, -200px) scale(0.75, 0.75)' }
    ], {
        duration: 400,
        fill: 'forwards'
    }).play();


    // scale(".myDescription", 1.0, 0.0);
    //scale(".square", 1.0, 0.0);
    moveX(".dots", 0.0, 400);

    moveX(".square", 0.0, -800);
    // scale(".aboutWrapper", 0.0, 1.0);

    window.setTimeout(() => {
        S(".aboutWrapper").animate([
            { transform: 'scale(0.0)', opacity: "0.0" },
            { transform: 'scale(1.2)', opacity: "1" },
            { transform: 'scale(1.0)', opacity: "1" },
            { transform: 'scale(1.08)', opacity: "1" },
            { transform: 'scale(0.98)', opacity: "1" },
            { transform: 'scale(1.0)', opacity: "1" }
        ], {
            duration: 800,
            fill: 'forwards'
        }).play();
    }, 400);



if (!descriptionHasAnimated){

descriptionHasAnimated = true;
    S(".myDescription").animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
        duration: 200,
        fill: 'forwards'
    }).play();
}

}

var scaled = false;
var moved = false;


// MAGIC HAPPENS
window.addEventListener("scroll", (e) => {
  /*  if (!scaled) {
        scaled = true;
        moveScale();
      
    }*/

    moveScaleOnScroll();

    if (!moved) {
        if (window.pageYOffset > 260) {
            moved = true;
            moveEl();

            //  window.setTimeout(() => {
           // moveX(".filipName", 0.0, 80, 4000);
           // moveY(".filipName", 0.0, 100, 4000);
            // }, 550);

        }
    }
});


function moveEl() {
   /* SA(".noScale").forEach(el => {
        el.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 200,
            fill: 'forwards'
        }).play();
    });
*/
    /*SA(".noScale").forEach(el => {
        el.animate([
          
            { transform: "scale(1.0)" },
            { transform: "scale(0.0)" }

        ], {
            duration: 400,
            fill: 'forwards'
        }).play();
    });


    window.setTimeout(() => {
        SA(".noScale").forEach(el => el.style.opacity = "0")
    }, 400);*/

   // S(".scale").style.color = "#3498DB";

}





scrollEventThrottle((scrollPos, previousScrollPos) => {

    if (previousScrollPos > scrollPos) {
        isGoingUp = true;
        isGoingDown = false;
      } else {
        isGoingDown = true;
        isGoingUp = false;
      }

// window.addEventListener("scroll", () => {

    if ((window.pageYOffset > 10 && isGoingDown) || isGoingUp){

    
    let distance = 0; //etweenElements(S(".appsWrapper"), S("#h"));

    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    // S(".scale").style.setProperty('--percentage', `${scrolled * 100 * 20}%`);

    let fraction = (scrolled * 100 * 20) / 100;
    // console.clear();
   // console.log(`Fraction of transform ${fraction} ${distance.xDist} ${fraction * distance.xDist}`);

   // if (fraction < 1 && fraction * distance.yDist > -500) {
        
   
       /* SA(".noScale").forEach(el => {
            el.style.opacity = `${1 - fraction * 2.2}`;
        });*/

         // S(".filipName").style.setProperty("-webkit-text-stroke", `${1 - fraction * 2.2 * 2}px rgb(11, 122, 182)`);
       

   // }


    var offseto = fraction * distance.xDist;
    var isSet = false;

    var spanWidth = 1; //S(".scale").getBoundingClientRect().width;
    var half = window.innerWidth / 2 - spanWidth / 2;

    //if (fraction < 1 && fraction > 0.17){
        isSet = true;
 
     // if (myOffset(S(".scale")).top < 890){
           // S(".scale").style.marginTop = `${fraction * distance.xDist}px`;
       // }

      //  console.clear();
      //  console.log("myOffset(S(.scale)).left: " + myOffset(S(".scale")).left + " HALF:" + half + "");
//console.log(fraction);
       /* S(".scale").style.marginLeft = (-100 * fraction) + "px";

        S(".scale").style.transform = `scale(${fraction + 1})`;
        S(".scale").style.opacity = `${1 - fraction}`;
*/
       // console.log(`scale(2 * ${fraction} + 1)`);

//if (myOffset(S(".scale")).left > half){
    //const amount = half - Math.abs(half - myOffset(S(".scale")).left);

   // if (Math.abs(amount) * fraction < half){ // at 1355
       // S(".scale").style.marginLeft = `${half}px`;
   // }
   
//} /*else {
   // const amount = - half - Math.abs(half - myOffset(S(".scale")).left);
   // S(".scale").style.marginRight = `-${amount * fraction}px`;
// }*/
 


    // S(".scale").style.marginLeft = `${half}`; //`${fraction * distance.yDist}px`;
        
        
   // }

    }
});

function init(){
	new SmoothScroll(document,120,12)
}

// init();

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
    
		var delta = (pos - target.scrollTop) / smooth
    
		target.scrollTop += delta
    
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}

window.addEventListener("resize", () => {
    console.log("Resize");
});


let today = new Date();
const yyyy = today.getFullYear();
var age = yyyy - 1999 - 1;

let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

if (dd >= 20 && mm >= 7) {
    age += 1;
}

S("#age").innerText = "ABAA"; //age.toString();

// Control the size of blue rectangle

let count = 0;

function scrollEventThrottle(fn) {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function () {
        let previous_known_scroll_position = last_known_scroll_position;
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function () {
                fn(last_known_scroll_position, previous_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function getOffset(el) {
    return 0;
    /*const rect = el.getBoundingClientRect();
     return {
       left: rect.left + window.scrollX,
       top: rect.top + window.scrollY
     };*/
}

function myOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}



// const [x1, x2, x3, x4] = 0;

function distanceBetweenElements(elementOne, elementTwo) {

    const x1 = myOffset(elementOne).top;
    const y1 = myOffset(elementOne).left;
    const x2 = myOffset(elementTwo).top;
    const y2 = myOffset(elementTwo).left;
    const xDistance = x1 - x2;
    const yDistance = y1 - y2;

    distance = Math.sqrt(
        (xDistance * xDistance) + (yDistance * yDistance)
    );

    // return distance;

    return {
        xDist: xDistance,
        yDist: yDistance
    };
}


// Let only scale down
const limit = 450;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}

function enable() {
    window.onscroll = function () { };
}

}