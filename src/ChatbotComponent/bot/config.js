import { createChatBotMessage } from "react-chatbot-kit";
import NavigateToWeb from "../NavigateToWeb/NavigateToWeb";

const botName = "Chatbot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm SciAstra ${botName}`, {
      widget: "navigateOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "navigateOptions",
      widgetFunc: () => <NavigateToWeb />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
