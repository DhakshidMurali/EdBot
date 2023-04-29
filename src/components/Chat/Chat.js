import React, { useState, useEffect } from "react";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import { UserContext } from "../../context/createcontext";
import { useContext } from "react";
import "./Chat.css";
import LoadingOverlay from "react-loading-overlay";
import styled, { css } from "styled-components";

const Chat = ({ location }) => {
  const [isloading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [questionTyped, setQuestionTyped] = useState("");
  const user = useContext(UserContext);
  console.log(user);
  // nst customOverlay = {
  //   background: "red",
  // };
  // const messages = [
  //   "what is Kirchhoff's Voltage Law",
  //   "ஒரு குளோஸ்டு மின்சுற்றில் உள்ள பல மின் தடைகளில் ஏற்படும் மின்னழுத்த இறக்கங்களின்  (Voltage drop) குறியியற் கூட்டுத் தொகையுடன் அந்த சுற்றில் உள்ள EMF(voltage)களின் குறியியற் கூட்டுத்தொகையை கூட்டினால் பூஜ்யம் கிடைக்கும்.",
  //   "According to Kirchhoff's Voltage Law, The voltage around a loop equals the sum of every voltage drop in the same loop for any closed network and equals zero. Put differently, the algebraic sum of every voltage in the loop has to be equal to zero and this property of Kirchhoff's law is called conservation of energy.",
  //   "Tropism is a unidirectional movement of a whole or part of a plant towards the direction of stimuli.\tTypes of Tropism:\nPhototropism: Movement of a plant part towards light.\neg. shoot of a plant.\nGeotropism: Movement of a plant in response to gravity. \ne.g. root of a plant.\nHydrotropism: Movement of a plant or part of a plant towards water. \ne.g root of a plant.\nThigmotropism: Movement of a plant part due to touch. \ne.g. climbing vines.\nChemotropism: Movement of a part of plant in response to chemicals.\n e.g growth of a pollen tube in response to sugar present on the stigma.Tamil தாவரங்களின் சார்பசை"
  // ];
  const messages_t = ["true", "false", "false"];
  const sendMessage1 = async (question) => {
    setQuestionTyped(question);
    console.log(question);
    setIsLoading(true);
    const request_Data = {
      question: question,
      type: "Text",
    };
    console.log(request_Data);
    await fetch("http://localhost:8080/post/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request_Data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Response" + json.tamilResponse);
        setMessages((oldArray) => [
          ...oldArray,
          question,
          json.tamilResponse,
          json.englishResponse,
        ]);
        console.log(messages);
        setIsLoading(false);
      });
  };
  const sendMessage = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setQuestionTyped(event.target.value);
    console.log(questionTyped);
    setIsLoading(true);
    const request_Data = {
      question: event.target.value,
      type: "Text",
    };
    console.log(request_Data);
    await fetch("http://localhost:8080/post/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request_Data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Response" + json.tamilResponse);
        setMessages((oldArray) => [
          ...oldArray,
          event.target.value,
          json.tamilResponse,
          json.englishResponse,
        ]);
        console.log(messages);
        setIsLoading(false);
      });
  };
  let titlepass = "Query Your Queries Here";
  let loadingText = "Processing Your Query";
  if (user.lang == "Tamil") {
    titlepass = "உங்கள் கேள்விகளை கேட்கவும்";
    loadingText = "உங்கள் கேள்வியைச் செயலாக்குகிறது";
  }
  console.log(messages);
  return (
    <LoadingOverlay active={isloading} spinner text={loadingText}>
      <div className="outerContainer2">
        <div className="container2">
          <InfoBar title={titlepass} />
          <Messages messages={messages} name={messages_t}></Messages>
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            sendMessage1={sendMessage1}
          />
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Chat;
