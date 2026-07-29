import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import './Skills.css';

const Skills = () => {
  const education = {
    degree: 'B.Tech in Electrical and Computer Science Engineering (ECSE)',
    institution: 'VIT Vellore',
    cgpa: '8.91',
  };

  const skillGroups = [
    { category: 'Languages', items: ['Java', 'JavaScript', 'SQL', 'C'] },
    { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js'] },
    { category: 'Database', items: ['MySQL', 'TiDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'] },
  ];

  const otherSkills = [
    'Database Design',
    'REST API Development',
    'Responsive UI',
    'Authentication Systems',
    'Git Version Control',
    'Problem Solving',
    'Debugging',
    'Full Stack Development',
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
                <p className="education-year">CGPA: {education.cgpa}</p>
              </div>
            </CardContent>
          </Card>

          <div className="skills-grid">
            <div>
              <h3 className="skills-category-title">Technical Skills</h3>
              {skillGroups.map((group, index) => (
                <div key={index} className="skill-group">
                  <p className="skill-group-title">{group.category}</p>
                  <div className="skill-badges">
                    {group.items.map((item, i) => (
                      <div key={i} className="skill-badge">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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