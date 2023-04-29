import "./home.css";
import "./answer.css";
import { Link } from "react-router-dom";
import InfoBar from "../components/InfoBar/InfoBar";
import FormAnswer from "./formanswer";
import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../context/createcontext";
const Answer = () => {
  const [questionList, SetQuestionList] = useState([]);
  // let list = [
  //   "தாவரங்களின் சார்பசை என்றால் என்ன",
  //   "நீராவிப்போக்கு எப்படி  நடக்கிறது",
  //   "நேர் ஒளிச் சார்பசைவு என்றால் என்ன",
  //   "நியூட்டனின் இரண்டாம் இயக்க விதி என்றால் என்ன",
  //   "அலகு விளக்குக",
  // ];
  useEffect(() => {
    fetch("http://localhost:8080/read/qtamil")
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
  const questionSelected1 = false;
  const questionSelected = true;
  const user = useContext(UserContext);
  console.log(user);
  let buttonText = "   English Query   ";
  if (user.lang == "Tamil") {
    buttonText = "ஆங்கிலம் கேள்விகள";
  }
  return (
    <div className="outerContainer3">
      <div className="container3">
        <div className="tamilcontainer">
          <div className="tamilheader">
            {/* todo tamil */}
            {user.lang == "English" && (
              <InfoBar title="Tamil Queries"></InfoBar>
            )}
            {user.lang == "Tamil" && (
              <InfoBar title="தமிழ் கேள்விகள்"></InfoBar>
            )}
            <Link to={"/answerenglish"}>
              <button className="button3">{buttonText}</button>
            </Link>
          </div>

          {questionSelected &&
            questionList.map((e) => (
              <Link
                to={"/answerform"}
                state={{ question: e, screen: "tamil" }}
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

export default Answer;
