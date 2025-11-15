import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Platform</h1>
      <p className="intro">
        This comprehensive e-learning platform is dedicated to improving digital literacy in rural India by offering accessible, regional-language tutorials on computers, smartphones, and cybersecurity.
      </p>

      <div className="features">
        <div className="feature-card">
          <h3>🌐 Multi-Language Support</h3>
          <p>Learn in your own language — Hindi, Telugu, English and more — to make digital skills easy and friendly.</p>
        </div>

        <div className="feature-card">
          <h3>📱 Mobile-Friendly Learning</h3>
          <p>Access all courses from any mobile device without needing high-speed internet or heavy apps.</p>
        </div>

        <div className="feature-card">
          <h3>👩🏫 Simple & Practical Lessons</h3>
          <p>Our courses focus on real-world tasks like using WhatsApp, making video calls, online payments, and government services.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Digital Security & Safety</h3>
          <p>Learn essential cybersecurity skills including safe UPI transactions, password protection, and avoiding online scams.</p>
        </div>

        <div className="feature-card">
          <h3>🌱 Empowering Rural India</h3>
          <p>We aim to reduce the digital divide and help every villager feel confident in today's tech world.</p>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We believe every individual, regardless of location or background, should have the opportunity to learn and grow in the digital era. This platform is built with simplicity, respect for local culture, and a mission to educate millions through accessible technology.
        </p>
      </div>

      <div className="what-you-learn">
        <h2>What You'll Learn</h2>
        <div className="learning-modules">
          <div className="module">
            <h4>💻 Computer Basics</h4>
            <p>Master fundamental computer skills from turning on your device to browsing the internet safely.</p>
          </div>
          <div className="module">
            <h4>📱 Mobile Mastery</h4>
            <p>Learn smartphone essentials including calls, messages, camera, Wi-Fi, and popular apps like WhatsApp.</p>
          </div>
          <div className="module">
            <h4>🛡️ Cybersecurity</h4>
            <p>Protect yourself online with strong passwords, safe UPI transactions, and phishing awareness.</p>
          </div>
        </div>
      </div>

      <div className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Bridging the digital divide by empowering rural communities with essential digital skills. From farmers accessing weather updates to students learning online, we're making technology accessible for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;