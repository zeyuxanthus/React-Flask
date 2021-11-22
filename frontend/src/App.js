import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  //Array desctructuring
  //1st element, type string. Word is part of the state of app component
  //When we want to update word, we need to pass new value to setWord function to update
  //2ns element, type function, used to update the value of variable word
  const [word, setWord] = useState(""); //'' initial value
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  //Called in real time when search button is pressed
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value); //word
    fetch(
      `https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  console.log(word);

  return (
    //title, word etc are properties of the respective components(Header,Search)
    <div className="App">
      <Header title="MTM Portal" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
