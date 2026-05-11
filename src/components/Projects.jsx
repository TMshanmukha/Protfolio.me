import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'School Management System',
      description: 'A comprehensive school management platform built with Next.js and SQL for managing students, teachers, and administrative tasks.',
      tech: ['Next.js', 'SQL', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzcyNTE5NDYzfDA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },
    /**{
      title: 'Alexa Water Bottle',
      description: 'IoT concept for a smart water bottle integrated with Alexa for hydration tracking and reminders.',
      tech: ['IoT', 'Alexa Skills', 'Python', 'Hardware'],
      image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRldmljZXxlbnwwfHx8fDE3NzI1MTk0Nzl8MA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },*/
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive personal portfolio website showcasing projects and skills with smooth animations.',
      tech: ['React', 'CSS', 'JavaScript', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHxjb2Rpbmd8ZW58MHx8fHwxNzcyNTE5NDYwfDA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },
    /**{
      title: 'DSA Practice Tracker',
      description: 'Application to track Data Structures and Algorithms problem-solving progress across multiple platforms.',
      tech: ['React', 'Node.js', 'MongoDB', 'Charts'],
      image: 'https://images.unsplash.com/photo-1642952469120-eed4b65104be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwyfHxhbGdvcml0aG18ZW58MHx8fHwxNzcyNTE5NDcxfDA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },*/
    {
      title: 'Backend API Project',
      description: 'RESTful API with authentication, CRUD operations, and database integration for scalable applications.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxhcGl8ZW58MHx8fHwxNzcyNTE5NDY3fDA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },
    /**{
      title: 'Database Design Projects',
      description: 'Multiple database schema designs and optimization projects for various real-world scenarios.',
      tech: ['SQL', 'PostgreSQL', 'Schema Design', 'Optimization'],
      image: 'https://images.unsplash.com/photo-1639066648921-82d4500abf1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxkYXRhYmFzZXxlbnwwfHx8fDE3NzI1MTk0NzR8MA&ixlib=rb-4.1.0&q=85',
      liveLink: '#',
      githubLink: '#',
    },*/
  ];

  return (
    <section id="portfolio" className="section projects-section">
      <div className="projects-container">
        <div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">My Recent Work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <Button variant="secondary" size="sm" className="project-button">
                    <ExternalLink size={16} />
                  </Button>
                  <Button variant="secondary" size="sm" className="project-button">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
              <CardContent className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;