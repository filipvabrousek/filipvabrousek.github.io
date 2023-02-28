// import { getPageContent, onLinkNavigate, transitionHelper, getLink } from 'utils.js';


function getNavigationType(fromPath, toPath) {

    console.warn(fromPath);
    console.warn(toPath);
  
    
      /*if (toPath.includes("indexo")) {
        return 'teacher-to-gallery';
      }
      
      if (toPath.includes("child")) {
        return 'gallery-to-teacher';
      }
      
      return 'other';
      */
  
  
      return 'gallery-to-teacher';
  
    
    }
  
  
    onLinkNavigate(async ({fromPath, toPath}) => {
      document.querySelector(".app1").style.position = "absolute";
      console.log(toPath);
      console.log(fromPath);
   
      const navType = getNavigationType(fromPath, toPath);
      const content = await getPageContent(toPath);
  
      let targetThumbnail;
  
      if (navType === "gallery-to-teacher"){ // 105616
          console.log(getLink(toPath));
          console.log(getLink(fromPath)); // undefinesd 
       targetThumbnail = document.querySelector(".app1");//getLink(fromPath).querySelector("img");
       targetThumbnail.style.viewTransformName = "banner-img";
      }
  
      
      const transition = transitionHelper({
          updateDOM(){ // 202908
              document.body.innerHTML = content;
  
              /*if (navType === "teacher-to-gallery"){
                  targetThumbnail = getLink(fromPath).querySelector("img");
                  targetThumbnail.style.viewTransformName = "banner-img";
              }*/
          }
      });
  
  
  
      transition.finished.finally(() => {
        
          if (targetThumbnail) {
              targetThumbnail.style.viewTransitionName="";
          }
  
      });
  
  
  
  
  
  
    });
  
    
  /*
  
  
  
  onLinkNavigate(async ({ fromPath, toPath }) => {
   //....
    
    const transition = transitionHelper({
      updateDOM() {
        // This is a pretty heavy-handed way to update page content.
        // In production, you'd likely be modifying DOM elements directly,
        // or using a framework.
        // innerHTML is used here just to keep the DOM update super simple.
        document.body.innerHTML = content;
  
        if (navigationType === 'cat-page-to-gallery') {
          targetThumbnail = getLink(fromPath).querySelector('img');
          targetThumbnail.style.viewTransitionName = 'banner-img';
        }
      }
    });
    
    transition.finished.finally(() => {
      // Clear the temporary tag
      if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
    });
  
  
  
  });
  
  231755
  */


  // 16:47:20 25/02/2023 OMG! 





if (document.startViewTransition && window.location.href.includes("sport")){
  console.log("Supported");
} else if (document.startViewTransition && (window.location.href.includes("filipvabrousek.github.io") || window.location.href.includes("localhost")) ) {
  console.log("Supported");
} else if (document.startViewTransition && ((window.location.href.includes("filipvabrousek.github.io")) || (window.location.href.includes("localhost")))){
  document.querySelector(".app1").style.display = "block";
  document.querySelector(".app2").style.display = "block";
  //document.querySelector(".app3").style.display = "block";
} else {
  console.log("Unsupported");
  document.querySelector(".app1").style.display = "none";
  document.querySelector(".app2").style.display = "none";
  document.querySelector(".app3").style.display = "none";
}

if (window.location.href.includes("sport") === false){
  document.querySelector(".app1").style.display = "block";
  document.querySelector(".app2").style.display = "block";
  //document.querySelector(".app3").style.display = "block";
}


// alert(window.location.href);


 window.setInterval(() => {

  if (window.location.href.includes("sport") && window.animDone === undefined){ // 204952 no Keyboard change
window.animDone = true;
  document.querySelector(".app1").animate([
    { opacity: 0.6 },
  { opacity: 0},
  ], {
    fill: 'forwards',
    duration: 1000,
    iterations: 1
  });

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
  });
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

