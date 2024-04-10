import React, { useState } from 'react';
import './Tooltip.css';

// tooltip component using js
const Tooltip = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <img
      className="tooltip-image"
        src={imageUrl} // to add img in parent's component
        alt="Hover over me"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && (
        <div id="toolTip" style={{ display: 'block' }}>
          Nice to meet you!
        </div>
      )}
    </div>
  );
};

export default Tooltip;
