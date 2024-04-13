/* creating colour boxes as many as we want using javascript from a loop*/
const containerEl = document.querySelector(".container");
/*we are bringing the main container div to javascript because we append small colour boxes inside this container*/

for (let index = 0; index < 20; index++) {    /*run the loop until index 32 so this will generate 30 colour boxes*/
    const colorContainer = document.createElement("div"); /*here document means our html file from create element function we create div*/
    colorContainer.classList.add("colour-container");/*this line adds a class of colour-container to every div we genrate in previous line*/
    containerEl.appendChild(colorContainer);/*here we are including the divs into the main container */
    
}
const colorContainerEls = document.querySelectorAll(".colour-container");
const changeButton = document.querySelector(".btn");
generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainer) => {
    const newColorCode = randomColor();
    colorContainer.style.backgroundColor = ("#" + newColorCode);
    colorContainer.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

changeButton.addEventListener('click',(e)=>{
  generateColors();
})