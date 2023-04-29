import "./home.css";
import "./answer.css";
import { Link } from "react-router-dom";
import InfoBar from "../components/InfoBar/InfoBar";
import React, { useContext, useEffect, useState } from "react";
import "./answerenglish.scss";
import FormAnswer from "./formanswer";
import { UserContext } from "../context/createcontext";

const AnswerEnglish = () => {
  // let list = [
  //   "Explain Stomatal transpiration",
  //   "Where does Thigmotropism occur",
  //   "Where does Hydrotropism occur",
  //   "What is Newton's Second Law",
  //   "Define Newton's third Law with example",
  // ];
  // console.log(list.length);
  const [questionList, SetQuestionList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/read/qenglish")
      .then((res) => res.json())
      .then((json) => {
        console.log("Response" + json.tamilResponse);
        for (let i = 0; i < json.details.length; i++) {
          SetQuestionList((oldArray) => [
            ...oldArray,
            json.details[i].question,
          ]);
        }
      });
  }, []);
  const user = useContext(UserContext);
  console.log(user);
  const questionSelected1 = false;
  const questionSelected = true;
  let buttonText = "    Tamil        Query   ";
  if (user.lang == "Tamil") {
    buttonText = "தமிழ் கேள்விகள்";
  }
  return (
    <div className="outerContainer3">
      <div className="container3">
        <div className="tamilcontainer">
          <div className="tamilheader">
            {/* todo change here for tamil */}
            {user.lang == "English" && (
              <InfoBar title="English Queries"></InfoBar>
            )}
            {user.lang == "Tamil" && (
              <InfoBar title="ஆங்கிலம் கேள்விகள்"></InfoBar>
            )}
            <Link to={"/answertamil"}>
              <button className="button3">{buttonText}</button>
            </Link>
          </div>

          {questionSelected &&
            questionList.map((e) => (
              <Link
                to={"/answerform"}
                state={{ question: e, screen: "english" }}
              >
                <div className="innercontainer">
                  <h1>{e}</h1>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerEnglish;
