import React, { useState, useRef, useEffect } from 'react';
import './Copilot.css';
import { FaRobot, FaTimes, FaPaperPlane, FaLightbulb } from 'react-icons/fa';

const Copilot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I\'m your Digital Literacy Assistant. I can help you with computer and mobile skills, answer questions, or provide learning tips!',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickSuggestions = [
    "How do I connect to Wi-Fi?",
    "What is a computer mouse?",
    "How to make phone calls?",
    "How to create strong passwords?",
    "What is phishing?",
    "How to use UPI safely?",
    "Internet safety tips"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('wifi') || message.includes('internet')) {
      return "To connect to Wi-Fi: 1) Go to Settings, 2) Find Wi-Fi or Network, 3) Select your network, 4) Enter password. Make sure you're close to the router for better signal!";
    }
    
    if (message.includes('mouse') || message.includes('click')) {
      return "A computer mouse helps you navigate: Left-click to select, Right-click for options, Double-click to open files, and scroll wheel to move up/down pages.";
    }
    
    if (message.includes('call') || message.includes('phone')) {
      return "To make calls: 1) Open Phone app, 2) Dial the number or select from contacts, 3) Press the green call button. To answer: swipe or tap the green button.";
    }
    
    if (message.includes('file') || message.includes('folder')) {
      return "File management basics: Files are documents/photos, Folders organize files, Copy/Cut/Paste to move files, Delete sends to trash. Keep files organized in named folders!";
    }
    
    if (message.includes('password') || message.includes('strong password')) {
      return "Strong password tips: 1) Use 12+ characters, 2) Mix letters, numbers & symbols, 3) Avoid personal info, 4) Don't reuse passwords, 5) Consider a password manager. Example: MyDog@2024!";
    }
    
    if (message.includes('phishing') || message.includes('scam') || message.includes('fraud')) {
      return "Phishing protection: 1) Check sender email carefully, 2) Don't click suspicious links, 3) Verify requests through official channels, 4) Look for spelling errors, 5) Never share OTP/PIN with anyone.";
    }
    
    if (message.includes('upi') || message.includes('payment') || message.includes('money transfer')) {
      return "UPI safety: 1) Verify recipient details before sending, 2) Never share UPI PIN, 3) Check transaction history regularly, 4) Use only official apps, 5) Don't send money to unknown numbers.";
    }
    
    if (message.includes('social media') || message.includes('privacy') || message.includes('facebook') || message.includes('whatsapp')) {
      return "Social media safety: 1) Review privacy settings regularly, 2) Don't share personal details publicly, 3) Be careful with friend requests, 4) Think before posting location, 5) Report suspicious accounts.";
    }
    
    if (message.includes('wifi security') || message.includes('public wifi')) {
      return "Public Wi-Fi safety: 1) Avoid banking on public Wi-Fi, 2) Look for 'https://' in websites, 3) Turn off auto-connect, 4) Use your mobile data for sensitive tasks, 5) Forget networks after use.";
    }
    
    if (message.includes('app permission') || message.includes('mobile security')) {
      return "Mobile security: 1) Review app permissions before installing, 2) Keep apps updated, 3) Use screen lock, 4) Enable remote wipe, 5) Download apps only from official stores.";
    }
    
    if (message.includes('safety') || message.includes('secure') || message.includes('cybersecurity')) {
      return "General online safety: 1) Use strong passwords, 2) Don't share personal info, 3) Verify websites before entering details, 4) Keep software updated, 5) Be careful with email links.";
    }
    
    if (message.includes('keyboard') || message.includes('typing')) {
      return "Keyboard basics: Use all fingers, start with home row (ASDF JKL;), practice regularly, don't look at keys while typing. Speed comes with practice!";
    }
    
    if (message.includes('email') || message.includes('message')) {
      return "Email basics: 1) Open email app, 2) Click compose/new, 3) Add recipient, 4) Write subject and message, 5) Click send. Always check recipient before sending!";
    }
    
    if (message.includes('otp') || message.includes('pin') || message.includes('bank')) {
      return "Banking security: 1) Never share OTP/PIN with anyone, 2) Banks never ask for details over phone/SMS, 3) Use official banking apps only, 4) Log out after use, 5) Check statements regularly.";
    }
    
    return "I understand you're asking about digital literacy! I can help with computer basics, mobile skills, and cybersecurity. Try asking about passwords, UPI safety, phishing, or check our video lessons for detailed guidance!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getAIResponse(inputText),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div 
        className={`copilot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot />
        <span className="copilot-tooltip">AI Assistant</span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="copilot-window">
          <div className="copilot-header">
            <div className="copilot-title">
              <FaRobot className="copilot-icon" />
              <span>Digital Literacy Assistant</span>
            </div>
            <button 
              className="copilot-close"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="copilot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="copilot-suggestions">
            <div className="suggestions-header">
              <FaLightbulb /> Quick Help:
            </div>
            <div className="suggestions-list">
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-btn"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="copilot-input">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about digital literacy..."
              rows="2"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="send-btn"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Copilot;