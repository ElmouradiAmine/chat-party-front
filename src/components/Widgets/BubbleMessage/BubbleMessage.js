import React from "react";
import Moment from "moment";

import "./BubbleMessage.css";

const BubbleMessage = ({ isMe, message, createdAt }) => {
  const time = Moment(createdAt).format("kk:mm a");
  return (
    <div className="msg">
      <div className={"bubble " + (!isMe || "altfollow")}>
        <div className="txt">
          <span className="timestamp">{time}</span>
          <p className={"message " + (!isMe || "follow")}>{message}</p>
        </div>
        <div className={"bubble-arrow " + (!isMe || "alt")}></div>
      </div>
    </div>
  );
};

export default BubbleMessage;
