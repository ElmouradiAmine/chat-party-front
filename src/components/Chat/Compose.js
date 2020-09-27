import React, {useState} from 'react';

import './Compose.css';

const Compose = ({
  setUserIsTyping,
  userIsTyping,
  className,
  setCurrentTypedMessage,
  currentTypedMessage,
  sendMessage,
  onChange,
}) => {

  return <input
    className={`compose ${className || ''}`}
    placeholder="Your message"
    value={currentTypedMessage}
    onChange={(e) => {
      setCurrentTypedMessage(e.target.value);
      if (e.target.value !== '' && !userIsTyping) {
        onChange(true);
        setUserIsTyping(true)
      } else if (e.target.value === '') {
        onChange(false);
        setUserIsTyping(false)

      }
    }}
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        onChange(false);
        sendMessage();
        setUserIsTyping(false);
      }
    }}
  />
  };

export default Compose;
