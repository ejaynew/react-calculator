// components/Button.js
import React from 'react';

const Button = ({ children, onClick, style }) => {
  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#ffffff';
  };

  const contrastColor = getContrastColor(style.backgroundColor);

  return (
    <button
      className="button"
      onClick={() => onClick(children)}
      style={{ ...style, color: contrastColor }}
    >
      {children}
    </button>
  );
};

export default Button;
