
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")




const greeting = (event) => {
   if (input.value === ""){
    output.textContent = "незнакомец"
   } else
     {
        output.textContent = event.currentTarget.value;
    }
}
input.addEventListener("input", greeting);