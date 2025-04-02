import React from 'react';
import foodLogo from '../assets/Food.png';  // Adjust path based on where Logo.js is located

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={foodLogo} alt="React Logo" width={width} />
    </div>
  );
}

export default Logo;
