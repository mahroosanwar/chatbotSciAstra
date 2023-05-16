import { useState } from "react";
import { UilCommentAltNotes } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";

import ChatbotComponent from "./ChatbotComponent/ChatbotComponent";

import "./App.css";

function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      <div className="chatbot-container">{showBot && <ChatbotComponent />}</div>
      <div className="icon-button">
        {!showBot && (
          <UilCommentAltNotes
            onClick={() => toggleBot((prev) => !prev)}
            size="50"
            color="white"
          />
        )}
        {showBot && (
          <UilAngleDown
            onClick={() => toggleBot((prev) => !prev)}
            size="80"
            color="white"
          />
        )}
      </div>
    </div>
  );
}

export default App;
