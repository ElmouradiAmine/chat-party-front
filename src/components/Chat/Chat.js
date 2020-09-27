import React, { useState, useEffect } from "react";
import Spinner from "../Widgets/Spinner/Spinner";

import Button from "../Widgets/Button/Button";
import HeaderChat from "./HeaderChat";
import Compose from "./Compose";
import MessageList from "./MessageList";

import "./Chat.css";

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://chat-app-backend-2020.herokuapp.com/";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [currentTypedMessage, setCurrentTypedMessage] = useState("");
  const [socket, setSocket] = useState(null);

  const [stranger, setStranger] = useState(null);

  const [isWaiting, setIsWaiting] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {
      query: {
        username: user.username,
        gender: user.gender,
      },
    }).on("connect", () => {
      setSocket(socket);
    });

    socket.on("join", (stranger) => {
      setStranger(stranger);
      
      setIsWaiting(false);
      setMessages((messagesList) => [
        ...messagesList,
        {
          isMe: 'admin',
          message: `${stranger.username} joined the chat !`,
        },
      ]);
    });



    socket.on("message", (data) => {
      setMessages((messagesList) => [
        ...messagesList,
        {
          isMe: data.id === socket.id,
          message: data.message,
          createdAt: data.createdAt,
        },
      ]);
    });

    socket.on("leave", (stranger) => {
      setIsStopped(true);
      setStranger(null)
      setMessages((messagesList) => [
        ...messagesList,
        {
          isMe: 'admin',
          message: `The stranger left the chat !`,
        },
      ]);
    });
    // eslint-disable-next-line
  }, []);

  const sendMessage = () => {
    if (currentTypedMessage !== "") {
      socket.emit("sendMessage", currentTypedMessage, (error) => {
        if (error) {
          return console.log(error);
        }
        setCurrentTypedMessage("");
      });
    }
  };

  const nextChat = () => {
    if (!isWaiting && isStopped) {
      socket.emit("next");
      setIsStopped(false);
      setIsWaiting(true);
      setMessages([]);
    }
  }

  const stopChat = () => {
    if (!isWaiting && !isStopped) {
      socket.emit("stop");
      setIsStopped(true);
      // setMessages([]);
    }
  }


  return (
    <div className="chat">
      <HeaderChat user={user} stranger={stranger} />
      {/* messages */}
      {isWaiting ? (
        <div className="chat__spinner">
         <Spinner/>
        </div>
      ) : (
        <MessageList messages={messages} />
      )}

      {/* Compose */}
      <Compose
        className="chat__compose"
        currentTypedMessage={currentTypedMessage}
        setCurrentTypedMessage={setCurrentTypedMessage}
        sendMessage={sendMessage}
      />
      {/* Send */}
      {!isWaiting ?  (isStopped ? <Button className="chat__button-next" label="next" onClick={()=> {
        nextChat();
      }}/> : <Button className="chat__button-stop" label="stop" onClick={() => stopChat()}/>) : <Button className="chat__button-wait" label="wait" /> }
     
      <Button
        className="chat__button-send"
        label="send"
        onClick={() => {
          if (!isStopped && !isWaiting){
            sendMessage();
          }
        }}
      />

      {/* Stop */}
    </div>
  );
};

export default Chat;
