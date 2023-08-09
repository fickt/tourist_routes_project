import { combineReducers } from 'redux';
import { spotReducer } from '../modules/card-list/store/spots-reducer';

export const rootReducer = combineReducers({
    spots: spotReducer,
})

