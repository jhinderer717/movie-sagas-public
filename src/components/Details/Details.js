import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    componentDidMount() {
        
    }

    render(){
        console.log('Details props:', this.props);
        return( // Can also just use <> </> instead of divs
            <div>
                Details
                {JSON.stringify(this.props.reduxState)}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState: reduxState.movies,
});

export default connect(mapStateToProps)(Details);

// Don't forget to import Component into parent Component