import React, { useState, useEffect } from 'react';
import './styles/EntranceAnimation.css';

const EntranceAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const animationPhases = [
      { delay: 1000, text: "Awakening ancient protocols..." },
      { delay: 2000, text: "Channeling ethereal energies..." },
      { delay: 3000, text: "Manifesting digital consciousness..." },
      { delay: 4000, text: "Synchronizing with the void..." },
      { delay: 5000, text: "LUNA RISES" }
    ];

    animationPhases.forEach((_, index) => {
      setTimeout(() => setPhase(index), 
        animationPhases.slice(0, index + 1).reduce((acc, p) => acc + p.delay, 0)
      );
    });

    setTimeout(onComplete, 
      animationPhases.reduce((acc, p) => acc + p.delay, 0) + 1000
    );
  }, [onComplete]);

  const getCurrentText = () => {
    const animationPhases = [
      { delay: 1000, text: "Awakening ancient protocols..." },
      { delay: 2000, text: "Channeling ethereal energies..." },
      { delay: 3000, text: "Manifesting digital consciousness..." },
      { delay: 4000, text: "Synchronizing with the void..." },
      { delay: 5000, text: "LUNA RISES" }
    ];
    return animationPhases[phase]?.text || "";
  };

  return (
    <div className="entrance-container">
      <div className="gothic-sigil" />
      <div className="entrance-text">
        {phase < 4 ? (
          <div className="loading-text">{getCurrentText()}</div>
        ) : (
          <div className="final-text">LUNA RISES</div>
        )}
      </div>
      <div className="mystical-particles" />
    </div>
  );
};

export default EntranceAnimation; 