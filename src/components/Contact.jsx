import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui//input';
import { Textarea } from '@/components/ui//textarea';
import { useToast } from "../hooks/use-toast"
import './Contact.css';
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shanmu547@gmail.com',
      link: 'mailto:shanmu547@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shanmukha',
      link: 'https://linkedin.com/in/shanmukhachandrra',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shanmukha',
      link: 'https://github.com/TMshanmukha',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'VIT Vellore, India',
      link: 'https://maps.app.goo.gl/Z95iEZWMmfo4SJJ78',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
    
    // Mock form submission (frontend only)
    if (formData.name && formData.email && formData.message) {

      try {
        await axios.post("https://protfolio-backend-mylm.onrender.com/", formData);
        toast({
          title: "Email Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      }catch (error) {
        console.log(error);
        alert("Error sending email");
      }
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something impactful together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out to me through any of the following channels. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="contact-info-card">
                    <CardContent className="contact-info-content">
                      <div className="contact-icon">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="contact-label">{info.label}</div>
                        {info.link ? (
                          <a href={info.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                            {info.value}
                          </a>
                        ) : (
                          <div className="contact-value">{info.value}</div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="contact-form-card">
            <CardContent className="contact-form-content">
              <h3 className="contact-form-title">Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="form-textarea"
                  />
                </div>

                <Button type="submit" className="contact-submit-button" size="lg">
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <footer className="footer">
          <p className="footer-text">
            © 2025 TM Shanmukha Chandrra. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;