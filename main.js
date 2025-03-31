const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
})


// theme
let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    })
})

const themeToggle = document.getElementById('theme-toggle')
const iconToggle = document.getElementById('icon-toggle')
themeToggle.addEventListener('click', () => {
    // Change theme
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = currentTheme;

    // Change icon
    const iconToggle = document.getElementById('icon-toggle');
    if (currentTheme === 'dark') {
        iconToggle.classList.remove('ri-moon-fill');
        iconToggle.classList.add('ri-sun-fill');
    } else {
        iconToggle.classList.remove('ri-sun-fill');
        iconToggle.classList.add('ri-moon-fill');
    };
})

// scroll animation
AOS.init({
    duration: 1000,
    once: false, 
});
console.log(AOS);

// Typing Effect
const text = "Irfan Hussain";
let index = 0;
function typeEffect() {
    document.getElementById("typing-effect").textContent = text.substring(0, index++);
    if (index <= text.length) setTimeout(typeEffect, 150);
}
window.onload = typeEffect;


// name typing animation
const typed = new Typed('.typing', {
    strings: ['Web Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// projects swiper
var projectsSwiper = new Swiper(".projects-swiper", {
    spaceBetween: 32,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// Resume
const accordionItems = document.querySelectorAll('.resume-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.resume-header'),
        content = item.querySelector('.resume-content'),
        icon = item.querySelector('.resume-icon i');

    header.addEventListener('click', () => {
        const isOpen = item.classList.toggle('accordion-open');

        content.style.height = isOpen ? content.scrollHeight + 'px' : '0';
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';

        accordionItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains('accordion-open')) {
                otherItem.querySelector('.resume-content').style.height = '0';
                otherItem.querySelector('.resume-icon i').className = 'ri-add-line';
                otherItem.classList.remove('accordion-open');
            }
        })
    })
})

// Email JS
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        message.classList.remove('color-first');
        message.classList.add('color-red');
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        const templateParams = {
            name: contactName.value,
            email: contactEmail.value,
            subject: contactSubject.value,
            message: contactMessage.value
        };

        emailjs.send('service_117t76p', 'template_07ct9km', templateParams, 'Co7Q7c0XUW8JmpJwa')
            .then(() => {
                message.classList.add('color-first');
                message.textContent = 'Message sent ✅';

                setTimeout(() => {
                    message.textContent = '';
                }, 5000);

                contactForm.reset();
            })
            .catch((error) => {
                alert('OOPS! Something went wrong: ' + JSON.stringify(error));
            });
    }
};
contactForm.addEventListener('submit', sendEmail);


// remove menu mobile
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));


// change background header
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrolly >= 20 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);


// scroll sections active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);