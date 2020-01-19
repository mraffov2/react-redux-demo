import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged'

const reducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default reducers;