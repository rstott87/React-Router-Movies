import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
         setMovieList(response.data.map(movies=>movies));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  return (
    <div>
      <Movie/>
      <SavedList list={[ /* This is stretch */]} />
      <Link to="/">Link To Movie List</Link>
      
      <Route path="/">
        <MovieList movies={movieList}/> 
      </Route>
      
      <Route path="/movies/:id"> 
        <Movie id={null}/>
      </Route>
    </div>   
  );
}

/*<MovieList movies={movieList}/>*/
/*<Route path="/" component={MovieList}/>*/


/**      <Route path="/" render={() =>  
        <MovieList movies={movieList}> 
          <Link path="/movies/"></Link>
        </MovieList> */