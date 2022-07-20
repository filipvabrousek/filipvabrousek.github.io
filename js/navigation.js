
        function SA(el) {
            return document.querySelectorAll(el);
        }

		
		// I do not wanna update this each year :D
		//S(".footer-em").innerHTML = new Date().getFullYear();
      //  S("#insta").addEventListener("click", () => window.open("https://www.instagram.com/filipvabrousek/"));
       // S("#fba").addEventListener("click", () => window.open("https://www.facebook.com/filipvabrousek"));
       // S("#macinformer").addEventListener("click", () => window.open("https://macdownload.informer.com/eveny/"));

        var isHidden = true;
        S("#close").addEventListener("click", () => {
            if (isHidden == true) {
                isHidden = false
            } else {
                isHidden = true;
            }

            if (isHidden == true) {
                S("#left").style.display = "none";
                S("#navback").style.display = "none";
                S("#h").innerHTML = "&#9776;";
            } else {
                S("#left").style.display = "block";
                S("#navback").style.display = "block";
                S("#h").innerHTML = "&#10006;";
            }
        });



        S("#h").addEventListener("click", () => {

            if (isHidden == true) {
                isHidden = false
            } else {
                isHidden = true;
            }

            if (isHidden == true) {
                S("#left").style.display = "none";
                S("#left").style.visibility = "hidden";
                S("#navback").style.display = "none";
                S("#h").innerHTML = "&#9776;";
                S("#h").marginTop = "20px"; // do not set position to absolute
            } else {
                S("#left").style.display = "flex"; 
                S("#navback").style.display = "block";
                S("#h").innerHTML = "&#10006;";
                S("#h").marginTop = "3em";
                S("#h").marginRight = "2em";
            }
        });

    
