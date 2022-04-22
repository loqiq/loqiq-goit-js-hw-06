const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const list = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

listEl.innerHTML = list;

console.log(list)

