var els = document.querySelectorAll(".hidden");
var height = window.innerHeight;

var requiredHeight = 800;

function addEL() {
    window.addEventListener("load", () => {
        els.forEach((el, i) => {
            var top = el.getBoundingClientRect().top;

            if (top - height <= 0) {
                els[i].className = els[i].className.replace("hidden", "fade-in");
            }
        });
    });
}   
        
function addPEL() {
    window.addEventListener("scroll", () => {
        els.forEach((el, i) => {
            var top = el.getBoundingClientRect().top;

            if (top - height <= 0 && window.scrollY > requiredHeight) {
                els[i].className = els[i].className.replace("hidden", "fade-in");
            }
        });
    });
}


addEL();
addPEL();
       

