import React, { useState } from "react";
import { useContext } from "react";
import "./Input.css";
import { UserContext } from "../../context/createcontext";
import vmsg from "vmsg";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});
const Input = ({ setMessage, sendMessage, message, sendMessage1 }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isRecording, setisRecording] = useState(false);
  const [recordings, setrecordings] = useState();
  const [blobUse, setblob] = useState();
  const user = useContext(UserContext);
  console.log(user);
  const record = async () => {
    setisLoading(true);
    if (isRecording) {
      const blob = await recorder.stopRecording();
      setblob(blob);
      setisLoading(true);
      setisRecording(false);
      setrecordings(URL.createObjectURL(blob));
      const url = URL.createObjectURL(blob);
      console.log(blobUse);
      console.log(url);
      const formData = new FormData();
      formData.append("fileUrl", blob, "audio.webm");
      formData.append("lang", user.lang);
      // formData.append("Fileurl", blobUse);
      console.log("FILE url is print");
      console.log(formData);
      // console.log(formData.get("fileUrl"));
      const request_Data = {
        // blob: blob,
        // audioData: url,
        text: "mpeg",
      };
      console.log(request_Data);
      // await fetch("http://localhost:8080/post/upload", {
      //   method: "POST",
      //   headers: { "Content-Type": "multipart/form-data" },
      //   body: formData,
      // }).then((res) => {
      //   console.log(res);
      // });
      axios
        .post("http://localhost:8080/post/upload", formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          console.log(response.data["question"]);
          sendMessage1(response.data["question"]);
        })
        .catch((error) => {
          console.log(error);
        });
      //new
      setisLoading(false);
      console.log("Updated");
      const tmp = new Audio(url);
      // tmp.play();
      // await fetch("http://localhost:8080/read/upload", {
      //   method: "POST",
      //   headers: { "Content-Type": "audio/mpeg" },
      //   body: tmp,
      // }).then((res) => {
      //   console.log(res);
      // });
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        setisLoading(false);
        setisRecording(true);
      } catch (e) {
        console.error(e);
        setisLoading(false);
      }
    }
  };
  let placeholder = "Type Query here";
  if (user.lang == "Tamil") {
    placeholder = "கேள்வியை இங்கே உள்ளிடவும்";
  }
  let buttonText = "Send";
  if (user.lang == "Tamil") {
    buttonText = "பதில்";
  }
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />

      <input
        type="submit"
        className="sendButton"
        onClick={(e) => sendMessage(e)}
        value={buttonText}
      />
      {user.lang == "English" && (
        <button disabled={isLoading} onClick={record} className="sendButton">
          {isRecording ? "Stop" : "Record"}
        </button>
      )}
      {user.lang == "Tamil" && (
        <button disabled={isLoading} onClick={record} className="sendButton">
          {isRecording ? "நிறுத்து" : "பேசு"}
        </button>
      )}
      <div></div>
    </form>
  );
};

export default Input;
