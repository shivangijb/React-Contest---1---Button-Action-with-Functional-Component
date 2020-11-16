import React, {Component, useState} from "react";
import "./../styles/App.css";

export default function App() {
  let [message , setMessage] = React.useState(false);
  const handleClick = () => {
    message = true;
    setMessage(message);
  };

  if(message){
    
    return (
      <div className="main">
        // Do not alter the main div
        <button id="click" onClick={handleClick}></button>
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      </div>
    );
  }
  return (
    <div className="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}></button>
    </div>
  );
};