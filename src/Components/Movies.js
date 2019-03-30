import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import '../Movies.css';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: null,
            fullScreen: false
        }

        this.toggleFullScreen = this.toggleFullScreen.bind(this);
    }

    toggleFullScreen(movieID) {
        this.setState(prevState => ({
            currentMovie: movieID,
            fullScreen: !prevState.fullScreen
        }));
      };

    render() {
        return (
            <div className={"gallery " + (this.state.fullScreen ? "prevent-scroll" : "")}>
                {
                    this.props.movies.map((movie => 
                        
                        <Flipper key={movie.id} flipKey={this.state.fullScreen}
                            className={(this.state.fullScreen && this.state.currentMovie === movie.id) ? "full-screen-square" : ""}>
                            <Flipped flipId="square">
                                <div>
                                <img 
                                    key={movie.id}
                                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} 
                                    onClick={() => this.toggleFullScreen(movie.id)}
                                    className="movie-poster"
                                    ></img> 
                                    
                                {this.state.fullScreen && this.state.currentMovie === movie.id ?
                                    
                                        movie.title
                                    : null }
                                </div>
                            </Flipped>
                        </Flipper>
                    ))
                }
            </div>
        )
    }

};

export default Movies;