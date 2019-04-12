import { combineReducers } from 'redux';
import allBreeds from './Breeds/allBreeds';
import detail from './Detail/detail';

const reducer = combineReducers({
    allBreeds: allBreeds,
    detail: detail
});

export default reducer;