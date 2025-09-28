//import {Animator} from "./animator.js";


class XLink  {
	constructor(text, link, stopEM){
		
		this.link = link;
		this.text = text;
		this.code = [];
		this.css = [];
		this.elCSS = [];
		this.html = [];

	//	alert(link);
		/*if (text != undefined && link != undefined){
			this.code.push(`\n new Link("${text}", `,`"${link}")`);
		} else {
			this.code.push("\n new Link()");
		}*/
		// // // console.log(link); // 
		
		this.res = null;
		this.stopEM = stopEM; // DEVELOPMENT
		this.setup();
		this.inlineBlock(); // auto set ??

/*
		this.res.addEventListener("click", (e) => {
  const url = this.link || this.res.getAttribute("href");
  if (!url) return;

  const isExternal = /^https?:\/\//i.test(url);
  const isAnchor = url.startsWith("#");

  if (isExternal || isAnchor || url.endsWith(".html")) {
    // Always let browser handle these
    return;
  }

  // Otherwise SPA routing
  e.preventDefault();
  if ("navigation" in window) {
    navigation.navigate(url);
  } else {
    history.pushState({}, "", url);
    document.dispatchEvent(new PopStateEvent("popstate"));
  }
});*/

this.res.addEventListener("click", (e) => {
      const raw = this.link || this.res.getAttribute("href");
      if (!raw) return;

      // ✅ normalize again just in case
      const url = new URL(raw, window.location.href).href;

      const isExternal = /^https?:\/\//i.test(url);
      const isAnchor = url.startsWith("#");

      if (isExternal || isAnchor || url.endsWith(".html")) {
        // ✅ Let browser do a full navigation
        return;
      }

      // ✅ Otherwise SPA route
      e.preventDefault();
      if ("navigation" in window) {
        navigation.navigate(url);
      } else {
        history.pushState({}, "", url);
        document.dispatchEvent(new PopStateEvent("popstate"));
      }
    });


	


		/* this.res.addEventListener("click", (e) => {
    
		const url = this.link || this.res.getAttribute("href");
  if (!url) return;

  const isExternal = /^https?:\/\//i.test(url);
  const isAnchor = url.startsWith("#");

  if (isExternal) {
    // 🌍 External full URL → let browser handle it normally
    return;
  }

  if (isAnchor) {
    // 🔗 Anchor (#section) → let browser scroll to it
    return;
  }

  // At this point it’s a relative or root path (e.g. "/about" or "about.html")
  const isHTMLFile = url.endsWith(".html");

  if (isHTMLFile) {
    // 📄 Normal multipage HTML site → let browser load it
    return;
  }

  // 🚫 Otherwise → treat as SPA route
  e.preventDefault();

  if ("navigation" in window) {
    navigation.navigate(url);
  } else {
    history.pushState({}, "", url);
    document.dispatchEvent(new PopStateEvent("popstate"));
  }

    });*/


	}

	toCSS(){
		return this.css; 
	}

	toHTMLA(){
		return this.html;
	}

	toElCSS(){
		this.preffersId ? this.elCSS.unshift(this.res.id + " { \n") : (this.elCSS.unshift("." + this.class + " { \n"));
		//this.elCSS.unshift(this.res.id + " { \n");
		this.elCSS.push(" } \n \n");
		// // console.warn("OI")
		// // console.log(this.elCSS);
		return this.elCSS; 
	}

	getType(){ // 114145
		return "HTMLAnchorElement";
	}

	toCode(){
		if (this.excludeFromCodeTrue){
			return [""];
		}

		const cleanedObj = Object.fromEntries(
   		 Object.entries(this.options).filter(([key, value]) => value !== null)
		);

		const objString = JSON
			.stringify(cleanedObj, null, 4)
			.replace(/"([^"]+)":/g, '$1:');

