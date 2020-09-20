import React from "react";
import BubbleMessage from "../Widgets/BubbleMessage/BubbleMessage";

import "./MessageList.css";

const MessageList = () => {
  return (
    <div className="messageList">
      <BubbleMessage isMe={true} />
      <BubbleMessage isMe={true} />
      <BubbleMessage isMe={false} />
    </div>
  );
};

export default MessageList;
