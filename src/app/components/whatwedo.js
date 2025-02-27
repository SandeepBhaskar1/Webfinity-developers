"use client";

import React, { useState, useEffect, useRef } from "react";

const WhatWeDo = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isListVisible, setIsListVisible] = useState(false);
  const listRef = useRef(null);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        listRef.current.classList.add("slide-in")

        const listItems = listRef.current.querySelectorAll("li");
        listItems.forEach((li, index) => {
          setTimeout(() => {
            li.classList.add("animate-slide-up"); 
          }, index * 100);
        });
      } else {
        listRef.current.classList.remove("slide-in")

        const listItems = listRef.current.querySelectorAll("li")
        listItems.forEach((li) =>{
            li.classList.remove("animate-slide-up")
        })
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3,
    });

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const descriptions = [
    {
      title: "Custom Website Development",
      description: "We build custom websites tailored to your business needs.",
      buttonText: "Learn More",
      link: "/services/custom-website-development",
    },
    {
      title: "React Website Development",
      description: "Develop dynamic, high-performance websites with React.",
      buttonText: "Learn More",
      link: "/services/react-development",
    },
    {
      title: "E-commerce Solutions",
      description: "Create scalable and secure online stores with e-commerce solutions.",
      buttonText: "Learn More",
      link: "/services/e-commerce",
    },
    {
      title: "Digital Marketing Solutions",
      description: "Promote your business with advanced digital marketing strategies.",
      buttonText: "Learn More",
      link: "/services/digital-marketing",
    },
    {
      title: "Google Business Profile Optimization",
      description: "Optimize your Google Business Profile for maximum visibility.",
      buttonText: "Learn More",
      link: "/services/google-business-optimization",
    },
    {
      title: "Website Maintenance & Support",
      description: "Ensure your website runs smoothly with continuous support.",
      buttonText: "Learn More",
      link: "/services/website-maintenance",
    },
    {
      title: "Website Analytics & Reporting",
      description: "Track and analyze your website performance to make informed decisions.",
      buttonText: "Learn More",
      link: "/services/website-analytics",
    },
    {
      title: "API & Third-Party Integrations",
      description: "Integrate third-party APIs to enhance your website functionality.",
      buttonText: "Learn More",
      link: "/services/api-integrations",
    },
  ];

  return (
    <div className="what-we-do">
      <div
        className={`service-list`}
        ref={listRef}
      >
        <h1>What We Do</h1>
        <ul>
          {descriptions.map((service, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`service-item`}
            >
              <div
                className={`service-icon ${
                  activeItem === index ? "active" : ""
                }`}
              />
              <span>{service.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-description">
        <div className="description-box">
          <h3>{descriptions[activeItem].title}</h3>
          <p>{descriptions[activeItem].description}</p>
          <a href={descriptions[activeItem].link}>
            <button>{descriptions[activeItem].buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;