        return [`new Link().set(${objString})`];
		//return this.code; // 120646 ovewrite 25/03
	}

	setArea(area){
		this.res.style.gridArea = area;
		return this;
	}
	
	setup(){
		let el = document.createElement("a");
		el.setAttribute("href", this.link);
		el.style.textDecoration = "none";
		//el.style.fontWeight = "bold";
		el.style.color = "black";
		//el.style.textAlign = "center";
		el.style.fontFamily = "Arial";
		
		var text = document.createTextNode(this.text);
		el.appendChild(text);
		
		this.res = el;

		if (this.stopEM === false){
			this.em(1);
		}
		
		return this;
	}

	appendImageAsChild(options, margin){

		/*
		let link = document.createElement("a");
link.setAttribute("href", "https://www.apple.com");
let img = document.createElement("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFitX60XAzA1Cd8koHUgjCfMgCyxokZvYCybdzac6w&s");
link.appendChild(img);

document.body.appendChild(link);

		*/

// // console.log(options);


		let link = document.createElement("a");
		options.options.vtn && (link.style.viewTransitionName = options.options.vtn);
		
		link.setAttribute("href", options.options.url);
		let img = document.createElement("img");

		if (options.options) {
			img.style.width = options.options.size;
			options.options.radius && (img.style.borderRadius = options.options.radius);
			img.setAttribute("src", options.options.img);
			options.options.pad && (this.res.style.padding = options.options.pad);
			options.options.padRight && (this.res.style.paddingRight = options.options.padRight);
			link.appendChild(img);
		}


		//this.res.style.fontSize = "8rem";


		
		// Clears styles
		this.res = link; // 10:00:39
		

	if (margin){
		this.res.style.marginLeft = margin;
	}

	
	//	alert("K")
		return this;
	} // jquery wrap 9:41:49 18/04/23
	
	addIcon(obj){
		//alert("PPP")
		let img = document.createElement("img");
		img.style.width = "20px";
		img.style.height = "auto";
		img.style.marginLeft = obj.padding ? obj.padding : "10px";
		img.setAttribute("src", obj.url);
		this.res.appendChild(img);
		return this;
	}
	

	removeQuotesFromFirstWord(jsonString) {
		if (!jsonString){
			return;
		}
		const modifiedJSON = jsonString.replace(/"([^"]+)":/g, '$1:');
		return modifiedJSON;
	  }
	  


	set(obj){ // make it like I would like it
// `1px solid ${this.blastData.color} 

// push at all times
true && (this.elCSS.push(`text-decoration: none; \n`));
this.options = obj;

let stra = "";

obj.exact && (this.res.style.fontSize = obj.exact);

obj.tags && super.setTags(obj.tags); // Has to be in both

obj.id && this.res.setAttribute("id",  obj.id);

obj.id && super.setID(obj.id);

obj.flex && (this.res.style.display = "flex");

//obj.pad && this.pad(obj.pad);

obj.fixMobileTap && this.fixMobileTap(obj.fixMobileTap);



/*

const mapped = sides.map(x => `"${x}"`).join(", ");
		obj.arrayPadding && this.arrayPadding(obj.arrayPadding.sides, obj.arrayPadding.value);
		//obj.arrayPadding && this.arrayPadding(obj.arrayMargin.sides, obj.arrayMargin.value);
		obj.arrayPadding && (stra += `\n arrayPadding: {sides: [${mapped}], value: "${obj.arrayPadding.value}"},`);
*/



let rempad = this.removeQuotesFromFirstWord(JSON.stringify(obj.pad));
obj.pad && (stra += `\n pad: ${rempad},`);

		obj.preffersId && (this.preffersId = obj.preffersId);
		(obj.preffersId != undefined) && (stra += `\n preffersId: ${obj.preffersId},`);

		obj.class && super.setClass(obj.class);
		obj.class && (stra += `\n class: "${obj.class}",`);
		//alert(obj.class);

		if (obj.borderObj){
			//alert(`${obj.borderObj.width}px solid ${obj.borderObj.color}`);
			this.res.style.border = `${obj.borderObj.width} solid ${obj.borderObj.color}`;
			this.res.style.borderRadius = `${obj.borderObj.radius}`;
			
			//this.res.style.border = `3px solid transparent`;
			//this.res.style.border = "10px solid yellow";

			let rem = this.removeQuotesFromFirstWord(JSON.stringify(obj.borderObj));
			stra += `\n borderObj: ${rem},`;
		}

		if (this.options.preffersId === false) {
			this.html.push(`<a class="${obj.class}" href="#hello">${obj.text}</a> \n \n`);
		} else if (obj.id) {
			this.html.push(`<a id="${obj.id.substr(1)}" href="#hello">${obj.text}</a> \n \n`);
		}

		if (obj.blastData != undefined) {
			let rem = this.removeQuotesFromFirstWord(JSON.stringify(obj.blastData));
			super.setAny({ globalBlast: `1px ${obj.blastData.color}` }); // pass this color
			obj.blastData && (stra += `\n blastData: ${rem},`);
		}

		obj.nowrap && (this.res.style.whiteSpace = "nowrap");
		obj.font && this.font(obj.font);
		obj.font && (stra += `\n font: "${obj.font}",`);
		obj.font && (this.elCSS.push(`font-family: "${obj.font}"; \n`));
		
	   obj.fluidc && this.fluidCopy(obj.fluidc);
		obj.fluidc && (stra += `\n fluidc: "${obj.fluidc}",`);

		obj.size && this.fluidCopy(obj.size);
		obj.size && (stra += `\n size: "${obj.size}",`);

		if (obj.fluidc === "S6") {
			obj.fluidc && (this.elCSS.push(`font-size: calc(1rem + 1.075vw); \n`));
		} else {
			obj.fluidc && (this.elCSS.push(`font-size: calc(1.625rem + 5.075vw); \n`));
		}
		// obj.fluidc && (this.elCSS.push(`font-size: calc(1.625rem + 5.075vw); \n`));

		obj.clampc && this.clampCopy(obj.clampc);


		this.options.id && (stra += `\n id: "${this.options.id}",`);


		obj.align && this.leftAlign(obj.align); // 1145 WOW
		obj.align && (stra += `\n align: "${obj.align}",`);


		obj.type && (this.res.style.display = "block");
		obj.color && this.color(obj.color);
		obj.color && (stra += `\n color: "${obj.color}",`);
		obj.color && (this.elCSS.push(`color: "${obj.color}"; \n`));

		obj.background && this.background(obj.background);
		let stro = this.removeQuotesFromFirstWord(JSON.stringify(obj.background))
		obj.background && (stra += `\n background: ${stro},`);

		obj.hover && this.hover(obj.hover); // 23:20:51 Wow!
		let stre = this.removeQuotesFromFirstWord(JSON.stringify(obj.hover))
		obj.hover && (stra += `\n hover: ${stre},`);




		
	
		obj.weight && (this.res.style.fontWeight = obj.weight);

		obj.blast && (this.blastData = obj.blast);

		obj.bold && (this.res.style.fontWeight = "bold");
		// Wasn't there !!!
		obj.bold && (stra += `\n bold: ${obj.bold},`);

		obj.block && this.toBlock();
		obj.block && (stra += `\n block: ${obj.block},`);

		//obj.border && this.border(obj);

		obj.radius && this.radius(obj.radius);
		obj.radius && (stra += `\n radius: "${obj.radius}",`);

		obj.width && this.width(obj.width);
		obj.width && (stra += `\n width: "${obj.width}",`);

		if (obj.arrayPadding){
			let sides = obj.arrayPadding.sides;
			//// // console.log(sides);
			//// // console.log(sides.map(x => `"${x}"`).join(", "));

		const mapped = sides.map(x => `"${x}"`).join(", ");
		obj.arrayPadding && this.arrayPadding(obj.arrayPadding.sides, obj.arrayPadding.value);
		//obj.arrayPadding && this.arrayPadding(obj.arrayMargin.sides, obj.arrayMargin.value);
		obj.arrayPadding && (stra += `\n arrayPadding: {sides: [${mapped}], value: "${obj.arrayPadding.value}"},`); // 2345 06/03
	}
		
		obj.arrayMargin && this.arrayMargin(obj.arrayMargin.sides, obj.arrayMargin.value);
		//obj.arrayMargin && this.arrayMargin(obj.arrayMargin.sides, obj.arrayMargin.value);
		obj.arrayMargin && (stra += `\n arrayMargin: {sides: [${obj.arrayMargin.sides.map(side => `"${side}", `)}], value: "${obj.arrayMargin.value}"},`); // 2345 06/03

		obj.maxWidth && this.maxWidth(obj.maxWidth);
		// // // console.log(obj.arrayMargin);



		

	/*	if ((obj.link !== undefined || obj.url !== undefined) && obj.text !== undefined){
			this.link = obj.link;
		   this.text = obj.text;
			stra += `\n link: "${obj.link}",`;
			stra += `\n text: "${obj.text}",`;
			
		obj.link && this.res.setAttribute("href", obj.link);
		// // // console.log(obj.link);

		obj.text && (this.res.textContent = obj.text);

		}*/

		obj.url && this.res.setAttribute("href", obj.url);
		stra += `\n url: "${obj.url}",`;

		obj.text && (this.res.textContent = obj.text);
		stra += `\n text: "${obj.text}",`;

		//this.text = obj.text;
		
		// stra += `\n text: "${obj.text}",`;


		if (obj.data){
		obj.data && this.appendImageAsChild(obj.data, "20px");
 
		let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.data));
		obj.data && (stra += `\n data: ${stringified}`);
		}

		if (obj.icon) {
			this.addIcon(obj.icon);
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.icon));
			(stra += `\n icon: ${stringified},`);
		}

		if (obj.shadow){
			let noiseObject = obj.shadow;
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(noiseObject));
			 (stra += `\n shadow: ${stringified},`);
		}

		if (obj.stroke) {
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.stroke));
			obj.stroke && (stra += `\n stroke: ${stringified},`);
		}

		if (obj.backgroundOp) {
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.backgroundOp));
			stra += `\n backgroundOp: ${stringified},`;
		}

		if (obj.marginOp) {
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.marginOp));
			stra += `\n marginOp: ${stringified},`;
		}

		if (obj.gradient) {
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.gradient));
			(stra += `\n gradient: ${stringified},`);
		}

		if (obj.animation) { // This does not fire for nasa link with id #swimoa
			// alert("PPP" + obj.id);
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.animation));
			(stra += `\n animation: ${stringified},`);
		}

		if (obj.transform) { // This does not fire for nasa link with id #swimoa
			// alert("PPP" + obj.id);
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.transform));
			(stra += `\n transform: ${stringified},`);
		}

		if (obj.blast) { // This does not fire for nasa link with id #swimoa
			// alert("PPP" + obj.id);
			let stringified = this.removeQuotesFromFirstWord(JSON.stringify(obj.blast));
			(stra += `\n blast: ${stringified},`);
		}

		//if obj.keySet && this.keySet(obj.keySet); 
		//obj.keySet && (stra += `\n keySet: ${stringified},`);

		let str = `new Link().set({${stra}}) \n`;

		this.code.push(str);
		obj.color && this.color(obj.color);



		obj.rounded && this.round();

		
	//---


	
	//---

	
