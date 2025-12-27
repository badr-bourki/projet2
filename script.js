// =================== Form Validation ===================
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting!");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

// =================== Header Navigation Toggle for Mobile ===================
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");

function createDropdown() {
    if(window.innerWidth < 768) {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        navLinks.forEach(link => link.style.margin = "10px 0");
    } else {
        nav.style.flexDirection = "row";
        navLinks.forEach(link => link.style.margin = "0 15px");
    }
}
window.addEventListener("resize", createDropdown);
window.addEventListener("load", createDropdown);

// =================== Toggle Sections ===================
const sections = document.querySelectorAll("section, article, aside");
sections.forEach(sec => {
    const header = sec.querySelector("h3");
    if(header){
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            sec.classList.toggle("collapsed");
        });
    }
});

// CSS for collapsed sections (can also be added to style.css)
/* 
.collapsed p {
    display: none;
}
*/

// =================== Dynamic Colors ===================
const h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.color = h1.style.color === "red" ? "#333" : "red";
});

// =================== Dynamic Footer Year ===================
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} My HTML Project`;

// =================== Auto Slide Images/Video ===================
const media = document.querySelectorAll("img, video");
let mediaIndex = 0;

function autoSlide() {
    media.forEach((m, idx) => {
        if(idx === mediaIndex) m.style.display = "block";
        else m.style.display = "none";
    });
    mediaIndex = (mediaIndex + 1) % media.length;
}

if(media.length > 0){
    autoSlide();
    setInterval(autoSlide, 5000); // كل 5 ثواني يتغير
}
