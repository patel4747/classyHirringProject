import React, { useRef } from "react";
import "./testimonials.css";
import profile from "./profile.png";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonial-section">
      <h2>What our users say</h2>
      <div className="testimonial-container">
        <button className="nav-button left" onClick={() => scroll("left")}>
          ←
        </button>
        <div className="testimonial-wrapper" ref={scrollRef}>
          <div className="testimonial-card">
            <img src={profile} alt="User" className="user-img" />
            <p>
              Create contracts, agreements & forms in seconds using advanced AI
              technology
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-card">
            <img src={profile} alt="User" className="user-img" />
            <p>
              Create contracts, agreements & forms in seconds using advanced AI
              technology
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-card">
            <img src={profile} alt="User" className="user-img" />
            <p>
              Create contracts, agreements & forms in seconds using advanced AI
              technology
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-card">
            <img src={profile} alt="User" className="user-img" />
            <p>
              Create contracts, agreements & forms in seconds using advanced AI
              technology
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
        <button className="nav-button right" onClick={() => scroll("right")}>
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
