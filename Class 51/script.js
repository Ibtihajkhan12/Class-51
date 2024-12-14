const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const nextButton = document.getElementById("nextBtn");


const lights = [redLight, yellowLight, greenLight];

let currentLightIndex = 0; 

function changeLight() {
    lights[currentLightIndex].classList.remove("active");
    currentLightIndex = (currentLightIndex + 1) % lights.length;


    lights[currentLightIndex].classList.add("active");
}

nextButton.addEventListener("click", changeLight);

changeLight();
