import React from "react";

function Chat() {
  return (
    <div className="flex basis-full flex-col self-center items-center justify-center px-2 h-screen">
      <h1 className="text-2xl smd:text-4xl xl:text-4xl font-bold mb-1 py-1 smd:mb-2 text-center text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text">
        Start making your prompts!
      </h1>
      <h3 className="text-normal text-base text-center">
        Your personalized AI chatbot
      </h3>
    </div>
  );
}

export default Chat;
