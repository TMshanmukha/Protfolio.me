import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import photo from "../assets/photo.jpeg";
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">Hi There! I'm TM Shanmukha chandrra</h1>
          <h2 className="hero-title">Full Stack Developer & Problem Solver</h2>
          <p className="hero-description">
            Passionate about backend development, DSA, and building scalable real-world applications. 
            Currently pursuing B.Tech in Electrical and Computer Science at VIT Vellore.
          </p>
          <Button 
            onClick={scrollToAbout}
            className="hero-button"
            size="lg"
          >
            More About Me
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <div className="hero-image-circle"></div>
            <img 
              src={photo}
              alt="Shanmukha" 
              className="hero-image"
            />
          </div>
          <div className="floating-icons">
            <div className="floating-icon" style={{ top: '10%', right: '10%' }}></div>
            <div className="floating-icon" style={{ bottom: '15%', right: '5%' }}></div>
            <div className="floating-icon" style={{ top: '50%', right: '-5%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;