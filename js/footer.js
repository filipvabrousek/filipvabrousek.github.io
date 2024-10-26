S("#insta").addEventListener("click", () => window.open("https://www.instagram.com/filipvabrousek/"));
S("#fba").addEventListener("click", () => window.open("https://www.facebook.com/filipvabrousek"));
S("#x").addEventListener("click", () => window.open("https://www.twitter.com/filipvabrousek"));

window.setTimeout(() => {
   S(".footer-em").innerHTML = new Date().getFullYear();
}, 300);
