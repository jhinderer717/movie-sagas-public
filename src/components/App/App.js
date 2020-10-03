import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>

        <Router>

          <Route path='/' exact>
            <MovieList />
          </Route>

          <Route path='/detail' exact>
            <Details />
          </Route>

          <Route path='/addMovie' exact>
            <AddMovie />
          </Route>

        </Router>
      </div>
    );
  }
}

export default App;
