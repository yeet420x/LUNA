import React, { useState, useEffect, useRef } from 'react';
import './styles/ChatInterface.css';

const WEBSOCKET_URL = 'wss://hcycfuvviw7fmk-8000.proxy.runpod.net/ws/chat';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const connectWebSocket = () => {
    try {
      const websocket = new WebSocket(WEBSOCKET_URL);
      
      websocket.onopen = () => {
        console.log('Connected to Luna');
        setIsConnected(true);
      };

      websocket.onclose = () => {
        console.log('Disconnected from Luna');
        setIsConnected(false);
        setTimeout(connectWebSocket, 3000);
      };

      websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      websocket.onmessage = (event) => {
        try {
          const response = JSON.parse(event.data);
          console.log('Received message:', response);
          setMessages(prev => [...prev, { 
            text: response.message || response, 
            sender: 'luna' 
          }]);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      setWs(websocket);
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
    }
  };

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws && input.trim() && isConnected) {
      const message = { message: input.trim() };
      ws.send(JSON.stringify(message));
      setMessages(prev => [...prev, { text: input.trim(), sender: 'user' }]);
      setInput('');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-interface">
      <div className="chat-box">
        <div className="messages-area">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-container">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={isConnected ? "Whisper to LUNA..." : "Connecting..."}
            className="message-input"
            disabled={!isConnected}
          />
          <button 
            className="speak-button" 
            onClick={sendMessage}
            disabled={!isConnected || !input.trim()}
          >
            SPEAK
          </button>
        </div>
      </div>
      <div className="luna-avatar">
        <img src="./images/luna.png" alt="Luna" />
      </div>
    </div>
  );
};

export default ChatInterface; 