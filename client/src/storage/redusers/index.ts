import { combineReducers } from 'redux';
import { spotReducer } from './spots-reducer';

export const rootReducer = combineReducers({
    spots: spotReducer,
})

