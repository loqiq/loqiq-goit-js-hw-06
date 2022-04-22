const categoriesEl = document.querySelectorAll('li.item');
// console.log(categoriesEl);
console.log(`Number of categories: ${categoriesEl.length}`);

const list = document.querySelectorAll('#categories>li');
list.forEach(element => {

  console.log(`Category: ${element.firstElementChild.textContent}`) 
    console.log(`Elements: ${element.lastElementChild.children.length}` )
   });