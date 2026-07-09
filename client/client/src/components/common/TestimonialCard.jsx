import React from 'react';

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="testimonial-card">
      <p>“{quote}”</p>
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
};

export default TestimonialCard;
