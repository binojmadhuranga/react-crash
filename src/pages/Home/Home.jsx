import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for modern web experiences.</p>
      </header>

      <section className="home-content">
        <h2>About Us</h2>
        <p>
          We are passionate developers building responsive and user-friendly websites using the latest technologies.
        </p>
      </section>

      <section className="home-features">
        <h2>Our Features</h2>
        <ul>
          <li>Fast and responsive design</li>
          <li>Modern tech stack (React, Node.js, etc.)</li>
          <li>SEO friendly and accessible</li>
        </ul>
      </section>

      <footer className="home-footer">
        <p>&copy; 2025 All rights reserved. Powered by React.</p>
      </footer>
    </div>
  );
}

export default Home;
