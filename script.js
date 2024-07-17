const showMenu = (toggleID, navID)=>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll(' .nav__link'),
navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction)) 

const sections = document.querySelectorAll('section[id]')

window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.search__box');
searchBtn.onclick = function(){
    searchBox.classList.add('.on')
}

// Sign Up page
function validateLoginForm() {
    var userId = document.getElementById("loginUserId").value;
    var password = document.getElementById("loginPassword").value;


    if (userId.trim() === "") {
        alert("Please enter a User Id.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    alert("Login successful! Welcome, " + userId + "!");
    return true;
}
function validateRegisterForm() {
    var userId = document.getElementById("registerUserId").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var agreeCheckbox = document.getElementById("agreeCheckbox").checked;


    if (userId.trim() === "") {
        alert("Please enter a User Id.");
        return false;
    }


    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }


    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!agreeCheckbox) {
        alert("Please agree to the terms & conditions.");
        return false;
    }


    alert("Registration successful! Welcome, " + userId + "!");
    return true;
}
// contact

function validateContactForm() {
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;


    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }


    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Message sent successfully! We'll get back to you soon.");
    return true;
}
