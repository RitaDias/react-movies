import React, { Component } from 'react';
import '../CSS/Movie.css';

class Movie extends Component {

    render() {
        return (
            <img 
            src={"https://image.tmdb.org/t/p/w500" + this.props.movie.poster_path} 
            className="movie-poster"
            ></img>    
        )
    }
}

export default Movie;


