import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import './Skills.css';

const Skills = () => {
  const education = {
    degree: 'B.Tech in Electrical and Computer Science',
    institution: 'VIT Vellore',
    year: '3rd Year',
  };

  const technicalSkills = [
    { name: 'Java', level: 85 },
    { name: 'SQL', level: 75 },
    { name: 'React', level: 70 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'Git & GitHub', level: 80 },
  ];

  const otherSkills = [
    'Problem Solving',
    'Data Structures & Algorithms',
    'Database Design',
    'API Development',
    'Logic Building',
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">
        <div>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">Education & Skills</p>
        </div>

        <div className="skills-content">
          <Card className="education-card">
            <CardHeader>
              <CardTitle className="education-title">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="education-content">
                <div className="education-badge">Current</div>
                <h3 className="education-degree">{education.degree}</h3>
                <p className="education-institution">{education.institution}</p>
                <p className="education-year">{education.year}</p>
              </div>
            </CardContent>
          </Card>

          <div className="skills-grid">
            <div>
              <h3 className="skills-category-title">Technical Skills</h3>
              <div className="technical-skills-list">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="skills-category-title">Other Competencies</h3>
              <div className="other-skills-grid">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="other-skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;