// 504-711 REACT ON TRANSFORM
/*
if (obj.transform && obj.transform.transform){
	this.reactOnTransform(obj.transform);
} else {
	this.reactOnTransform(obj);
}*/

obj.transform && this.reactOnTransform(obj.transform);



	




































	let arr = [];
	// // console.log("....obj");

	// alert("O")

	let ft = [obj.border, obj.blast, obj.gradient, obj.animation, obj.span, obj.shadow, obj.backgroundOp, obj.animation, obj.transform]//obj.gradient.filter(el => el.op.name !== "layout");
		// // // console.log(ft);

		// // console.log("hawai");
		// // console.warn(ft);

		ft = ft.filter(el => el != undefined);

	
if (ft.length > 0){


		if (obj.gradient){
				this.globalGradient = obj.gradient.op.gradient;
			
				if (obj.gradient.op.direction === "radial") {
					this.globalGradient = "radial-gradient(circle at center, orange, green)";
				}
			
			
			}

		
			if (obj.stroke){
				super.setAny({globalBlast: `${obj.stroke.op.width} ${obj.stroke.op.color}`});
			}


	//	let arr = [];

		/*for (var i = 0; i < ft.length; i++){
			// // console.log("Linkello");
			arr.push({
				range: ft[i].range,
				log: ft[i].op.name
			});
		}*/

		// // console.log("LATA")
		// // console.log(ft);
		// // console.log(obj.shadow);

		for (var i = 0; i < ft.length; i++){
			// // // console.log("Hello");
			arr.push({
				range: ft[i].range,
				log: ft[i].op.name,
				target: ft[i].target,
				op: ft[i].op
			});
		}

		

		// THIS GETS OWERWRITTEN
		// this.res.style.border = "1Px solid orange";

		//alert(obj.hover && obj.hover.border);
		let keep = [];
		if (obj.borderObj /*|| (obj.hover && obj.hover.border)*/){
			keep.push("border");
		}

		if (obj.background){
			keep.push("background");
		}

		if (obj.mar){
			keep.push("margin");
		}
		
		if (obj.animation){
			// alert("PP")
			keep.push("animation");
			
			//this.res.style.opacity = 0.3;
		}

		/*if (obj.animationSimple){
			// alert("PP")
			keep.push("animationSimple");
			
			//this.res.style.opacity = 0.3;
		}*/
 // alert(obj.id);
// obj.id is undefined why ???

// alert(this.options.id); undef.
		// it isn't in ID

		// // console.log("Keeper");
		// // console.log(keep); // add animation code
	

	
// animation: "[]"
		this.chainReact(arr, obj.id, keep, obj.isNavA); // pass el name in argument ???
		this.res.style.zIndex = 1;
	}



	


		// 211518 you know howf
	//obj.mar && this.mar(obj.mar); // has to be here
	
	//---

		return this;
	}

	fixMobileTap(obj){
		 this.res.style.pointerEvents = "auto";     // allow clicks/taps
  		 this.res.style.touchAction = "manipulation"; // prevent Safari gesture quirks
  		 this.res.style.cursor = "pointer";         // good for desktop UX
  		 this.res.style.zIndex = "1";               // bring above clipping parent
  		 this.res.style.position = "relative";      // create stacking context
	}

	color(e){
		this.res.style.color = e;
		return this;
	}

	maxWidth(mw){
		this.res.style.maxWidth = mw;  // 121339 in flex
		return this; // 121550 pbends
	}

	background(color){
		this.res.style.backgroundColor = color;
		return this;
	}

	leftAlign(alg){
		this.res.style.textAlign = alg;
		return this;
	}
	
