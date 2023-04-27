function getNavigationType(fromPath, toPath) {  
      return 'gallery-to-teacher';
  
    }
  

    /*navigation.addEventListener("navigate", (event) => {
      const iHaveNotSelectedAnything = true;

      if (iHaveNotSelectedAnything){
        return;
      }
    });*/
  
    onLinkNavigate(async ({fromPath, toPath}) => {



      //  if (!document.createDocumentTransition) return;
      // of only closed data


      

      document.querySelector(".blob1").style.position = "absolute";
      console.log(toPath);
      console.log(fromPath);
   
      const navType = getNavigationType(fromPath, toPath);
      const content = await getPageContent(toPath);
  
      let targetThumbnail;
  
      if (navType === "gallery-to-teacher"){ // 105616
          console.log(getLink(toPath));
          console.log(getLink(fromPath)); // undefinesd 
        
        //  alert("ONO")
       targetThumbnail = document.querySelector(".blob1");//getLink(fromPath).querySelector("img");
       targetThumbnail.style.viewTransformName = "banner-img";
      }
  
      // 22:09_27 02/04/2023 !!!
      
      const transition = transitionHelper({
          updateDOM(){ // 202908
              document.body.innerHTML = content;
          }
      });
  
  
      transition.finished.finally(() => {
          if (targetThumbnail) {
              targetThumbnail.style.viewTransitionName="";
          }
      });

    });



if (document.startViewTransition && window.location.href.includes("sport")) {
  console.log("Supported");
} else if (document.startViewTransition && (window.location.href.includes("filipvabrousek.github.io") || window.location.href.includes("localhost"))) {
  console.log("Supported");
} else if (document.startViewTransition && ((window.location.href.includes("filipvabrousek.github.io")) || (window.location.href.includes("localhost")))) {
  document.querySelector(".blob1").style.display = "block";
} else {
  console.log("Unsupported");
  document.querySelector(".blob1").style.display = "none";
}

if (window.location.href.includes("sport") === false) {
  document.querySelector(".blob1").style.display = "block";
}



window.setInterval(() => {

  if (window.location.href.includes("sport") && window.animDone === undefined){ // 204952 no Keyboard change
window.animDone = true;
  document.querySelector(".blob1").animate([
    { opacity: 0.6 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });
/*
  document.querySelector(".app2").animate([
    { opacity: 0.6 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });

  // 17:22:45 Nice
  document.querySelector(".app3").animate([
    { opacity: 0.6 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });*/
/*
  document.querySelector(".app2").animate([
    { opacity: 0.5 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });*/
/*
  document.querySelector(".app3").animate([
    { opacity: 0.5 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });
  */
}

 }, 500); // 165047 thanks 26/02
