import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genreId: '',
    }

    handleStateChange(event, key) {
        console.log('handleStateChange');
        this.setState({
            [key]: event.target.value,
        });
    } // end handleStateChange

    additionSubmit() {
        // this.props.dispatch({
        //     type: "ADD_MOVIE",
        //     payload: this.state,
        // });
        console.log('AddMovie props');
    }

    render(){
        console.log('AddMovie props', this.props);
        return( // Can also just use <> </> instead of divs
            <div>
                AddMovie
                <input placeholder="Title" type="text" onChange={(event) => this.handleStateChange(event, 'title')} />
                <input placeholder="Poster url" type="text" onChange={(event) => this.handleStateChange(event, 'poster')}/>
                <textarea placeholder="Description" rows="4" cols="50" 
                    onChange={(event) => this.handleStateChange(event, 'description')}/>
                <select value={this.state.genreId} onChange={(event) => this.handleStateChange(event, 'genre_id')}>
                    {this.props.genres.map((genre, i) => 
                        <option key={i} value={i+1}>{genre}</option>
                    )}
                </select>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={this.additionSubmit}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    let locationProps = {
        genres: reduxState.staticGenres,
    };
    return locationProps;
}

export default connect(mapStateToProps)(AddMovie);

// Don't forget to import Component into parent Component