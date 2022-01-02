let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

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