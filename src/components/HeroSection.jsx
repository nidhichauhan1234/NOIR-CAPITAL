import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-bg ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-content-container">
        <h1 className="hero-title">
          Founders of <span className="highlight-gold">Noir Capital</span>
        </h1>
        <p className="hero-subtext">
          It's not just about the numbers, we know what your money needs.
        </p>
        <button className="hero-button">Let's Talk</button>
      </div>
    </section>
  );
};

export default HeroSection;
