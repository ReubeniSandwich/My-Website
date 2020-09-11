const trees = document.querySelector('.svg-tree-shape');
const navigation = document.querySelector('.header-blackbox.navbar')
const starMap = document.querySelector("#svgCanvas > g");
let topOfNav = navigation.offsetTop;
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = document.documentElement.clientHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//Not working at all
// function updateTreeSize () {
//     width = document.documentElement.clientWidth;
//     trees.setAttribute("style", `width:${width}px`);
// }

function updateNavigation () {
    if (window.scrollY >= topOfNav) {
        // document.body.style.paddingTop = navigation.offsetHeight + 'px';
        navigation.classList.add("sticky-navigation");
    } else {
        navigation.classList.remove("sticky-navigation");
        document.body.style.paddingTop = 0;
    }
}

trees.setAttribute("style", `width:${width}px`);

function starRotation () {
    starMap.classList.add("star-rotation");
}

// not working atm
// document.addEventListener('resize', updateTreeSize);
window.addEventListener('scroll', updateNavigation);
window.addEventListener('load', starRotation);

// starMap.setAttribute("transform", "rotate(20,10,10)");



