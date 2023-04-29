import React, { useRef, useState } from "react";
import "./Message.css";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { ConstructionOutlined, FireExtinguisher } from "@mui/icons-material";
import { UserContext } from "../../../context/createcontext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Message = (props) => {
  console.log(props.i);

  // let isSentByCurrentUser = false;

  // const trimmedName = name.trim().toLowerCase();

  // if (user === trimmedName) {
  //   isSentByCurrentUser = true;
  // }
  // console.log("1" + trimmedName);

  const user = useContext(UserContext);
  var message = "";
  if (user.lang == "Tamil") {
    message = "கேள்வி சேமிப்பில் சேர்க்கப்பட்டது. கருத்துக்கு நன்றி";
  } else {
    message = "Query added to Collection.Thanks for Feedback";
  }
  const showToastMessage = () => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const question = useRef();
  const [audioUrl, setaudioUrl] = useState();
  var audio = new Audio(audioUrl);
  const playAudio = async (event) => {
    console.log(audio.currentTime);
    audio.pause();
    console.log(event.target.name);
    console.log(event.target.value + "event Value");
    const request_Data = {
      audiotext: event.target.name,
      type: "Audio",
    };
    await fetch("http://localhost:8080/post/answerAudioEnglish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request_Data),
    }).then((res) => {
      console.log(res);
    });
    console.log("FINISHED");
    await fetch("http://localhost:8080/post/answerAudioEnglish2")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
    props.changeAudio(event);
  };

  const addQuestion = async (event) => {
    console.log(event.target.name);
    console.log(question.current.className["baseVal"]);
    let question_ = question.current.className["baseVal"];
    question_ = question_.replace(
      "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium",
      ""
    );
    question_ = question_.replace("css-i4bv87-MuiSvgIcon-root", "");
    console.log(event.className);
    console.log(question_);
    const request_Data = {
      question: question_,
    };
    console.log(request_Data);
    if (user.lang == "Tamil") {
      await fetch("http://localhost:8080/post/questionTamil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response " + json.code);
          showToastMessage();
        });
    } else {
      await fetch("http://localhost:8080/post/questionEnglish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response " + json.code);
          showToastMessage();
        });
    }
    console.log("ENTEred ");
  };

  const getAudio = async () => {
    await fetch("http://localhost:8080/post/sendAudio")
      .then((response) => response.blob())
      .then((audioBlob) => {
        setaudioUrl(() => {
          URL.createObjectURL(audioBlob);
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        audio = new Audio(audioUrl);
        console.log(audioUrl);
        audio.play();
        // audio.pause();
      })
      .catch((error) => console.error(error));
  };
  let buttonText = "Audio";
  return props.trimmedName === true ? (
    <div className="messageContainer justifyEnd">
      {/* <p className="sentText pr-10">{props.trimmedName}</p> */}
      <p>sds</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{props.message}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      {/* <audio ref={myRef}  src={audio}></audio> */}
      <button
        className="audioButton"
        name={props.message}
        onClick={props.isSelected ? getAudio : playAudio}
        value={props.index}
      >
        {props.isSelected ? "PLAY" : buttonText}
      </button>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark floatRight">{props.message}</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <p className="sentText">{props.user}</p> */}
      {/* <p className="sentText">Hello</p> */}
      {/* <ReactPlayer url={fileUrl} /> */}
      {props.index % 3 == 0 && (
        // <button
        //   className={props.message}
        //   onClick={addQuestion}
        //   name={props.message}
        // >
        <ThumbDownOffAltIcon
          className={props.message}
          onClick={addQuestion}
          name={props.message}
          ref={question}
        />

        // </button>
      )}
    </div>
  );
};

export default Message;
