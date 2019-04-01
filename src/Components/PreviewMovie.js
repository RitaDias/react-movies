import React, { Component } from 'react';
import '../CSS/PreviewMovie.css';

class PreviewMovie extends Component {

    componentDidMount() {
        document.querySelector('.movie-preview-content h1').classList.add("animate")
        document.querySelector('.movie-preview-content .description').classList.add("animate-description")

    }

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
                
                <div className="description">
                    {this.props.movie.overview}
                </div>     
            </div> 
        )
    }
}

export default PreviewMovie;


