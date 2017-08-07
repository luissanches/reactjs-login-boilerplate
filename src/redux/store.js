import { createStore, combineReducers } from 'redux';
import user from './reducers/userReducer';
import structureUI from './reducers/structureUIReducer';

export default createStore(
    combineReducers({user, structureUI}),
    {}
);