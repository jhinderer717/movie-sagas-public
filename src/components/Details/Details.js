import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Details extends Component {

    sendToAdd() {
        this.props.history.push('/');
    }
    
    render(){
        console.log('Details props', this.props);
        return( // Can also just use <> </> instead of divs
            <div className="detailDiv">
                <h1 className="backButton">
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => this.sendToAdd(this.props)}
                    >Back
                    </Button>
                </h1>
                <img className="detailImg" src={this.props.movieDetails.poster} alt="" />
                <p>{this.props.movieDetails.description}</p>
                <h4>Genres:</h4>
                {this.props.movieGenres.map((genre, i) => 
                    <p key={i}>
                        {genre}
                    </p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    let locationProps = {
        movieDetails: reduxState.movie,
        movieGenres: reduxState.genres,
    };
    return locationProps;
};

export default connect(mapStateToProps)(withRouter(Details));

// Don't forget to import Component into parent Component