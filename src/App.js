import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Chat from "./components/Chat/Chat";
import Home from "./pages/home";
import Answer from "./pages/answertamil";
import AnswerEnglish from "./pages/answerenglish";
import FormAnswer from "./pages/formanswer";
import { useState } from "react";
import { UserContext } from "./context/createcontext";
function App() {
  const [language, setLanguage] = useState("Tamil");
  const languageChanger = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <UserContext.Provider
      value={{ lang: language, langChanger: languageChanger }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Chat />} />
            <Route path="/askquery" element={<Chat />} />
            <Route path="/answertamil" element={<Answer />} />
            <Route path="/answerenglish" element={<AnswerEnglish />} />
            <Route path="/answerform" element={<FormAnswer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
