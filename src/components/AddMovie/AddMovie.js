import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class AddMovie extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre_Id: '1', // this gets changed because value={this.state.genreId} is in the <select ...> tag
    }                  // default is 1 because the dropdown is Adventure at page load

    handleStateChange(event, key) {
        console.log('handleStateChange');
        this.setState({
            [key]: event.target.value,
        });
    } // end handleStateChange

    additionSubmit() {
        this.props.dispatch({
            type: "ADD_MOVIE",
            payload: this.state,
        });
        // import withRouter, decorate export withRouter()
        this.props.history.push('/');// take out out join table id?, update material ui
    }

    render(){
        console.log('AddMovie state', this.state);
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
                <button onClick={() => this.additionSubmit(this.props)}>Submit</button>
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

export default connect(mapStateToProps)(withRouter(AddMovie));

// Don't forget to import Component into parent Component