import React, { Component } from 'react';
import '../CSS/PreviewMovie.css';

class PreviewMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        };
    };

    componentDidMount() {
        this.setState({
            animate: true
        });
    }

    render() {
        return (
            <div className="movie-preview-content">
                <img 
                src={"https://image.tmdb.org/t/p/w500/" + (this.props.movie.poster_path)} 
                className="movie-poster"
                ></img> 

                <h1 className={this.state.animate ? " animate" : ""}>
                    {this.props.movie.title}
                </h1>
                
                <div className={"description" + (this.state.animate ? " animate-description" : "")}>
                    {this.props.movie.overview}
                </div>     
            </div> 
        )
    };
}

export default PreviewMovie;


