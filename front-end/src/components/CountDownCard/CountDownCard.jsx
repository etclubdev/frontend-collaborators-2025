import React from 'react';

export const CountDownCard = ({ label, number, cardRef }) => {
  return (
    <div className="countdown-card">
      <div className="countdown-card-bg" ref={cardRef}>
        <div className="countdown-card-number" id={label}>
          {number}
        </div>
      </div>
      <div className="countdown-card-label">{label}</div>
    </div>
  );
};