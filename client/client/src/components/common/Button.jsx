import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button className={`btn ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
