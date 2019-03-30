import React, { Component } from 'react';
import '../Movies.css';

class Movies extends Component {

    render() {
        return (
            <div className="gallery">
                {
                    this.props.movies.map((movie => 
                    <img 
                        key={movie.id}
                        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} 
                        className="movie-poster"></img> 
                    ))
                }
            </div>
        )
    }

};

export default Movies;