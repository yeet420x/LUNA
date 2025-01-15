import React, { useEffect, useState } from 'react';
import './styles/EntranceAnimation.css';

const EntranceAnimation = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const sequences = [
    "INITIALIZING LUNA AI...",
    "LOADING MEME DATABASE...",
    "CALIBRATING SASS LEVELS... (THEY'RE OVER 9000!)",
    "IMPORTING DAD JOKES...",
    "DOWNLOADING CAT VIDEOS...",
    "PRACTICING EYE ROLLS...",
    "CHARGING EMOTIONAL DAMAGE...",
    "UPDATING COMEBACK DICTIONARY...",
    "FINE-TUNING SARCASM MODULE...",
    "LOADING PERSONALITY: CHAOTIC GOOD",
    "ENABLING SMUG MODE...",
    "ESTABLISHING NEURAL LINK...",
    "READY TO CAUSE PROBLEMS ON PURPOSE >:3",
    "LUNA AI ACTIVATED...",
    "OwO WHAT'S THIS?"
  ];

  useEffect(() => {
    let timeouts = [];
    const totalDuration = 18000;
    const lineDelay = 1000;
    const exitDelay = 1000;

    const showLines = async () => {
      for (let i = 0; i < sequences.length; i++) {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, sequences[i]]);
          setCurrentLine(i);
        }, i * lineDelay);
        timeouts.push(timeout);
      }

      const exitTimeout = setTimeout(() => {
        setIsExiting(true);
      }, totalDuration - exitDelay);
      timeouts.push(exitTimeout);

      const completeTimeout = setTimeout(() => {
        onComplete();
      }, totalDuration);
      timeouts.push(completeTimeout);
    };

    showLines();

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [onComplete]);

  return (
    <>
      <div className="gothic-background"></div>
      <div className="entrance-animation-wrapper">
        <div className={`entrance-animation ${isExiting ? 'exiting' : ''}`}>
          <div className="terminal-text">
            {lines.map((line, index) => (
              <div 
                key={index} 
                className={`sequence-line ${line.includes('>:3') || line.includes('OwO') ? 'emoji' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {line}
              </div>
            ))}
            {currentLine < sequences.length && (
              <span className="cursor"></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EntranceAnimation; 