import React from 'react';
import BubbleMessage from '../Widgets/BubbleMessage/BubbleMessage';

import ScrollToBottom from 'react-scroll-to-bottom';

import './MessageList.css';

const MessageList = ({ messages }) => {
  
  return(
  <ScrollToBottom className="messageList" >
    {messages.map(({ isMe, message, createdAt }, index) => (
      isMe === 'admin' ? <p className="admin-message">{message}</p>
        : (
          <BubbleMessage
            key={index}
            isMe={isMe}
            message={message}
            createdAt={createdAt}
          />
        )
    ))}
    <div style={{
      height: "3.6rem"
    }}></div>
  </ScrollToBottom>
)};

export default MessageList;
