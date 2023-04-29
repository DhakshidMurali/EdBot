import React, { useState } from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = (props) => {
  const [audioRequest, setaudioRequest] = useState();
  function selectedAudioText(event) {
    setaudioRequest(event.target.value);
  }
  return (
    <ScrollToBottom className="messages">
      {props.messages.map((message, i) => (
        <div key={i} className="Container">
          <Message
            message={message}
            user="CHATBOT"
            trimmedName={props.name[i]}
            changeAudio={selectedAudioText}
            isSelected={audioRequest == i}
            index={i}
          />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
