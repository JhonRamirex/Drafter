import React from 'react';
import './StarsBackground.css';

interface StarsBackgroundProps {
  color?: string;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ color = '#FFF' }) => {
  return (
    <div className="stars-background-container" style={{ ['--star-color' as any]: color }}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <br />
      </div>
    </div>
  );
};

export default StarsBackground; 