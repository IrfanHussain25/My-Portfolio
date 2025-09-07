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
    strings: ['Web Development', 'GenAI', 'Freelancing', 'Open Source'],
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

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const subject = contactSubject.value.trim();
    const messageText = contactMessage.value.trim();

    const namePattern = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !subject || !messageText) {
        showMessage('All fields are required!', 'color-red');
    } else if (!namePattern.test(name)) {
        showMessage('Name should only contain letters!', 'color-red');
    } else if (!emailPattern.test(email)) {
        showMessage('Enter a valid email address!', 'color-red');
    } else if (subject.length < 5) {
        showMessage('Subject must be at least 5 characters!', 'color-red');
    } else if (messageText.length < 10) {
        showMessage('Message must be at least 10 characters!', 'color-red');
    } else {
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: messageText
        };

        emailjs.send('service_117t76p', 'template_07ct9km', templateParams, 'Co7Q7c0XUW8JmpJwa')
            .then(() => {
                showMessage('Message sent ✅', 'color-first');

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

const showMessage = (text, colorClass) => {
    message.classList.remove('color-first', 'color-red');
    message.classList.add(colorClass);
    message.textContent = text;

    setTimeout(() => {
        message.textContent = '';
    }, 3000);
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
            sectionTop = current.offsetTop - 200,
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