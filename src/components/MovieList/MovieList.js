import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import {Link} from 'react-router-dom';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_MOVIE"
        });
    }

    render(){
        //console.log('MovieList props:', this.props.reduxState);
        return(
            <div>
                

                <Link to='addMovie'>Add Movie</Link>
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