import React from "react";
import "./Bot.css";

const Bot = () => {
  const showWelcomeMessage = () => {
    alert("Hi! Server Down... Please try again sometimes.");
  };

  return (
    <div className="bot-container">
      <img
        src="../../Assets/bot.png"
        alt="bot"
        className="bot animated"
        onClick={showWelcomeMessage}
      />
    </div>
  );
};

export default Bot;
