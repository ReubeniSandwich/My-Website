// Star Code
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
console.log("width: " + width);
console.log("height: " + height);

function generateRandomStarLocations(maxWidth, maxHeight, amount) {
  let starList = [];
  
  for (let i = 0; i < amount; i++) {
    let starPositionX = Math.floor(Math.random() * ((maxWidth) + 1))
    let starPositionY = Math.floor(Math.random() * ((maxHeight - (maxHeight * .1)) + 1))
    
    let star = {
      "x": starPositionX,
      "y": starPositionY
    }
    starList.push(star)
  }
  return starList;
}

const starContainer = document.querySelector(".star-group-svg");
const starAmount = width > 1000 ? 200 : 100;

/* Lots of code and inspiration from https://www.satellytes.com/blog/twinkling-night-sky-with-shooting-stars-made-in-svg */
generateRandomStarLocations(width, height, starAmount).forEach(starCordinates => {
  const starBox = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  
  const brightness = 1 * (Math.random()) + .5 // prevents low light stars like .1
  const delay = 100 +  (Math.random() * 500);
  const duration = 3000 + (Math.random() * 4000);
  const radius = .5 + Math.random();

  star.classList.add("star");
  star.setAttribute("r", radius)
  starBox.setAttribute("transform", `translate(${starCordinates.x}, ${starCordinates.y})`);
 
  star.style.setProperty('--star-brightness', `${brightness}`);
  star.style.setProperty('--star-animation-delay', `${delay}ms`);
  star.style.setProperty('--star-animation-duration', `${duration}ms`);
  star.style.setProperty('--star-animation-glow-duration', `10000ms`);
  
  starBox.appendChild(star);
  starContainer.appendChild(starBox);
});


// Dragging Photos Code

const container = document.querySelector("#main-container");
var dragItems = container.querySelectorAll("div.photo-card");

dragItems.forEach(dragItem => {
dragItem.addEventListener("mousedown", dragStart);
dragItem.addEventListener("touchstart", dragStart);
});

function dragStart (event) {
  if (event.type === "touchstart") {
  // (1) prepare to moving: make absolute and on top by z-index
  event.target.style.position = 'absolute';

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    event.target.style.left = pageX - event.target.offsetWidth / 2 + 'px';
    event.target.style.top = pageY - event.target.offsetHeight / 2 + 'px';
  }
  // move our absolutely positioned ball under the pointer
  moveAt(event.touches[0].pageX, event.touches[0].pageY);
  
  function onMouseMove(event) {
    moveAt(event.touches[0].pageX, event.touches[0].pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('touchmove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  event.target.ontouchend = function() {
    document.removeEventListener('touchmove', onMouseMove);
    event.target.onmouseup = null;
  };
} else {
  event.target.style.position = 'absolute';
  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  // document.body.append(ball);

  // centers the card at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    event.target.style.left = pageX - event.target.offsetWidth / 2 + 'px';
    event.target.style.top = pageY - event.target.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned card under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop, remove unneeded handlers
  event.target.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    event.target.onmouseup = null;
  };
}

};

// document.addEventListener('mousemove', onMouseMove);
// console.log(dragItems);
// container.addEventListener("touchmove", drag);
// container.addEventListener("mousemove", drag);


// dragItems.forEach(dragItem => {
// dragItem.addEventListener("touchstart", dragStart);
// dragItem.addEventListener("touchend", dragEnd);
// dragItem.addEventListener("touchmove", drag);

// dragItem.addEventListener("mousedown", dragStart);
// dragItem.addEventListener("mouseup", dragEnd);
// dragItem.addEventListener("mousemove", drag);
// });

// dragItems.forEach(dragItem => {

//   dragItem.active = false;
//   dragItem.currentX = 0;
//   dragItem.currentY = 0;
//   dragItem.initialX = 0;
//   dragItem.initialY = 0;
//   dragItem.xOffset = 0;
//   dragItem.yOffset = 0;
// });

// function dragStart(e) {

//   if (e.type === "touchstart") {
//     e.target.initialX = e.touches[0].clientX - e.target.xOffset;
//     e.target.initialY = e.touches[0].clientY - e.target.yOffset;
//   } else {
//     e.target.initialX = e.clientX - e.target.xOffset;
//     e.target.initialY = e.clientY - e.target.yOffset;
//   }

//   e.target.active = true
// }

// function dragEnd(e) {

//   e.target.initialX = e.target.currentX
//   e.target.initialY = e.target.currentY
//   e.target.active = false
//   // e.target.style.transform = "rotate(15deg)"
// }

// function drag(e) {
//   if (e.target.active) {
  
//     e.preventDefault();
  
//     if (e.type === "touchmove") {
//       e.target.currentX = e.touches[0].clientX - e.target.initialX;
//       e.target.currentY = e.touches[0].clientY - e.target.initialY;
//     } else {
//       e.target.currentX = e.clientX - e.target.initialX;
//       e.target.currentY = e.clientY - e.target.initialY;
//     }
//     e.target.xOffset = e.target.currentX;
//     e.target.yOffset = e.target.currentY;

//     setTranslate(e.target.currentX, e.target.currentY, e.target);
//   }
// }

// function setTranslate(xPos, yPos, e) {
//   e.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }


