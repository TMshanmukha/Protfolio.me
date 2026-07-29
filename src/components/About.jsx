import React from 'react';
import { Code, Database, Layers, Cpu, GitBranch, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import './About.css';

const About = () => {
  const whatIDo = [
    {
      icon: Palette,
      title: 'Frontend Development',
      description: 'React, HTML, CSS, Tailwind CSS'
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Node.js, Express.js'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MySQL, TiDB'
    },
    {
      icon: Cpu,
      title: 'API Development',
      description: 'REST APIs & Integrations'
    },
    {
      icon: Layers,
      title: 'Problem Solving',
      description: 'Debugging & Logic Building'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git & GitHub'
    },
  ];

  const funFacts = [
    { number: '18+', label: 'Technologies' },
    { number: '8+', label: 'Core Skills' },
    { number: '1', label: 'Major Project' },
    { number: '6+', label: 'Dev Tools' },
  ];

  const currentlyExploring = ['AWS', 'Docker', 'System Design', 'Advanced Backend', 'Microservices'];

  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-description">
            <p>
              I'm <strong>TM Shanmukha Chandrra</strong>, a Full Stack Developer pursuing my B.Tech in
              Electrical and Computer Science Engineering (ECSE) at <strong>VIT Vellore</strong>. I build
              scalable full-stack web applications using <strong>React</strong>, <strong>Node.js</strong>,
              <strong> Express.js</strong>, and <strong>MySQL/TiDB</strong>, with a focus on clean
              architecture and reliable APIs.
            </p>
            <p>
              My current focus is <strong>Vintage Fashion</strong>, a full-stack e-commerce platform
              featuring JWT authentication, admin and customer dashboards, Razorpay payments, and
              Cloudinary-powered media handling. Long term, my goal is to become a Software Engineer
              specializing in <strong>Backend Development</strong> and <strong>Cloud Technologies</strong>.
            </p>
          </div>

          <div className="fun-facts-grid">
            {funFacts.map((fact, index) => (
              <div key={index} className="fun-fact-card">
                <div className="fun-fact-number">{fact.number}</div>
                <div className="fun-fact-label">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="what-i-do-section">
          <h3 className="subsection-title">What I Do</h3>
          <div className="what-i-do-grid">
            {whatIDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="what-i-do-card">
                  <CardContent className="what-i-do-content">
                    <div className="what-i-do-icon">
                      <Icon size={32} />
                    </div>
                    <h4 className="what-i-do-title">{item.title}</h4>
                    <p className="what-i-do-description">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="exploring-section">
          <h3 className="subsection-title">Currently Exploring</h3>
          <div className="exploring-badges">
            {currentlyExploring.map((tech, index) => (
              <div key={index} className="exploring-badge">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;