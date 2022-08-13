import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Games } from "./components/Games";
import { Pagination } from "./components/Pagination";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("")

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
  

  const searcher = (e) =>{
    setSearch(e.target.value)
  }


  //FORM FILTER 1

  /* let results = []
  if(!search){
    results = games
  }else{
    results = games.filter((dato)=>
    dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
  } */

  //FORM FILTER 1

  const results = ! search ? games : games.filter((dato)=> dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <Navbar brand="FREE VIDEOGAMES APP"></Navbar>
      <div className="container">
        <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control" id="searchBar"></input>
        <Games games={results}></Games>
      </div>
    </>
  );
}

export default App;
