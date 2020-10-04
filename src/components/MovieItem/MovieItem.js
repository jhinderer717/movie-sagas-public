import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './MovieItem.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class MovieItem extends Component {

    movieClick() {
        console.log('movieClick hit, id:', this.props.movie.id);
        this.props.dispatch({
            type: "FETCH_DETAIL",
            payload: this.props.movie.id
        });
    }

    render(){
        // console.log('MovieItem props:', this.props);
        return( // Can also just use <> </> instead of divs
            <Link to='/detail'>

                {/* <Card> */}
                    <div className="movieItem" onClick={() => this.movieClick(this.props.id)}>
                        <img src={this.props.movie.poster} alt=""/>
                        <h2>{this.props.movie.title}</h2>
                        {this.props.movie.description}
                    </div>
                {/* </Card> */}
                {/* <Button variant="contained" 
                        color="primary">Mat UI?</Button>   --- Don't need this, just wanted to make
                                                               sure material-ui worked */}

            </Link>
        );
    }
}

export default connect()(MovieItem);

// Don't forget to import Component into parent Component