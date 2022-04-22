const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector (`.gallery`)

// images.forEach(el => {
//   listEl.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
//   )});
// const itemEl = document.createElement('li');
// // let image = itemEl.textContent;
// const list = images.map((listMarkup) => {
//   const image = document.createElement('img');
//   image.src = listMarkup.src;
//   image.alt = listMarkup.alt;

// }
// )

  
// console.log( list)
// const itemEl = document.createElement('li');
// const list = images.map(listMarkup => {
//   const itemEl = document.createElement('li');
//   const image = document.createElement('img');
//   image.alt = listMarkup.alt;
//   image.url = listMarkup.url;
//   image.width = '100';
//   image.height = '100';
//   itemEl.append(image)
//   return image 
// })
// const image = document.createElement('img');
//   image.alt = 'White and Black Long Fur Cat';
//   image.url = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//   image.width = '100';
//   image.height = '100'
// console.log(list)
// const image = document.createElement('img');
// image.src = images.url
// itemEl.append(image)

// // listEl.insertAdjacentHTML( `afterbegin`, itemEl)
// listEl.append(itemEl)


const list = images.map(listMarkup => {
  listEl.insertAdjacentHTML('afterbegin', `const itemEl = document.createElement('li');
  const image = document.createElement('img');
  image.alt = listMarkup.alt;
  image.url = listMarkup.url;
  image.width = '100';
  image.height = '100';
  itemEl.append(image)`)
   
   
    return listEl.insertAdjacentHTML
  })