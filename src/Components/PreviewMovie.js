import React, { Component } from 'react';
import '../CSS/PreviewMovie.css';

class PreviewMovie extends Component {

    render() {
        return (
            <div className="movie-preview-content">
                <img 
                src={"https://image.tmdb.org/t/p/w500/" + (this.props.movie.poster_path)} 
                className="movie-poster"
                ></img> 
                
                <h1>
                    {this.props.movie.title}
                </h1>
                <p>
                {this.props.movie.overview}       </p>         
            </div> 
        )
    }
}

export default PreviewMovie;


