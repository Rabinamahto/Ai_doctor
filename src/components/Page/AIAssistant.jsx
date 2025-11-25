import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeSymptoms } from '../../utils/aiHelper';

export default function AIAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m your AI Health Assistant. 👋\n\nDescribe your symptoms and I\'ll help you understand what might be causing them and suggest the right specialist.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1000));

    const analysis = analyzeSymptoms(input);
    
    const botResponse = {
      type: 'bot',
      analysis: analysis,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  return (
    <div className="ai-assistant-page">
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-content">
            <div className="bot-avatar">🤖</div>
            <div className="bot-info">
              <h2>AI Health Assistant</h2>
              <p className="status">Online • Ready to help</p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              {msg.type === 'user' ? (
                <div className="message-bubble user-bubble">
                  <p>{msg.text}</p>
                </div>
              ) : msg.analysis ? (
                <div className="message-bubble bot-bubble analysis">
                  <h3 className={msg.analysis.urgent ? 'urgent' : ''}>
                    {msg.analysis.urgent && '⚠️ '}{msg.analysis.condition}
                  </h3>
                  
                  <div className="analysis-section">
                    <h4>💡 Possible Causes:</h4>
                    <ul>
                      {msg.analysis.causes.map((cause, i) => (
                        <li key={i}>{cause}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="analysis-section">
                    <h4>🩹 Basic Tips:</h4>
                    <ul>
                      {msg.analysis.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="analysis-section">
                    <h4>👨‍⚕️ When to See a Doctor:</h4>
                    <p className={msg.analysis.urgent ? 'urgent-text' : ''}>{msg.analysis.whenToSeeDr}</p>
                  </div>

                  <div className="analysis-section">
                    <h4>🏥 Suggested Specialists:</h4>
                    <div className="specialist-tags">
                      {msg.analysis.specialists.map((spec, i) => (
                        <span key={i} className="specialist-tag">{spec}</span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/doctors?specialty=' + msg.analysis.specialists[0])}
                    className="btn-book-doctor"
                  >
                    📅 Book Doctor Now
                  </button>
                </div>
              ) : (
                <div className="message-bubble bot-bubble">
                  <p>{msg.text}</p>
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-bubble bot-bubble typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="chat-input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms..."
            className="chat-input"
            disabled={isTyping}
          />
          <button type="submit" className="send-btn" disabled={isTyping || !input.trim()}>
            ➤
          </button>
        </form>

        <div className="disclaimer">
          <strong>⚠️ Disclaimer:</strong> This is not a medical diagnosis. For accurate diagnosis and treatment, please consult a qualified doctor.
        </div>
      </div>
    </div>
  );
}
