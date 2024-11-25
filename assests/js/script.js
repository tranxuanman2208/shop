const warpper = document.querySelector('.wrapper    ');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const nutlogin= document.querySelector('.btn-log');
const thoatlogin= document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    warpper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    warpper.classList.remove('active');
});

nutlogin.addEventListener('click', ()=> {
    warpper.classList.add('active-popup');
});

thoatlogin.addEventListener('click', ()=> {
    warpper.classList.remove('active-popup');
});
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});