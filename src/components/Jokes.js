import React from "react";

import {useState} from 'react';

 const Jokes = (props) => {
    const [isActive, setIsActive] = useState(false);
  
    const check = () => {
      // https://bobbyhadz.com/blog/react-change-style-on-click
      setIsActive(current => !current);
    };

    return (
        <div className="joke-box">
            <h1 align="center">{props.name}</h1>
            <p className="start">&emsp;{props.start}</p>
            <h3 
                className="off" 
                id="punchline" 
                style={{
                    color: isActive ? '#000' : "#efefef",
                  }}
                onClick={check}
            >&emsp;{props.punchline}</h3>
        </div>
    );
  }

export default Jokes