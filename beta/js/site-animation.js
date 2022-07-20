
localStorage.setItem("doNotMoveTitle", "false");

const dur = 450; // 155915


let alreadyScaledUp = false;

let isGoingUp = false;
let isGoingDown = false;
let opacityFlag = false;

setTimeout(() => {
    S(".filipName").animate([
        { transform: 'scale(0.0)', opacity: "0.0" },
        { transform: 'scale(1.2)', opacity: "1" },
        { transform: 'scale(1.0)', opacity: "1" },
        { transform: 'scale(1.14)', opacity: "1" },
        { transform: 'scale(0.96)', opacity: "1" },
        { transform: 'scale(1.0)', opacity: "1" }
    ], {
        duration: 400,
        fill: 'forwards'
    }).play();


   /* S(".dots").animate([
        { transform: 'scale(1.0)', opacity: "0.0" },
        { transform: 'scale(1.0)', opacity: "0.4" }
    ], {
        duration: 400,
        fill: 'forwards'
    }).play();

*/

}, 400);


S(".myDescription").animate([
    { opacity: '0', color: '#000' },
    { opacity: '1', color: '#000' }
], 800).play();


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





const scrollLimit = 100; // 250
let end = scrollLimit + 100;

function convertRange(value, oldRange, newRange) {
    let ret = ((value - oldRange.min) * (newRange.max - newRange.min)) / (oldRange.max - oldRange.min) + newRange.min;
    if (ret > 1){
        ret = 1;
    }

    return ret;

}

  
// Check the direction and reverse it
function moveScaleOnScroll(){

/*
    if (isGoingDown){
    filipOffset -= 1;
    descOffset -= 1;
    } 
    
    if (isGoingUp) {
        filipOffset += 1;
        descOffset += 1;
    }*/

   

    console.log(filipOffset);

   // if (window.scrollY > 0){

   // S(".sm-a").style.marginBottom = `${window.scrollY}px`;
    S(".filipName").style.marginLeft = `${filipOffset + window.scrollY}px`;
    S(".myDescription").style.marginLeft = `${descOffset + window.scrollY}px`;
   // }

   // S(".dots").style.opacity = "0"; // `${filipOffset / 100 - 1}`;


    S(".filipName").style.opacity = `${100 - window.scrollY}`;

   /* S(".myDescription").animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
        duration: 600,
        fill: 'forwards'
    }).play();

    xts").animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
        duration: 600,
        fill: 'forwards'
    }).play();*/

    const opa = Math.abs(1 - filipOffset / 200);
   // S(".dots").style.opacity = `${opa - 1.8}`;
    // S(".myDescription").style.opacity = `${opa - 1.8}`;






/*
 console.log("Scroll start to scroll end is " + scrollLimit + " " + end);
        console.log("Really scrolled:" + window.scrollY);
*/

    S(".aboutWrapper").style.marginTop = `${scrollLimit}px`; // was 400px
    
     if (window.scrollY > scrollLimit) {

        let conv = convertRange(window.scrollY, {min: scrollLimit, max: end}, {min: 0, max: 1});

        SA(".noScale")[0].style.transform = `scale(${conv})`;
        SA(".noScale")[0].style.transform = `opacity(${conv})`;



        let up = 0;
        for (var i = 0; i < 11; i++){
            up += 50;
            if (window.scrollY > scrollLimit + up){
                let conv = convertRange(window.scrollY, {min: scrollLimit + up, max: end + up}, {min: 0, max: 1});
                SA(".noScale")[i].style.transform = `scale(${conv}) translateY(-${conv * 10}px)`;
                SA(".noScale")[i].style.opacity = `${conv}`;
            } else {
                SA(".noScale")[i].style.transform = `scale(${0}) translateY(-10px)`;
                SA(".noScale")[i].style.opacity = `0`;
            }
        }
/*
        if (window.scrollY > scrollLimit + 100){
            let conv = convertRange(window.scrollY, {min: scrollLimit + 100, max: end}, {min: 0, max: 1});
            SA(".noScale")[1].style.transform = `scale(${conv})`;
            SA(".noScale")[1].style.transform = `opacity(${conv})`;
        } else {
            SA(".noScale")[1].style.transform = `scale(${0})`;
            SA(".noScale")[1].style.transform = `opacity(${0})`;
        }
*/

       

        
       // let opa = Math.abs(window.scrollY / 100);
       // opa -= 2.50;
       // opa += 1;

       // let calc = 0.5 + opa / 4;
       
        // S(".boldLarge").style.transform = `scale(${opa /2 })`;
        
      

      /*  let opad = Math.abs(1 - (window.scrollY - scrollLimit) / 100);
        let val = 1 - opad - 1.8;
        S(".scale").style.opacity = `${val}`;

        if (val > 1){
            console.log("Descrease");
        }*/
        S(".aboutWrapper").style.opacity = `1`;



        // S(".aboutWrapper").style.marginTop = `${Math.abs(filipOffset)}px`;
    }



/*

   let XD = distanceBetweenElements(S(".appsWrapper"), S(".scale"));
    if (XD.xDist < 0){
        SA(".noScale").forEach(el => {
          //  alert(el)
         
if (!hasDisappeared){
    hasDisappeared = true;
    // opacityIsElement(el, 1.0, 0.0);
}
           
        });
    }
*/

/*
    if (window.scrollY > 600) {
        S(".scale").style.marginTop = `${4 * fraction * distance.xDist}px`;
        S(".scale").style.marginLeft = (-100 * fraction) + "px";
        S(".scale").style.transform = `scale(${fraction + 1})`;
        S(".scale").style.opacity = `${1 - fraction}`;
    }*/

    /*S(".aboutWrapper").animate([
        { transform: 'scale(0.0)', opacity: "0.0" },
        { transform: 'scale(1.2)', opacity: "1" },
        { transform: 'scale(1.0)', opacity: "1" },
        { transform: 'scale(1.08)', opacity: "1" },
        { transform: 'scale(0.98)', opacity: "1" },
        { transform: 'scale(1.0)', opacity: "1" }
    ], {
        duration: 800,
        fill: 'forwards'
    }).play();*/




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

    
    let distance = distanceBetweenElements(S(".appsWrapper"), S("#h"));

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

    var spanWidth = S(".scale").getBoundingClientRect().width;
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
