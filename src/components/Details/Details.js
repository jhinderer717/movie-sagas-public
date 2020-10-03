import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';
import {Link} from 'react-router-dom';


class Details extends Component {

    
    render(){
        console.log('Details props', this.props);
        return( // Can also just use <> </> instead of divs
            <div className="detailDiv">
                <Link to='/'>Back</Link>
                
                <img src={this.props.movieDetails.poster} alt="" />
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

export default connect(mapStateToProps)(Details);

// Don't forget to import Component into parent Component