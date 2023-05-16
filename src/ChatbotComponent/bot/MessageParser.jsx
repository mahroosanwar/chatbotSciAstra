import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowercaseMessage = message.toLowerCase();
    if (
      lowercaseMessage.includes("hi") ||
      lowercaseMessage.includes("hello") ||
      lowercaseMessage.includes("hey")
    ) {
      actions.handleHello();
    }

    if (
      lowercaseMessage.includes("home") ||
      lowercaseMessage.includes("courses") ||
      lowercaseMessage.includes("selections") ||
      lowercaseMessage.includes("blog") ||
      lowercaseMessage.includes("materials") ||
      lowercaseMessage.includes("contact") ||
      lowercaseMessage.includes("login") ||
      lowercaseMessage.includes("signup")
    ) {
      actions.handleNavigation();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
