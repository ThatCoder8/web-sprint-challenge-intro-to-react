import React, { useState } from 'react';


function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

 // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className={`character-name ${showHomeworld ? 'active' : ''}`} >
        {character.name}
      </h3>

      {showHomeworld && (
        <p className="character-planet">
          Planet: {character.homeworld}
          {/* Add other character details as needed */}
        </p>
      )}
    </div>
  );
}

export default Character;
