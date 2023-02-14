import React, { useState } from "react";

const ChatInput = ({handleSend}) => {

  const [userInput, updateInput] = useState("")

  const handleUserInput = (e) => {
    updateInput(e.target.value)
  }

  const handleClick = () => {
    if(!!userInput.trim()) handleSend(userInput)
    updateInput("")
  }


  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-full">
        <input
          className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left"
          id="user-input"
          type="text"
          onChange={handleUserInput}
          value={userInput}
          placeholder="Type here ..." 
        />
      </div>
      <div tabIndex={1} className="w-1/12 h-full flex items-center justify-center ">
        <span onClick={handleClick} className="material-symbols-outlined text-3xl border px-2 bg-emerald-600 cursor-pointer w-full text-center">send</span>
      </div>
    </div>
  );
};

export default ChatInput;
