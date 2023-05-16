import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Chatbot";

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm SciAstra ${botName}`)],
  steps: [
    {
      id: "options",
      options: [
        { value: "courses", label: "Courses", trigger: "courses" },
        { value: "home", label: "Home", trigger: "home" },
        { value: "material", label: "Material", trigger: "material" },
        // Add more options for other pages
      ],
    },
    {
      id: "courses",
      message: "Redirecting you to the courses page...",
      trigger: () => {
        window.location.href = "https://www.sciastra.com/courses/";
        return "courses";
      },
    },
    {
      id: "home",
      message: "Redirecting you to the home page...",
      trigger: () => {
        window.location.href = "https://www.sciastra.com/home/";
        return "home";
      },
    },
    {
      id: "material",
      message: "Redirecting you to the material page...",
      trigger: () => {
        window.location.href = "https://www.sciastra.com/material/";
        return "material";
      },
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
      //   backgroundColor: `linear-gradient(90deg, #234EB0 0%, #B656E2 99.98%)`,
    },
  },
};

export default config;
