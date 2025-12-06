import React, { useState } from "react";;
import Card from "./components/Card";
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState([])
  const consultarPeliculas = async () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPeliculas(data.results);

    } catch (error) {
      console.error("Error al Obtener Peliculas", error);
    }
  }

  return (
    <div className="App">
      <h1 className="titulo">Consulta de peliculas a la API de The Movie DataBase</h1>
      <button onClick={consultarPeliculas}>Consultar</button>
      <div className="results">
        {peliculas.map((res, idx) => (
          <Card key={idx} title={res.original_title} image={`https://image.tmdb.org/t/p/w300${res.poster_path}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