// 22:27:47
	arrayPadding(arr, value) {

		if (!value){ // LTRB
			this.res.style.marginLeft = `${arr[0]}px`;
			this.res.style.marginTop = `${arr[1]}px`;
			this.res.style.marginRight = `${arr[2]}px`;
			this.res.style.marginBottom = `${arr[3]}px`;
		}

		if (arr[0] === "all"){
			this.res.style.paddingLeft = value;
			this.res.style.paddingTop = value;
			this.res.style.paddingRight = value;
			this.res.style.paddingBottom = value;
		}

		
		if (arr.includes("left")){
			this.res.style.paddingLeft = value;
		}
		
		if (arr.includes("right")){
			this.res.style.paddingRight = value;
		}
		
		if (arr.includes("top")){
			this.res.style.paddingTop = value;
		}
		
		if (arr.includes("bottom")){
			this.res.style.paddingBottom = value;
		}

		if (!value){
			this.res.style.paddingBottom = arr;
		}
		

		//alert(value);

		return this;
	} //22155 snap to change phone screen
 

	arrayMargin(arr, value) { // 224857 redefined earlier

		// // // console.log(arr);
		if (arr.includes("left")){
			this.res.style.marginLeft = value;
		}
		
		if (arr.includes("right")){
			this.res.style.marginRight = value;
		}
		
		if (arr.includes("top")){
			this.res.style.marginTop = value;
		}
		
		if (arr.includes("bottom")){
			this.res.style.marginBottom = value;
		}

		if (arr.includes("all")){
			this.res.style.margin = value;
		}

		if (!value){
			this.res.style.marginBottom = arr;
		}
		
		return this;
	}

	getClampValue(name){
		if (name === "S6"){
			return "clamp(2.25rem, 2vw+1.5rem, 3.25rem)";
		} 

		if (name === "S5"){
			return "clamp(2.75rem, 2vw + 1.5rem, 3.25rem)";
		} 

		if (name === "S4"){
			return "clamp(3.5rem, 2vw + 1.5rem, 3.25rem)";
		} 

		if (name === "S3"){
			return "clamp(4.25rem, 2vw + 1.5rem, 3.25rem)";
		} 

		if (name === "S2"){
			return "clamp(5rem, 2vw + 1.5rem, 3.25rem)";
		} 

		if (name === "S1"){
			return "clamp(6rem, 2vw + 1.5rem, 3.25rem)";
		} 
	}

	clampCopy(name){
		this.res.style.fontSize = this.getClampValue(name)
		return this;
	}

	fluidCopy(name){
        
        const display1 = "calc(1.625rem + 5.075vw)";
        
        if (name === "S1"){
		
             this.res.style.fontSize = display1;
        }
         
        const display2 = "calc(1.500rem + 4.3vw)";
        
        if (name === "S2"){
			
             this.res.style.fontSize = display2;
        }
        
        
        const display3 = "calc(1.375rem + 3.525vw)";
        
        if (name === "S3"){
			
             this.res.style.fontSize = display3;
        }

		const display4 = "calc(1.250rem + 2.75vw)";
        
        if (name === "S4"){
			
             this.res.style.fontSize = display4;
        }

		const display5 = "calc(1.125rem + 1.975vw)";
        
        if (name === "S5"){
			
            this.res.style.fontSize = display5;
        }



		const display6 = "calc(1rem + 0.5vw)"; // calc(1rem + 1.2vw)
        
        if (name === "S6"){
             this.res.style.fontSize = display6;
        }
        
              return this;
    }


	inlineBlock(){
		this.res.style.display = "inline-block";
		return this;
	}
    

	toBlock(){
		this.res.style.display = "block";
		return this;
	}

	myself(obj) {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			if (query.matches) {
				this.res.style.fontSize = obj.desktop;
			} else {
				this.res.style.fontSize = obj.phone;
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
	
	style(st){
		this.res.style.color = st.styles.color;
		this.res.style.fontWeight = st.styles.fontWeight;
		this.res.style.paddingLeft = st.styles.padding[0];
		this.res.style.paddingTop = st.styles.padding[1];
		this.res.style.paddingRight = st.styles.padding[2];
		this.res.style.paddingBottom = st.styles.padding[3];
		return this;
	}
	
	color(c){
		this.res.style.color = c;
		return this;
	}
	
	/*background(color){
		//this.res.style.padding = "1em";
		this.res.style.backgroundColor = color;
		return this;
	}*/
	
	round(){
		//alert("K")
		this.res.style.borderRadius = "0.5rem";

		if (this.options.rounded){
			// alert("K");
			this.res.children[0].style.borderRadius = "0.5rem";
		}

		return this;
	}

	newWindow() {
		this.res.target = "_new";
		return this;
	}
    


	radius(w){
		this.res.style.borderRadius = `${w}`;
        return this;
	}




 // 220812 la olympics 2028






















	
	
	transition(duration){
		this.res.style.transition = `${duration}s ease-in-out`; // stop resize ???
		this.res.style.transionProperty = `background, color`;
		return this;
	}
	
	width(percentage){
		this.res.style.width = percentage;
		return this;
	}

	italic(){
		this.res.style.fontStyle = "italic";
		return this;
	}
	
	
	padding(L, T, R, B){
		
		if (L && T && R && B){
		this.res.style.paddingLeft = L;
		this.res.style.paddingTop = T;
		this.res.style.paddingRight = R;
		this.res.style.paddingBottom = B;
		} else {
			this.res.style.padding = L;
		}
		
		return this;
	}
    
    medium() {
		const adj = () => {
			let query = window.matchMedia("(max-device-width: 415px)");
			/* let query = window.matchMedia("(max-device-width: 415px)");
			if (window.innerWidth < h || query.matches) {
			} */

			if (query.matches) {
				this.res.style.fontSize = '2rem';
			} else {
				this.res.style.fontSize = '1.5em';
			}
		}

		adj();
		window.addEventListener("resize", adj);
		return this;
	}
	
    opacity(o){
        this.res.style.opacity = o;
        return this;
    }
    
	margin(L, T, R, B){
		
		if (L && T && R && B){
		this.el.style.marginLeft = L;
		this.el.style.marginTop = T;
		this.el.style.marginRight = R;
		this.el.style.marginBottom = B;
		} else {
			// alert("2")
			this.el.style.margin = L;
		}
		
		return this;
	}

	/*
	arrayMargin(px){
		this.res.style.margin = px;
		return this;
	}*/
	
	/* hover(back, fore){
		this.prevColor = this.res.style.backgroundColor;
		this.foreColor = this.res.style.color;
		
		this.res.onmouseover = () => {
			this.res.style.backgroundColor = `${back}`;
			this.res.style.color = `${fore}`;
		}
		
		this.res.onmouseout = () => {
			this.res.style.backgroundColor = `${this.prevColor}`;
			this.res.style.color = `${this.foreColor}`;
		}
		
		return this;
	} */
    
    hover(obj){
		


		if (obj.border){
			//alert("IHO")
			// // console.log("BORDERA IS ");
			// // console.log(obj.border);

			let w = obj.border.width;
			this.res.style.border = w ? `${w}px solid transparent` : "1px solid transparent";

			//this.res.style.border = "1px solid transparent";
		}


		let bops = this.options.borderObj;

		if (bops){
			//alert("PP")
			this.res.style.border = `${bops.width}px solid ${bops.color}`;
		}
		
        this.prevColor = this.res.style.backgroundColor;
		this.foreColor = this.res.style.color;
		this.prevBorder = this.res.style.border;


	/*	if (obj.border){
			//this.res.style.border = `1px solid transparent`;
			if (obj.borderObj && obj.borderObj.width){ // fix here

				let w = this.options.borderObj.width ?? 3;
				this.res.style.border = `${w}px solid transparent`;
				
			} else {
				// 14:53:15 this was stupid
				//this.res.style.border = `1px solid transparent`;
			
			
			}
			
		}*/
  

	
		if (obj.animation) {
		
			this.res.style.transition = `${obj.animation}`; //`${obj.animation}s ease-in-out`; // stop resize ???
			this.res.style.transionProperty = `background, color`;
			//  this.transition(obj.animation);
		}
      
        this.res.onmouseout = () => {
		//	alert("OJHOIH")
			this.res.style.backgroundColor = `${this.prevColor}`;
			this.res.style.color = `${this.foreColor}`;
		    this.res.style.border = this.prevBorder;


		/*	if (obj.borderObj && obj.borderObj.width){

				let w = this.options.borderObj.width ?? 3;
				this.res.style.border = `${w}px solid transparent`;
				
			} else {
				//this.res.style.border = `1px solid transparent`;
			}*/


			/*if (obj.border){
				this.res.style.border = "1px solid transparent";
			}*/
			
			
			
			// // // console.log(`OUT: ${this.res.style.backgroundColor}`);
		}
        
        this.res.onmouseover = () => {
			//this.res.style.backgroundColor = "#ffffff"; //obj.background; //`#ffffff`;
			//alert("OJHOIH")
		//	alert(obj.background);
			this.res.style.color = obj.color;
			this.res.style.backgroundColor = obj.background;

			if (obj.border){
				//alert("IHO")
				
				let w = obj.border.width;
				let color = obj.border.color ?? "#2ECC71";
				//console.log("WO", w, color);
				//alert(obj.border.color);
				this.res.style.border = w ? `${w}px solid ${color}` : "1px solid #2ECC71";
			}

			//if (this.options && this.options.borderObj){ was here
				
				//let o = this.options.borderObj;
				//this.res.style.border = `${o.width}px solid ${o.color}`;
				//this.res.style.borderRadius = `${o.radius}`;
			//}

			// // // console.log(`OVER: ${obj.background}`);
		}
        
        return this;
    }
    
    
    
    
    
	
	em(n){
		let query = window.matchMedia("(max-device-width: 415px)");	
		
		const res = () => {
			if (query.matches) {
				this.res.style.fontSize = `2em`;
			} else {
				this.res.style.fontSize = `1em`;
				//alert("ONE 1 EMA!")
			}
		}
		
		
	
		
		
	
		res();
	//	window.onresize = res();
		
	
		
		window.addEventListener("resize", res);
		
		
		
		return this;
	}
	
	margin(T, L, R, B){
		this.res.style.marginTop = T;
		this.res.style.marginLeft = L;
		this.res.style.marginRight = R;
		this.res.style.marginBottom = B;
		return this;
	}
	
	font(family){
		this.res.style.fontFamily = family;
		return this;
	} 
	
	
	render(div){
		// this.code.push("})");

		/*if (this.options.id){
			this.res.setAttribute("id", this.options.id);

		}*/
		

		if (div){
			document.querySelector(div).appendChild(this.res);
		} else {
			return this.res;
		}
	
		return this;
	}
}

export { XLink };
