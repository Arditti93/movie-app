// npx create-react-app .
//npx react-app-cleaner
//https://www.omdbapi.com/

import React from "react";
import { useEffect, useState } from "react"; 
import MovieCard from "./componets/MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=7d2e5ef7"

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  useEffect (() =>{
    // searchFilms('Batman')
  },[])

  const searchFilms = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    setMovies(res.Search)
  }

  return (
    <div className="app">
      <h1>My Movie Database</h1>
      <br></br>
      <br></br>
      <div className="search">
        <input
            placeholder='Search for a film'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value) }
        />
        <button 
          onClick={() => searchFilms(searchTerm)}>
          Search
        </button>
      </div>

      { movies?.length > 0
      // if movies length is greater than zero 
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          // if movies length is less than zero
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
};

export default App;
