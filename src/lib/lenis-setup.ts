import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll Function
const smoothScroll = () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            gsap.to(window, { 
                scrollTo: targetPosition,
                duration: 1,
                ease: "power2.out"
            });
        });
    });
};

// ScrollTrigger Animation Example
const triggerAnimation = () => {
    gsap.utils.toArray('.animate').forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
};

// Initialize the functionality
const init = () => {
    smoothScroll();
    triggerAnimation();
};

window.addEventListener('DOMContentLoaded', init);
