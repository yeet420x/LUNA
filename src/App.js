import React, { useState } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import EntranceAnimation from './components/EntranceAnimation';
import backgroundImage from './images/gothic-bg.jpg';
import CustomCursor from './components/CustomCursor';
import AtmosphericBackground from './components/AtmosphericBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <AtmosphericBackground />
      {isLoading ? (
        <EntranceAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <header className="App-header">
            <h1>LUNA AI</h1>
            <div className="header-links">
              <a 
                href="https://x.com/LunAIonSOL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  style={{ fill: 'white' }}
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://dexscreener.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                <img src="/images/dex.png" alt="DexScreener" />
              </a>
              
              <a 
                href="gitbook.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                
                <img src="/images/git.svg" alt="Whitepaper" />
              </a>
              
            </div>
          </header>
          <main>
            <ChatInterface />
          </main>
          <CustomCursor />
        </>
      )}
    </div>
  );
}

export default App; 