import React from "react";

function Sidebar() {
  return (
    <div className="flex basis-1/4 flex-col p-2 h-screen bg-gray-900">
      <h3 className="text-2xl smd:text-4xl xl:text-3xl font-semibold mb-1 py-1 smd:mb-2 text-center text-white">
        AI Chatbot
      </h3>
      <div>{/*New chat button */}</div>
      <div>{/*All chats*/}</div>
    </div>
  );
}

export default Sidebar;
