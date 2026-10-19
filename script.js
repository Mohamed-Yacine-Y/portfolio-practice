const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

humburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
})

// ! Close menu when a navbar link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {       
        navbar.classList.remove("active");       // close menu
        bars.classList.toggle("active");
        xmark.classList.remove("active");
    });
});

//! 
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ! For footer year (automate)
document.getElementById("year").textContent = new Date().getFullYear();

// ! For Up button 
let span = document.querySelector('.up');

window.onscroll = function() {
    // console.log(this.scrollY);

    // if(this.scrollY >= 1000) {
    //     span.classList.add('show');
    // }else{
    //     span.classList.remove('show');
    // }

    this.scrollY >= 1000 ? span.classList.add('show') : span.classList.remove('show');
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

//! preloader
let loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})


//! Scrolling animation
// const box = document.querySelectorAll(".project_content");

// window.addEventListener("scroll", checkProject);


// function checkProject() {
//   const window.innerHeight;
// }

// checkProject();