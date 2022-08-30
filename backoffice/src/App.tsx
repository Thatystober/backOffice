import React, {useState, useEffect} from 'react';
import './server'

export default function App() {
    const[movies, setMovies] = useState([])

    useEffect(() => {
      fetch("/api/movies")
        .then((res) => res.json())
        .then((json) => setMovies(json.movies))
        .catch(err => console.log(err))
    }, [])

    return (
      <></>
    //   <ul>
    //   {movies.map((movie) => (
    //     <li key={movie.id}>{movie.name}</li>
    //   ))}
    // </ul>
    );
  }
