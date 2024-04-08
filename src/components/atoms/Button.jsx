import React from 'react';

// using Tailwind
// we can change this button's design in parents components
const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;