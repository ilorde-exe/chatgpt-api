import React, { useState } from "react";
import axios from "axios";
function Chat() {
  const [input, setInput] = useState("");
  const handleSend = async () => {
    console.log(input);
    client
      .post("https://api.openai.com/v1/completions", params)
      .then((result) => {
        console.log(result.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const client = axios.create({
    headers: {
      Authorization:
        "Bearer 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",
    },
  });

  const params = {
    prompt: `${input}`,
    model: "text-davinci-003",
    max_tokens: 100,
    temperature: 0,
  };

  return (
    <>
      <div className="flex flex-col w-screen">
        <div className="flex basis-full flex-col self-center items-center justify-center px-2 h-screen">
          {/* Chat messages go here */}
        </div>
        <div className="w-full p-4">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-0 text-m text-gray-900 bg-white border-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write your prompts here..."
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-blue-800"
                  onClick={handleSend}
                >
                  Generate
                </button>
                <div className="flex pl-0 space-x-1 sm:pl-2"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
