// components/Display.js
import React from 'react';

const Display = ({ input, result, backgroundColor }) => {
  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#ffffff';
  };

  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'right',
        marginBottom: '10px',
        color: contrastColor,
      }}
    >
      <div style={{ fontSize: '20px', marginBottom: '5px' }}>{input}</div>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{result}</div>
    </div>
  );
};

export default Display;
