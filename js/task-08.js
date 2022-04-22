const form = document.querySelector (`.login-form`);

form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    console.dir(formElements)
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === ''){
        alert("Email must be filled out")
    return false} 
    if (password === '') {
        alert("Password must be filled out")
        return false
    }
    const formData = {
        email,
        password,
    }
   
console.log(formData)
form.reset();
}

