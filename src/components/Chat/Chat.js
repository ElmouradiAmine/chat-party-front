import React from "react";

import ButtonCircleGroup from "../Widgets/ButtonCircleGroup/ButtonCircleGroup";
import Button from "../Widgets/Button/Button";
import HeaderChat from "./HeaderChat";
import Compose from "./Compose";
import MessageList from "./MessageList";

import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <ButtonCircleGroup className="chat__button-circle-group" />
      <HeaderChat username="Amine" gender="male" country="ma" />
      {/* messages */}
      <MessageList />

      {/* Compose */}
      <Compose className="chat__compose" />
      {/* Send */}
      <Button className="chat__button-stop" label="stop" />
      <Button className="chat__button-send" label="send" />

      {/* Stop */}
    </div>
  );
};

export default Chat;
