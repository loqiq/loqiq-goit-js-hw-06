

const changeColorBtn = document.querySelector('.change-color');
const span = document.querySelector('.color')
changeColorBtn.addEventListener( 'click', onClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 
}
function onClick (event) {
//  let bodyBackgroundColor = document.body.style.backgroundColor;
const color = getRandomHexColor();
 document.body.style.backgroundColor = color;
 span.innerHTML = color;
}
