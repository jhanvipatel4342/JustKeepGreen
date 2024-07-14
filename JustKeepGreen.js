document.addEventListener("DOMContentLoaded", () => {
    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about, .products, .calculator, .contact');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }
        
        const offset = -slideIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
    
    function changeSlide(direction) {
        showSlide(slideIndex + direction);
    }
    
   // Automatic slide change every 5 seconds
   setInterval(() => {
    changeSlide(1);
}, 5000);

// Initial display
showSlide(slideIndex);


    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const mailtoLink = `mailto:support@example.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
        window.location.href = mailtoLink;
    });
    
});
