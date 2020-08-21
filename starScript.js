// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let height = window.innerHeight;
let width = window.innerWidth;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.documentElement.style.setProperty

trees = document.querySelector('.svg-tree-shape');
// console.log(shape);

trees.setAttribute("style", `width:${width}px`);


// window.addEventListener('resize', updateTreeSize);

// function updateTreeSize () {
//     width = window.innerWidth;
//     console.log("hellpo");
//     trees.setAttribute("style", `width:${width}px`);

// }




