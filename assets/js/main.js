/*=============== MENU SHOW/HIDDEN ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('animate-toggle');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('animate-toggle');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== THEME LIGHT/DARK TOGGLE ===============*/
const themeToggle = document.getElementById('theme-toggle'),
      iconToggle = document.getElementById('icon-toggle');

const applyTheme = (theme) => {
    document.body.className = theme;
    iconToggle.classList.toggle('ri-moon-line', theme === 'light');
    iconToggle.classList.toggle('ri-sun-line', theme === 'dark');
};

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(currentTheme);
});

// Initialize theme on load (dark mode is default in HTML)
applyTheme(document.body.className || 'dark');

/*=============== HERO TYPING EFFECT ===============*/
const typed = new Typed('.typing', {
    strings: ['Full-Stack Development', 'GenAI', 'Problem Solving', 'Web Development', 'App Development', 'Machine Learning', 'Agentic AI'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*=============== PROJECTS SWIPER ===============*/
var projectsSwiper = new Swiper(".projects-swiper", {
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();
    if (contactForm.checkValidity() === false) {
        showMessage('Please fill out all required fields.', 'color-red');
        return;
    }
    
    emailjs.sendForm('service_117t76p', 'template_07ct9km', '#contact-form', 'Co7Q7c0XUW8JmpJwa')
        .then(() => {
            showMessage('Message sent successfully', 'color-first');
            setTimeout(() => { message.textContent = ''; }, 5000);
            contactForm.reset();
        }, (error) => {
            showMessage('OOPS! Something went wrong...', 'color-red');
        });
};

const showMessage = (text, colorClass) => {
    if (message) {
        message.className = '';
        message.classList.add(colorClass);
        message.textContent = text;
    }
};

if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    let currentSectionId = '';

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            currentSectionId = sectionId;
        }
    });

    navLink.forEach(el => {
        el.classList.remove('active-link');
        if (el.getAttribute('href') === `#${currentSectionId}`) {
            el.classList.add('active-link');
        }
    });
     // Special case for home when at the very top
    if (scrollY < sections[0].offsetHeight - 58) {
         navLink.forEach(el => el.classList.remove('active-link'));
         document.querySelector('.nav-menu a[href*="home"]').classList.add('active-link');
    }
};
window.addEventListener('scroll', scrollActive);


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 400 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);