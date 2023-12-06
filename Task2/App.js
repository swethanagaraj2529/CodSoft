import './App.css';
import './styles.css';
import brochure from './brochure.pdf';
import image from './image.jpg';
import images from './images.jpg';
import place from './place.jpg';
import work from './work.jpg';

import React, { useState } from 'react';

function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };
    const handleDownload = () => {
      fetch(brochure)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    };
  
  
  return (
    <div className="landing-page">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#Download">Download</a></li>
          <li><a href="#FAQ">FAQ</a></li>
        </ul>
      </nav>
      <section id="home">
        <header>
          <h1>Welcome to our Landing Page</h1>
          <p>Get ready to be amazed!</p>
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
        </header>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We are a team of experts dedicated to providing the best services to our clients. Our mission is to help you achieve your goals and succeed in your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien lacinia nunc, vel ultrices sapien velit vel velit. Sed euismod, diam vel tincidunt bibendum, velit sapien lacinia nunc, vel ultrices sapien velit vel velit.</p>
      </section>
      <section id="service">
        <h2>Our Services</h2>
        <div className="image-section-container">
          <div className="image-section">
            <img src={image} alt="Example Image" />
            <h5>Web Design</h5>
          </div>
          <div className="image-section">
            <img src={images} alt="Example Image" />
            <h5>Web Development</h5>
          </div>
          <div className="image-section">
            <img src={work} alt="Example Image" />
            <h5>SEO</h5>
          </div>
          <div className="image-section">
            <img src={place} alt="Example Image" />
            <h5>Social Media Marketing</h5>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        )}
      </section>
      
      <section id="Download">
        <h2>Discover Our Services</h2>
        <header>
          <h3>Here you can find all the information you need about our company and services.</h3>
          <button onClick={handleDownload}>Download Brochure</button>
        </header>
      </section>
      <section id="FAQ">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>What services do you offer?</summary>
          <p>We offer web design, web development, SEO, and social media marketing services.</p>
        </details>
        <details>
          <summary>How much do your services cost?</summary>
          <p>Our prices vary depending on the scope of the project. Please contact us for a quote.</p>
        </details>
        <details>
          <summary>How long does it take to complete a project?</summary>
          <p>The timeline for a project depends on its complexity and the client's requirements. We will provide an estimated timeline during the consultation phase.</p>
        </details>
        <details>
          <summary>Do you offer ongoing support?</summary>
          <p>Yes, we offer ongoing support and maintenance for all of our projects.</p>
        </details>
      </section>
      <footer>
        <p>&copy; 2023 Landing Page</p>
      </footer>
    </div>
  );
}

export default LandingPage;