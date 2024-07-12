// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});


// hide style switcher on scrolling 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
})

// theme colors

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors) {
    alternateStyles.forEach((style) =>{
        if(colors === style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled", "true");
            }
    })
} 

// theme light & dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector("i").classList.add("fa-sun");
        }
        else{
            dayNight.querySelector("i").classList.add("fa-moon");
        }
})

// lists color change---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.aside .nav li a');

    const updateActiveLink = () => {
        const currentHash = window.location.hash;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === currentHash);
        });
    };

    window.addEventListener('hashchange', updateActiveLink);
    updateActiveLink();
});


// sections view color change----------------
// Define the skin colors and their corresponding classes
const skinColors = {
    home: 'color-1',
    about: 'color-2',
    service: 'color-3',
    portfolio: 'color-4',
    contact: 'color-5'
};

// Function to update section colors and navigation menu colors based on scroll position
function updateColors() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav li a');
    const scrollPosition = window.scrollY;

    // Update section colors
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Apply skin color class to the current section
            section.classList.add(skinColors[sectionId]);
        } else {
            // Remove skin color class from other sections
            section.classList.remove(...Object.values(skinColors));
        }
    });

    // Update navigation menu colors
    navItems.forEach(item => {
        const href = item.getAttribute('href').substring(1); // Remove '#' from href
        const section = document.getElementById(href);

        if (section) {
            if (section.classList.contains(skinColors[href])) {
                // Apply skin color to the corresponding navigation menu item
                item.classList.add('active');
            } else {
                // Remove skin color from other navigation menu items
                item.classList.remove('active');
            }
        }
    });
}

// Listen for scroll events and update colors
window.addEventListener('scroll', updateColors);

// Initial update on page load
updateColors();



