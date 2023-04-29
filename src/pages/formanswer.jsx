import "./home.css";
import "./answer.css";
import React, { useContext } from "react";
import "./answerenglish.scss";
import { Link, useLocation } from "react-router-dom";
import InfoBar from "../components/InfoBar/InfoBar";
import { UserContext } from "../context/createcontext";
import { useNavigate } from "react-router-dom";
const FormAnswer = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const propsData = location.state.question;
  const propsDataScreen = location.state.screen;
  console.log(propsDataScreen);
  const [form, setForm] = React.useState({
    tag: "",
    PATTERNS: "",
    Response: "",
  });
  const formButtonHandler = async (event) => {
    console.log(form);
    const patternsArray = form.PATTERNS.split(",");
    console.log(patternsArray);
    const resposne_Data = {
      tag: form.tag,
      patterns: patternsArray,
      response: form.Response,
    };
    const delete_Data = {
      question: propsData,
    };
    console.log(resposne_Data);
    if (propsDataScreen == "english") {
      console.log("ENGLOSH");
      await fetch("http://localhost:8080/post/answeritEnglish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resposne_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response" + json.code);
        });
      await fetch("http://localhost:8080/post/deleteitEnglish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(delete_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response" + json.code);
        });
      navigate("/answerenglish");
    }
    if (propsDataScreen == "tamil") {
      await fetch("http://localhost:8080/post/answeritTamil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resposne_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response" + json.code);
        });
      await fetch("http://localhost:8080/post/deleteitTamil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(delete_Data),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response" + json.code);
        });
      navigate("/answertamil");
    }
    // console.log(event.target.tag.value);
    // console.log(event.target.PATTERNS.value);
    // console.log(event.target.Response.value);
  };
  const user = useContext(UserContext);
  console.log(user);
  let tagText = user.lang == "Tamil" ? "ஓம்_விதி" : "Ohm's_Law";
  let buttonText =
    propsDataScreen == "english"
      ? "    Tamil        Query   "
      : "   English Query   ";
  let placeholderQuestion =
    user.lang == "Tamil"
      ? "ஓம் விதி என்றால் என்ன?, ஓமின் விதியை விளக்குங்கள்?"
      : "What is Ohm's Law?, Explain Ohm's Law?";
  let placeholderAnswer =
    user.lang == "Tamil"
      ? "மின்னோட்டமானது மின்னழுத்தத்திற்கு விகிதாசாரமாகவும், எதிர்ப்பிற்கு நேர்மாறான விகிதாசாரமாகவும் இருக்கும் என்று ஒரு சட்டம் கூறுகிறது."
      : "Answer it";
  let buttonTextBottom =
    user.lang == "Tamil" ? "சமர்ப்பிக்கிறேன்" : "Answer it";
  if (user.lang == "Tamil") {
    buttonText =
      propsDataScreen == "english" ? "தமிழ் கேள்விகள்" : "ஆங்கிலம் கேள்விகள";
  }
  const annoyingSubmitButton = () => {
    if (form.password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };
  const handleForm = (e) => {
    setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };
  const [toggleClass, setToggleClass] = React.useState(false);
  return (
    <div className="outerContainer3">
      <div className="container3">
        <div className="tamilcontainer">
          {propsDataScreen == "english" && (
            <div className="tamilheader">
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
          )}
          {propsDataScreen == "tamil" && (
            <div className="tamilheader">
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
          )}
          <div>
            <section className="form-section">
              <div className="question">
                {user.lang == "English" && (
                  <h1 className="heading1">QUESTION</h1>
                )}

                {user.lang == "Tamil" && <h1 className="heading1">கேள்வி</h1>}
                <p>{propsData}</p>
              </div>

              {user.lang == "English" && (
                <h1 className="heading1">ANSWER QUESTION</h1>
              )}

              {user.lang == "Tamil" && (
                <h1 className="heading1">உங்கள் பதிலை கொடுங்கள்</h1>
              )}
              <form
                autoComplete="false"
                // action="https://formspree.io/f/meqvlgqr"
                method="POST"
                onSubmit={formButtonHandler}
              >
                <div className="input-block">
                  {user.lang == "Tamil" && (
                    <label className="label">
                      குறிச்சொல் <span className="requiredLabel">*</span>
                    </label>
                  )}
                  {user.lang == "English" && (
                    <label className="label">
                      TAG <span className="requiredLabel">*</span>
                    </label>
                  )}
                  <textarea
                    rows="3"
                    className={`input ${
                      form.tag.length < 6 ? "wrong-input" : "correct-input"
                    }`}
                    name="tag"
                    value={form.tag}
                    onChange={handleForm}
                    placeholder={tagText}
                    // tabIndex={-1}
                    required
                  />
                </div>
                <div className="input-block">
                  {user.lang == "Tamil" && (
                    <label className="label">
                      வடிவங்கள் <span className="requiredLabel">*</span>
                    </label>
                  )}
                  {user.lang == "English" && (
                    <label className="label">
                      PATTERNS <span className="requiredLabel">*</span>
                    </label>
                  )}
                  <textarea
                    rows="3"
                    className={`input ${
                      form.PATTERNS.length < 6 ? "wrong-input" : "correct-input"
                    }`}
                    name="PATTERNS"
                    value={form.PATTERNS}
                    onChange={handleForm}
                    placeholder={placeholderQuestion}
                    // tabIndex={-1}
                    required
                  />
                </div>
                <div className="input-block">
                  {user.lang == "Tamil" && (
                    <label className="label">
                      பதில் <span className="requiredLabel">*</span>
                    </label>
                  )}
                  {user.lang == "English" && (
                    <label className="label">
                      Response <span className="requiredLabel">*</span>
                    </label>
                  )}
                  <textarea
                    rows="10"
                    className={`input ${
                      form.Response.length < 6 ? "wrong-input" : "correct-input"
                    }`}
                    placeholder={placeholderAnswer}
                    name="Response"
                    value={form.Response}
                    onChange={handleForm}
                    // tabIndex={-1}
                    required
                  />
                </div>
              </form>
            </section>
            <div className="button">
              <button className="submit-button" onClick={formButtonHandler}>
                {buttonTextBottom}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormAnswer;
