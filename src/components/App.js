import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [message , setMessage] = React.useState(false);
  const handleClick = () => {
    setMessage(true);
  };

  
    
    return (
      <div className="main">
        
        <button id="click" onClick={handleClick}></button>
        {message &&  <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
       
      </div>
    
  
    );
};
export default App;