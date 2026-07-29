import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { X } from 'lucide-react';
import './Projects.css';

import adminAuth from "../assets/admin_auth.png";
import adminDashboard from "../assets/admin_dashB.png";
import adminOrders from "../assets/admin_orders.png";
import adminMarketing from "../assets/admin_market.png";
import adminEmail from "../assets/admin_emC.png";
import userFront from "../assets/user_frnt.png";
import userAuth from "../assets/user_auth.png";
import userOrders from "../assets/user_orders.png";
import userTracking from "../assets/user_O2.png";


// Small curved connector arrow (orange), reusable in both directions
const Connector = ({ flip }) => (
  <svg
    className={`connector-svg ${flip ? 'connector-flip' : ''}`}
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
  >
    <path
      d="M5 5 C 5 45, 65 25, 65 65"
      stroke="#ffb400"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#ffb400" />
      </marker>
    </defs>
  </svg>
);

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  // One real project: "Vintage Fashion" — shown as a build roadmap
  const roadmap = [
    {
      id: 1,
      title: 'Admin Login',
      description: 'Secure admin portal with protected route access to the dashboard.',
      image: adminAuth,
    },
    {
      id: 2,
      title: 'Admin Dashboard',
      description: 'Live revenue, orders, customers, and low-stock stats wired to real API data.',
      image: adminDashboard,
    },
    {
      id: 3,
      title: 'Orders Management',
      description: 'Full order lifecycle with filtering, tracking, and payment status.',
      image: adminOrders,
    },
    {
      id: 4,
      title: 'Marketing & Homepage',
      description: 'Editable promotional cards, banners, and homepage sections.',
      image:adminMarketing,
    },
    {
      id: 5,
      title: 'Email Center',
      description: 'Transactional and marketing emails sent via Resend, with sent history.',
      image: adminEmail,
    },
    {
      id: 6,
      title: 'Storefront Home',
      description: 'Customer-facing homepage with hero banner and product highlights.',
      image: userFront,
    },
    {
      id: 7,
      title: 'Customer Auth',
      description: 'Login and signup flow for customers with JWT-based sessions.',
      image: userAuth,
    },
    {
      id: 8,
      title: 'Order Tracking',
      description: 'Customers can view, track, and cancel their own orders.',
      image: userOrders,
    },
    {
      id: 9,
      title: 'Live Delivery Map',
      description: 'Real-time shipment tracking with a map and step-by-step status.',
      image: userTracking,
    },
  ];

  // Row pattern: 2, 3, 2, 2 — with alternating up/middle/down offsets
  const rows = [
    { items: roadmap.slice(0, 2), offsets: ['up', 'down'] },
    { items: roadmap.slice(2, 5), offsets: ['up', 'mid', 'down'] },
    { items: roadmap.slice(5, 7), offsets: ['down', 'up'] },
    { items: roadmap.slice(7, 9), offsets: ['up', 'down'] },
  ];

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="section projects-section">
      <div className="projects-container">
        <div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Vintage Fashion — Build Roadmap</p>
        </div>

        <div className="roadmap">
          {rows.map((row, rowIndex) => {
            const expandedInRow = row.items.find((item) => item.id === expandedId);

            return (
              <React.Fragment key={rowIndex}>
                {expandedInRow ? (
                  // Expanded card takes the full row, medium width, centered
                  <div className="roadmap-row roadmap-row-expanded">
                    <Card className="roadmap-card roadmap-card-expanded">
                      <button
                        className="roadmap-close"
                        onClick={() => handleToggle(expandedInRow.id)}
                        aria-label="Close"
                      >
                        <X size={18} />
                      </button>
                      <div className="roadmap-expanded-image-wrapper">
                        <img
                          src={expandedInRow.image}
                          alt={expandedInRow.title}
                          className="roadmap-expanded-image"
                        />
                      </div>
                      <CardContent className="roadmap-expanded-content">
                        <h3 className="roadmap-title">{expandedInRow.title}</h3>
                        <p className="roadmap-description">{expandedInRow.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div
                    className={`roadmap-row ${
                      row.items.length === 3 ? 'roadmap-row-three' : 'roadmap-row-two'
                    }`}
                  >
                    {row.items.map((item, i) => (
                      <React.Fragment key={item.id}>
                        <div className={`roadmap-item roadmap-offset-${row.offsets[i]}`}>
                          <Card
                            className="roadmap-card"
                            onClick={() => handleToggle(item.id)}
                          >
                            <div className="roadmap-image-wrapper">
                              <img src={item.image} alt={item.title} className="roadmap-image" />
                            </div>
                            <CardContent className="roadmap-content">
                              <h4 className="roadmap-title-sm">{item.title}</h4>
                              <p className="roadmap-description-sm">{item.description}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {i < row.items.length - 1 && (
                          <Connector flip={i % 2 === 1} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {rowIndex < rows.length - 1 && !expandedInRow && (
                  <div className="roadmap-row-connector">
                    <Connector flip={rowIndex % 2 === 1} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;