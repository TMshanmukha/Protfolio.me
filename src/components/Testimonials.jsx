import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Professor, VIT Vellore',
      content: 'Shanmukha demonstrates exceptional problem-solving skills and a deep understanding of backend systems. His dedication to learning and growth is commendable.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    {
      name: 'Priya Sharma',
      role: 'Team Lead, Tech Projects',
      content: 'Working with Shanmukha on the School Management System was a great experience. He brings innovative solutions and maintains high code quality standards.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      name: 'Arjun Mehta',
      role: 'Project Mentor',
      content: 'Shanmukha\'s ability to grasp complex concepts quickly and apply them effectively is impressive. He has strong fundamentals in DSA and database design.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="testimonials-container">
        <div>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What people say about me</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="testimonial-content">
                <div className="quote-icon">
                  <Quote size={40} />
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;