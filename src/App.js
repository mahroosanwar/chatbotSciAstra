import { useState } from "react";

import ChatbotComponent from "./ChatbotComponent/ChatbotComponent";

import "./App.css";

function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      {showBot && <ChatbotComponent />}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
    </div>
  );
}

export default App;
