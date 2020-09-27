import React from 'react';

import './Compose.css';

const Compose = ({
  className,
  setCurrentTypedMessage,
  currentTypedMessage,
  sendMessage,
}) => (
  <input
    className={`compose ${className || ''}`}
    placeholder="Your message"
    value={currentTypedMessage}
    onChange={(e) => {
      setCurrentTypedMessage(e.target.value);
    }}
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    }}
  />
);

export default Compose;
