let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = document.documentElement.clientHeight * 0.01;


console.log({height, width});
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




