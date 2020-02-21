import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import axios from "axios";
import Main from "./components/main_content/main";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [card, setCard] = useState([]);
  //const [character, setChar] = useState("mix");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // https://swapi.co/api/people/

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?format=json`)
      .then(response => {
        setCard(response.data.results);
        //setPets(response.data.message);
      })
      .catch(error => {
        console.log("Sorry no wars", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="charCards">
        {card.map(char => {
          return <Main key={char.name} name={char.name} height={char.height} mass={char.mass} hair_color={char.hair_color} skin_color={char.skin_color} eye_color={char.eye_color} birth_year={char.birth_year} gender={char.gender} />;
        })}
        ;
      </div>
    </div>
  );
};

export default App;
