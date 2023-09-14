import React from "react";

function Sidebar() {
  return (
    <div className="flex items-center basis-1/4 flex-col p-2 h-screen bg-gray-900 md:min-w-[20rem]">
      <div className="flex md:flex-col xl:flex-row space-x-2 mb-4">
        <img src="\logo.svg" alt="ayo broken" className=" h-12" />
        <h3 className="text-2xl smd:text-xl xl:text-3xl font-semibold mb-1 py-1 smd:mb-2 text-center text-white">
          AI Chatbot
        </h3>
      </div>

      <div className="w-full">
        <button class="w-full flex justify-center items-center p-0.5 mb-2 mr-2 overflow-hidden text-m font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
          <div>
            <svg
              className="px-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#111827"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <span class="w-full font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            New chat
          </span>
        </button>
      </div>

      <div>{/*All chats*/}</div>
    </div>
  );
}

export default Sidebar;
