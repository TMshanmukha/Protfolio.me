import React from 'react';
import { Code, Database, Layers, Cpu, GitBranch, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import './About.css';

const About = () => {
  const whatIDo = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Java, SQL, APIs'
    },
    {
      icon: Palette,
      title: 'Frontend Development',
      description: 'React, HTML, CSS, JavaScript'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimization & Management'
    },
    {
      icon: Layers,
      title: 'DSA Problem Solving',
      description: 'Algorithms & Data Structures'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git & GitHub'
    },
  ];

  const funFacts = [
    { number: '1+', label: 'Year Coding Experience' },
    { number: '2', label: 'Mern Stack Projects Built' },
    { number: '100+', label: 'DSA Problems Solved' },
    { number: '100%', label: 'Dedication to Learning' },
  ];

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
              I am a motivated engineering student with strong foundations in <strong>Java</strong>, <strong>C/C++</strong>, 
              <strong> SQL</strong>, and <strong>Frontend Development</strong>. I enjoy solving algorithmic problems and 
              designing efficient systems.
            </p>
            <p>
              My goal is to secure a high-impact software engineering role and build scalable backend systems that make 
              a real difference. Currently working on exciting projects including a <strong>School Management System</strong> and intersted 
              to work in an innovative <strong>IoT Websites</strong> concept.
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
      </div>
    </section>
  );
};

export default About;