var els = document.querySelectorAll(".fade");
var height = window.innerHeight;

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

            if (top - height <= 0) {
                els[i].className = els[i].className.replace("hidden", "fade-in");
            }
        });
    });
}


addEL();
addPEL();
       

