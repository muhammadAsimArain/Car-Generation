const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

// Toggle dropdown on button click
dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove("active");
    }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Function to check screen size and toggle menu
function handleResize() {
    if (window.innerWidth <= 768) {
        // Mobile view: Hide nav links by default
        navLinks.style.display = "none";
        hamburger.style.display = "flex"; // Show hamburger icon
    } else {
        // Desktop view: Show nav links and hide hamburger icon
        navLinks.style.display = "flex";
        hamburger.style.display = "none";
        navLinks.classList.remove("active"); // Ensure menu is not toggled
        hamburger.classList.remove("active"); // Reset hamburger icon
    }
}

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Toggle display of nav links
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// Handle initial load and window resize
window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

function myFunction() {
    let person = prompt("Please enter your name", "Default");
    if (person != null) {
        document.getElementById("Demos").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

document.getElementById('call-icon1').addEventListener('click', function () {
    var phoneNumber = 'tel:+92 312 8491287';
    window.location.href = phoneNumber;
});

document.getElementById('call-icon2').addEventListener('click', function () {
    var phoneNumber = 'tel:+92 335 2402942';
    window.location.href = phoneNumber;
});

document.getElementById('call-icon3').addEventListener('click', function () {
    var phoneNumber = 'tel:+92 3004564140';
    window.location.href = phoneNumber;
});
document.getElementById('call-icon4').addEventListener('click', function () {
    var phoneNumber = 'tel:+92 3004564140';
    window.location.href = phoneNumber;
});


let currentIndex = 0;
const slides = document.querySelectorAll('auto-slider');
const totalSlides = slides.length;
const slider = document.querySelector('auto-slider');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000);






























// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
//     let extname = path.extname(filePath);
//     let contentType = "text/html";

//     switch (extname) {
//         case ".css":
//             contentType = "text/css";
//             break;
//         case ".js":
//             contentType = "text/javascript";
//             break;
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code === "ENOENT") {
//                 res.writeHead(404, { "Content-Type": "text/html" });
//                 res.end("<h1>404 - Page Not Found</h1>", "utf-8");
//             } else {
//                 res.writeHead(500);
//                 res.end(`Server Error: ${err.code}`);
//             }
//         } else {
//             res.writeHead(200, { "Content-Type": contentType });
//             res.end(content, "utf-8");
//         }
//     });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
