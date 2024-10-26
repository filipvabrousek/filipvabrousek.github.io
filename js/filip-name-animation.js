window.addEventListener("scroll", () => {
  let nfn = document.querySelector(".newFilipName");
  let lo = document.querySelector(".lo");
  let fNameOpacity = convertRange(window.scrollY, { min: 0, max: 1000 }, { min: 0, max: 1 });

  const scale = window.scrollY / 100;

  console.log(2.4 + scale);

  if (lo != null) {
    lo.style.opacity = `${4.6 - (1.2 * 2.4 + scale)}`;
  }

  let app1 = document.querySelectorAll(".opawrap");
  Array.from(app1).forEach((e) => {
    e.style.opacity = `${4.6 - (1.2 * 2.4 + scale)}`;
  });



    S(".floatF").setAttribute('style', '-webkit-filter:blur('+window.scrollY/60+'px)');
  

});





for (var i = 0; i < SA(".floatF")[0].children.length; i++){

SA(".floatF")[0].children[i].animate([
  { transform: 'translate(0px,256px) scale(1.4)', color: "#00b3ff", opacity: 0  },
  { transform: 'translate(0, 0) scale(1)', color: "black", opacity: 1 },
 
], {
  easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
  duration: 800,
  fill: 'forwards',
  delay: (i * 100) + 150
});

}


let isOpen = false;




S("#h").addEventListener("click", () => {
  isOpen = !isOpen;

  let frames = [
    { transform: 'translate(0, 0) scale(1)', color: "black", opacity:1 },
    { transform: 'translate(0px,256px)  scale(1.4)', color: "#00b3ff", opacity: 0 },
  ];

// 22:37:10 26/10/2024 Nice!!!  
  for (var i = 0; i < SA(".floatF")[0].children.length; i++){
  SA(".floatF")[0].children[i].animate(frames, {
    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
    duration: 600,
    fill: 'forwards',
    delay: (i * 100) + 150
  });
}

});


S("#l").addEventListener("click", () => {
  isOpen = !isOpen;




  if (!isOpen){
     frames = [
      { transform: 'translate(0px,256px)', color: "#00B3FF", opacity: 0 },
      { transform: 'translate(0, 0)', color: "black", opacity: 1 },
    ]; 
  }
  
  
  for (var i = 0; i < SA(".floatF")[0].children.length; i++){
  SA(".floatF")[0].children[i].animate(frames, {
    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
    duration: 600,
    fill: 'forwards',
    delay: (i * 100) + 2000
  });
}
  




});









// 23:10:30 05/04/2022
/*
for (var i = 0; i < SA(".floatF")[1].children.length; i++){



  SA(".floatF")[1].children[i].animate([
    { transform: 'translate(0px,256px)'  },
    { transform: 'translate(0, 0)' },
   
  ], {
    easing: "cubic-bezier(0.77, 0, 0.175, 1)", // 144700 on 01/04
    duration: 800,
    fill: 'forwards',
    delay: (i * 100) + 200
  });
  
  }*/



