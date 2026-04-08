'use client';

import React from 'react';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-dark-950 min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section
        id="about"
        className="relative py-section px-4 md:px-0"
      >
        <div className="container max-w-container-md">
          <h2 className="text-clamp-xl font-bold text-white mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-clamp-md text-gray-400 leading-relaxed">
                I'm a creative developer passionate about building exceptional digital experiences. With expertise in modern web technologies and a keen eye for design, I bring ideas to life with pixel-perfect precision and smooth, engaging animations.
              </p>
              <p className="text-clamp-md text-gray-400 leading-relaxed">
                My focus is on creating premium, performance-optimized websites that feel incredible to interact with. Every detail matters — from scroll behavior to hover states.
              </p>
            </div>
            <div className="glass-md p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Key Skills</h3>
              <ul className="space-y-3 text-gray-400">
                <li>✓ Next.js & React Development</li>
                <li>✓ GSAP & Advanced Animations</li>
                <li>✓ Tailwind CSS & Design Systems</li>
                <li>✓ Smooth Scroll & UX Optimization</li>
                <li>✓ Glassmorphism & Modern Design</li>
                <li>✓ Web Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative py-section px-4 md:px-0">
        <div className="container max-w-container-md">
          <h2 className="text-clamp-xl font-bold text-white mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="group relative h-72 rounded-2xl glass overflow-hidden cursor-pointer hover:glow-md transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Project {i + 1}
                    </h3>
                    <p className="text-sm text-gray-400">Web Design & Development</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-section px-4 md:px-0"
      >
        <div className="container max-w-container-md">
          <h2 className="text-clamp-xl font-bold text-white mb-12">Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: 'Senior Developer',
                company: 'Creative Studio',
                duration: '2022 - Present',
                description: 'Leading frontend development and animation design for premium digital experiences.',
              },
              {
                title: 'Full Stack Developer',
                company: 'Tech Company',
                duration: '2020 - 2022',
                description: 'Developed responsive web applications with focus on user experience and performance.',
              },
              {
                title: 'Junior Developer',
                company: 'Digital Agency',
                duration: '2018 - 2020',
                description: 'Started my web development journey, building websites and learning modern technologies.',
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="group glass-md p-8 rounded-xl hover:glow-sm transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-section px-4 md:px-0 mb-20"
      >
        <div className="container max-w-container-md">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-clamp-xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-clamp-md text-gray-400 mb-12">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <div className="glass-md p-12 rounded-2xl space-y-6">
              <a
                href="mailto:hello@example.com"
                className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send me an email
              </a>
              <div className="flex justify-center gap-6 pt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}