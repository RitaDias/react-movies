import React from 'react';
import ReactDOM from 'react-dom';

import Movies from '../Components/Movies';
import Movie from '../Components/Movie';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { create } from "react-test-renderer";

const MOVIES = [{
  id: 1,
  title: "Dumbo",
  poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  overview: "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer."
},
{
  id: 2,
  title: "Us",
  poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  overview: "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited."
}];

it('renders when no movies from server', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Movies />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Movies received movies and has Movie component loaded', () => {
    Enzyme.configure({ adapter: new Adapter() });

    let moviesComp = create(<Movies movies={MOVIES} />);
    let moviesInstance = moviesComp.getInstance();

    let movieComp = create(<Movie movie={MOVIES[0]} />);
    let movieInstance = movieComp.getInstance();

    expect(moviesInstance.props.movies[0].title).toBe("Dumbo");
    expect(movieInstance.props.movie.poster_path).toBe("/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg");
  });

  it('Click the div around the movie/preview item', () => {
    Enzyme.configure({ adapter: new Adapter() });

    let moviesComp = create(<Movies movies={MOVIES} />);
    let instance = moviesComp.getInstance();
    expect(instance.props.movies[0].title).toBe("Dumbo");
  });