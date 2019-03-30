import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';

import Movies from './Components/Movies';

import './App.css';

const API = "https://api.themoviedb.org/3/discover/movie?api_key=b0b656a319bafe363cf4bcabf6fbd0bd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          isLoading: false,
        })
      }
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div className="App">
        { this.state.isLoading ? 
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={this.state.isLoading}
          /> : 
          <Movies movies={this.state.movies} />
        }
      </div>
    );
  }
}

export default App;
