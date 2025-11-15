import React, { useState, useEffect } from "react";
import "./Home.css";

const quotes = [
  "“Digital literacy is the gateway to opportunity.”",
  "“Empower a village, one byte at a time.”",
  "“Knowledge is power — teach tech.”",
  "“Tech education bridges the digital divide.”",
];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Digital Literacy Platform</h1>
        <p>Empowering rural communities with essential digital skills</p>

        <div className="quote-slider">
          <p>"{quotes[quoteIndex]}"</p>
        </div>

        <a href="/courses" className="explore-btn">
          Explore Courses
        </a>
      </div>
      
    </div>
    
  );
};

export default Home;
