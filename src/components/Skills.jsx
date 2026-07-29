import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import './Skills.css';

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const Skills = () => {
  const education = {
    degree: 'B.Tech in Electrical and Computer Science Engineering (ECSE)',
    institution: 'VIT Vellore',
    cgpa: '8.91',
  };

  const skillGroups = [
    {
      category: 'Languages',
      items: [
        { name: 'Java', icon: `${ICON_BASE}/java/java-original.svg` },
        { name: 'JavaScript', icon: `${ICON_BASE}/javascript/javascript-original.svg` },
        { name: 'SQL', icon: `${ICON_BASE}/mysql/mysql-original.svg` },
        { name: 'C', icon: `${ICON_BASE}/c/c-original.svg` },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: `${ICON_BASE}/react/react-original.svg` },
        { name: 'HTML', icon: `${ICON_BASE}/html5/html5-original.svg` },
        { name: 'CSS', icon: `${ICON_BASE}/css3/css3-original.svg` },
        { name: 'Tailwind CSS', icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
        { name: 'Express.js', icon: `${ICON_BASE}/express/express-original.svg` },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: `${ICON_BASE}/mysql/mysql-original.svg` },
        { name: 'TiDB', icon: `${ICON_BASE}/mysql/mysql-original.svg` },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: `${ICON_BASE}/git/git-original.svg` },
        { name: 'GitHub', icon: `${ICON_BASE}/github/github-original.svg` },
        { name: 'VS Code', icon: `${ICON_BASE}/vscode/vscode-original.svg` },
        { name: 'Postman', icon: `${ICON_BASE}/postman/postman-original.svg` },
        { name: 'Vercel', icon: `${ICON_BASE}/vercel/vercel-original.svg` },
        { name: 'Render', icon: `${ICON_BASE}/render/render-original.svg` },
      ],
    },
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
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="skill-icon"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span>{item.name}</span>
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