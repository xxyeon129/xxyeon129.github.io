const images = ["0.png","1.png","4.png","5.png","06.jpg","07.jpg","08.png","09.png","10.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg");
document.body.appendChild(bgImage);

