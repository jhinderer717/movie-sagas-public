import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_MOVIE"
        });
    }

    render(){
        console.log('MovieList props:', this.props.reduxState);
        return(
            <div>
                {this.props.reduxState.map(movie =>
                    <MovieItem key={movie.id} movie={movie}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState: reduxState.movies,
});

export default connect(mapStateToProps)(MovieList);