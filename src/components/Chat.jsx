import React from "react";

function Chat() {
  return (
    <>
      <div className="flex flex-col w-screen">
        <div className="flex basis-full flex-col self-center items-center justify-center px-2 h-screen">
          {/* Chat messages go here */}
        </div>
        <div className="w-full p-4">
          <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  class="w-full px-0 text-m text-gray-900 bg-white border-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write your prompts here..."
                  required
                ></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:bg-blue-800"
                >
                  Generate
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
