import React,{useState,useEffect,useRef} from 'react';
import TestHooks from './TestHooks';
import MovieCard from './components/MovieCard/MovieCard'
import MoviesList from './components/MovieCard/MoviesList'
import SearchBar from './components/MovieCard/SearchBar'
import './App.css'
import {moviesArray} from './assets/mookData'
import AddMovie from './components/MovieCard/AddMovie'
import {Route , Switch} from 'react-router-dom'
import Trailer from './components/MovieCard/Trailer'
import Child from './components/MovieCard/Trailer'

const App = () => {
  
  const [movieList, setMovieList] = useState(moviesArray)
  const [searchWord, setSearchWord] = useState('')
  const [ratingSearch, setRatingSearch] = useState(0)
  const handleSearch = (e) => setSearchWord(e.target.value)
  console.log(`searchWord : ${searchWord}`)
  const addMovie = (newMovie) => {
    setMovieList([...movieList, newMovie])
  }
  return (
    <div className ="App">
      <Switch>
      <Route path="/" exact>
          <SearchBar 
            handleSearch={handleSearch}
            ratingSearch ={ratingSearch}
            setRatingSearch ={setRatingSearch} />
          <MoviesList moviesArry ={
            searchWord ? movieList.filter((movie)=>
            movie.title.toLowerCase().includes(searchWord.toLowerCase()))
            : ratingSearch > 1 ?
            movieList.filter((movie)=> movie.rate >= ratingSearch)
            : movieList
          } />
          <AddMovie handelAdd={addMovie}/>
          </Route>
      

        <Route exact path="/trailer"  >
          <Trailer/>
        </Route>
      </Switch>
      
    </div>
    
  )


}

export default App;
