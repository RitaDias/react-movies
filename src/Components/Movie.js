import React, { Component } from 'react';
import '../CSS/Movie.css';

class Movie extends Component {

    render() {
        let show = this.props.fullScreen && this.props.current === this.props.movie.id;

        return (
            <img 
            src={"https://image.tmdb.org/t/p/w500/" + (this.props.movie.poster_path)} 
            className="movie-poster"
            ></img>    
        )
    }
}

export default Movie;


