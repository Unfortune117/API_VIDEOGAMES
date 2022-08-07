import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Games } from "./components/Games";
import { Pagination } from "./components/Pagination";

function App() {
  const [games, setGames] = useState([]);

  const initialUrl = "/games";

  const fetchGames = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setGames(data)) //data.results -- NO FUNCTION IN HOOKS
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchGames(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="FREE VIDEOGAMES APP"></Navbar>

      <div className="container">
        <Pagination></Pagination>
        <Games games={games}></Games>
      </div>
    </>
  );
}

export default App;
