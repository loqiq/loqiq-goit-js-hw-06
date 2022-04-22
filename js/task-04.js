let valueEl = Number(document.querySelector('#value').textContent);
let count = valueEl;
let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;
inkrBtn.addEventListener('click', event => {
    // console.log("Вешаю слушателя события на целевую кнопку");
    count += 1;
  
    counterValue.innerText = count;
  });
  
  dekrBtn.addEventListener('click', event => {
    // console.log("Снимаю слушателя события с целевой кнопки");
    count -= 1;
  
    counterValue.innerText = count});