import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    render(){
        console.log('Details props.reduxState:', this.props.reduxState.movie);
        //console.log('this.props.reduxState.detail', this.props.reduxState.detail);
        return( // Can also just use <> </> instead of divs
            <div>
                {JSON.stringify(this.props.reduxState.movie)}
                <br></br>
                {/* <img src={this.props.reduxState.detail.poster} alt="" /> */}
                {/* {this.props.reduxState.map(movie => 
                    key={movie.id}
                    
                )} */}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);

// Don't forget to import Component into parent Component