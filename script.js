function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontain of tabcontains) {
        tabcontain.classList.remove("active-tab");
    }

    // Activate the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById("menu-icon").addEventListener("click", toggleMenu);
// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Animation for Sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.header-text, #about').forEach((section) => {
    observer.observe(section);
});

// Toggle Menu
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Tabbed Content
function opentab(tabname) {
    let tablinks = document.getElementsByClassName('tab-links');
    let tabcontents = document.getElementsByClassName('tab-contains');
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

