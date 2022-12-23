import React from 'react';
import Jokes from './components/Jokes';

export default function App() {
  return (
      <div className="jokes">
        <Jokes 
          name="Noodles"
          start="What do you call a fake noodle?"
          punchline="An impasta!"
        />
        <Jokes 
          name="Jeff Bezos"
          start="What does Jeff Bezos do before he goes to sleep?"
          punchline="He puts his PJ-Amazon!"
        />
        <Jokes 
          name="Plates"
          start="What did one plate say to the other?"
          punchline="Dinner is on me!"
        />
        <Jokes 
          name="Frogs order"
          start="What do frogs order at fast-food restaurants?"
          punchline="French flies!"
        />
        <Jokes 
          name="Two muffins"
          start="Two muffins are baking in an oven. One of them looks to the other and says, 'Phew, it's getting hot in here!'"
          punchline="The other looks back and says, 'Ack! A talking muffin!'"
        />
      </div>
  )
}