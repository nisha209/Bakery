const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

document.addEventListener("DOMContentLoaded",
	function () {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.querySelector(".navbar");

		hamburger.addEventListener("click", function () {
			navbar.classList.toggle("active");
		});
	});

window.addEventListener("scroll", () => {
	navbar.classList.remove("active");
});

function showSlide(nextIndex) {
	slides[index].classList.remove("active");
	index = (nextIndex + slides.length) % slides.length;
	slides[index].classList.add("active");
}

function next() {
	showSlide(index + 1);
}

function prev() {
	showSlide(index - 1);
}

//register

function registeruser()
{
	var submit=document.getElementById("register")
	var fullname=document.getElementById("fullname")
	var email=document.getElementById("email")
	var username=document.getElementById("username")
	var password=document.getElementById("password")
	var confirm=document.getElementById("confirm")

	if(fullname.value == ""  || email.value == "" || username.value == "" || password.value == "" || confirm.value == "")
	{
		alert("Fill All the Details...")
	}
	else{
		alert("Successfully Registered.")
	}
}
 function loginuser()
 {
	var username1=document.getElementById("username1")
	var password1=document.getElementById("password1")


	if(username1.value == "" || password1.value == ""){
		alert("Fill All the Details...")
	}
	else{
		alert("Successfully Logged in.")
	}
 }