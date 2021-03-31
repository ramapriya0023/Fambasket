const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var wrapper = document.querySelector('.signin-signup'),
    form = wrapper.querySelectorAll('.sign-in-form'),
    submitInput = form[0].querySelector('input[type="submit"]');


function getFormData(e){
    e.preventDefault();

    var formData = new FormData(form[0]);
    var string = `Welcome back ${formData.get('nameField')}`;
    alert("Successfully Logged in");
    alert(string);
    location.replace('../index.html');
}


document.addEventListener('DOMContentLoaded',function(){
  submitInput.addEventListener('click',getFormData,false);
},false)
