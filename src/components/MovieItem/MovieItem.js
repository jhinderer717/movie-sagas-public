import React, { Component } from 'react';
import {connect} from 'react-redux';


class MovieItem extends Component {


    render(){
        console.log('MovieItem props:', this.props);
        return( // Can also just use <> </> instead of divs
            <div>
                <img src={this.props.movie.poster} />
                {this.props.movie.title}
                <br></br>
                {this.props.movie.description}
            </div>
        );
    }
}

export default connect()(MovieItem);

// Don't forget to import Component into parent Component