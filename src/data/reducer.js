import { combineReducers } from 'redux';
import allBreeds from './Breeds/allBreeds';

const reducer = combineReducers({
    allBreeds: allBreeds
});

export default reducer;