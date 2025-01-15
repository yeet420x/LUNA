import React, { useState } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import EntranceAnimation from './components/EntranceAnimation';
import backgroundImage from './images/gothic-bg.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <EntranceAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <header className="App-header">
            <h1>LUNA AI</h1>
            <div className="header-links">
              <a 
                href="https://t.me/YourTelegramGroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                <img src="/images/tg.svg" alt="Telegram" />
              </a>
              <a 
                href="https://dexscreener.com/YourToken" 
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
        </>
      )}
    </div>
  );
}

export default App; 