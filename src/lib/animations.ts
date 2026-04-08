// src/lib/animations.ts

import { gsap } from 'gsap';

// A reusable function to fade in an element
export const fadeIn = (element: string, duration: number = 1) => {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration });
};

// A reusable function to slide in an element
export const slideIn = (element: string, duration: number = 1, direction: string = 'left') => {
    const xValue = direction === 'left' ? '-100%' : '100%';
    gsap.fromTo(element, { x: xValue, opacity: 0 }, { x: '0%', opacity: 1, duration });
};

// A reusable function for scaling an element
export const scale = (element: string, duration: number = 1, scaleValue: number = 1) => {
    gsap.to(element, { scale: scaleValue, duration });
};

// Add more reusable animation functions as needed...