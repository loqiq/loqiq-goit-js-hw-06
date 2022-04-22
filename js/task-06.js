

let inputEl = document.querySelector('#validation-input');

const input = document.querySelector('input');
inputEl.addEventListener('change', element => {
  const text = element.target.value;

  if (text.length ===+ inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});