


const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputEl.addEventListener("input", fontSizeControl);
text.style.fontSize = inputEl.value + "px";
function fontSizeControl(event) {
    text.style.fontSize = event.currentTarget.value + "px";
};