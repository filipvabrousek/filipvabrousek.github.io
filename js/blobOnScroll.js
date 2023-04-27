document.addEventListener("scroll", () => {

    const converted = convertRange(
        window.scrollY,
        { min: 0, max: 815 }, { min: 0, max: 1 }
    ) * 4 + 1;


  


   
   // console.warn(converted);



    if (converted < 4){
        S(".upperBlob").style.transform = `scale(${converted * 0.77}) translate(0, ${converted * 28}px)`;

        console.warn(converted * 200);
    }
    



    const convertedUpperRight = convertRange(
        window.scrollY,
        { min: 0, max: 815 }, { min: 0, max: 1 }
    ) * 4 + 1;


    const scale = window.scrollY / 100;

  console.log(2.4 + scale);


  if (1-scale >= 0){
    S(".upperRightBlob").style.transform = `scale(${1 - scale})`;
    S(".upperLeftBlob").style.transform = `scale(${1 - scale})`;
  }

   
});