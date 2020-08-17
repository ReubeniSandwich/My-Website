const homepage = document.querySelector(".homepage-splashscreen");
let screenHeight = window.innerHeight;

homepage.style.setProperty("height", `${screenHeight}px`);

function updateScreenSize () {
    screenHeight = window.innerHeight;
    homepage.style.setProperty("height", `${screenHeight}px`);
    console.log(screenHeight);
}
window.addEventListener("resize", updateScreenSize);



