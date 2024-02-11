// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Character from './Character'

// const urlPlanets = 'http://localhost:9009/api/planets'
// const urlPeople = 'http://localhost:9009/api/people'

// function App() {
//   // ❗ Create state to hold the data from the API
//   // ❗ Create effects to fetch the data and put it in state
//   const [state, setState] = useState([])
//   useEffect(() => {
//     axios.get(urlPeople) 
//     .then((res) => {res.data})
//   })
//   .catch(()=> {})
//   return (
//     <div>
//       <h2>Star Wars Characters</h2>
//       <p>See the README of the project for instructions on completing this challenge</p>
//       {/* ❗ Map over the data in state, rendering a Character at each iteration */}
//     </div>
//   )
// }

// export default App

// // ❗ DO NOT CHANGE THE CODE  BELOW
// if (typeof module !== 'undefined' && module.exports) module.exports = App

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsRes, peopleRes] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople),
        ]);

        const planets = planetsRes.data;
        const people = peopleRes.data;

        // Combine people with their respective homeworlds
        const combinedData = people.map(person => {
          const homeworld = planets.find(planet => planet.id === person.homeworld);
          return {
            ...person,
            homeworld: homeworld ? homeworld.name : 'Unknown',
          };
        });

        // Set the combined data to state
        setCharacters(combinedData);
      } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;