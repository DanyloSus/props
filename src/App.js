import React from 'react';
import Contact from './components/Contact';

export default function App() {
  return (
      <div className="contacts">
        <Contact 
          img="mr-whiskerson.png"
          name="Mr. Whiskerson"
          number="(212) 555-1234"
          mail="mr.whiskaz@catnap.meow"
        />
        <Contact 
          img="fluffykins.png"
          name="Fluffykins"
          number="(212) 555-2345"
          mail="fluff@me.com"
        />
        <Contact 
          img="felix.png"
          name="Felix"
          number="(212) 555-4567"
          mail="thecat@hotmail.com"
        />
        <Contact 
          img="pumpkin.png"
          name="Pumpkin"
          number="(0800) CAT KING"
          mail="pumpkin@scrimba.com"
        />
      </div>
  )
}