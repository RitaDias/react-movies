import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Movie from './Movie';
import PreviewMovie from './PreviewMovie';
import '../CSS/Movies.css';

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
                            className={this.state.fullScreen && this.state.currentMovie === movie.id ? "movie-preview" : ""}>
                            <Flipped flipId="square">
                            <div onClick={() => this.toggleFullScreen(movie.id)}>
                                {this.state.fullScreen && this.state.currentMovie === movie.id ? <PreviewMovie movie={movie} /> : <Movie movie={movie} />}
                            </div>
                            </Flipped>
                        </Flipper>
                    ))
                }
            
            <div className={"overlay" + (this.state.fullScreen ? " active" : "")} 
                onClick={this.toggleFullScreen}
            />
            </div>
        )
    }

};

export default Movies;