import React from 'react';

export default function App () {
  const date = new Date ();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12 && hours >= 6) {
    timeOfDay = "morning"
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  }
  else if (hours >= 17 && hours < 22) {
    timeOfDay = "evening"
  }
  else {
    timeOfDay = "night"
  }
  
  return (
    <div>
      <h1>Good {timeOfDay}</h1>
    </div>
  );
}