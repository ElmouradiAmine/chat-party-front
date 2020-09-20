import React from "react";

import "./BubbleMessage.css";

const BubbleMessage = ({ isMe }) => {
  return (
    <div class="msg">
      <div class={"bubble " + (!isMe || "altfollow")}>
        <div class="txt">
          <span class="timestamp">10:22 pm</span>
          <p class={"message " + (!isMe || "follow")}>
            Nice... this will work great for my new project.
          </p>
        </div>
        <div class={"bubble-arrow " + (!isMe || "alt")}></div>
      </div>
    </div>
  );
};

export default BubbleMessage;
