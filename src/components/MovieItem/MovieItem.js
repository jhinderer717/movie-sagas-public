import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './MovieItem.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { deepOrange } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';


class MovieItem extends Component {

    movieClick() {
        console.log('movieClick hit, id:', this.props.movie.id);
        this.props.dispatch({
            type: "FETCH_DETAIL",
            payload: this.props.movie.id
        });
        this.props.history.push('/detail');
    }

    sendDetails() {
        this.props.history.push('/detail');
    }

    render(){
        // console.log('MovieItem props:', this.props);
        return( // Can also just use <> </> instead of divs
            <div className="movieItem" onClick={() => this.movieClick(this.props.id)}>
                <img className="moviePoster" src={this.props.movie.poster} alt=""/>
                <h2>{this.props.movie.title}</h2>
                {this.props.movie.description}
            </div>
        );
    }
}

export default connect()(withRouter(MovieItem));

// Don't forget to import Component into parent Component