import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
// Import axios
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

const alwaysGenres = [
    'Adventure', 'Animated', 'Biographical',
    'Comedy', 'Disaster', 'Drama',
    'Epic', 'Fantasy', 'Musical',
    'Romantic', 'Science Fiction', 'Space-Opera',
    'Superhero'
]

const staticGenres = (state = alwaysGenres) => { // these will be mapped through in the select dropdown
    return state;                                // to avoid typing out all the genres. This idea is
}                                                // credited to David Gould who threw it in the Tarjan Slack

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIE", fetchMovieSaga);
    yield takeEvery("FETCH_DETAIL", fetchDetailSaga);
    yield takeEvery("ADD_MOVIE", addMovieSaga);
}

function* fetchMovieSaga() {
    let response = yield axios({ 
        method: 'GET',
        url: '/api/movie'
    });
    console.log('response from fetchMovieSaga:', response.data);
    yield put({
        type: 'SET_MOVIES',
        payload: response.data
    });
} // end fetchMovieSaga

function* addMovieSaga(action) {
    console.log('!! addMovieSaga hit !!');
    yield axios({
        method: 'POST',
        url: '/api/movie',
        data: action.payload,
    });
} // addMovieSaga

function* fetchDetailSaga(action) {
    console.log('fetchDetailSaga hit, payload:', action.payload);
    let response = yield axios({
        method: 'GET',
        url: `api/movie/${action.payload}`
    });
    console.log('back from fetchDetailSaga GET with response.data:', response.data);
    
    yield put({
        type: 'MOVIE_DETAIL',
        payload: response.data.details
    });

    yield put({
        type: 'MOVIE_GENRES',
        payload: response.data.genres
    });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Reducer used to store in reduxState movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Reducer used to store in reduxState movie details of one movie
const movie = (state = [], action) => {
    //console.log('hit movie Reducer with:', action.payload);
    if(action.type === 'MOVIE_DETAIL') {
        return action.payload;
    }
    return state;
}

// Reducer used to store in reduxState genre(s) of one movie
const genres = (state = [], action) => {
    //console.log('hit genre Reducer with:', action.payload);
    if(action.type === 'MOVIE_GENRES') {
        return action.payload;
    }
    return state;
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie,
        staticGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
