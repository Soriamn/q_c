import createList from './action';
import axios from 'axios';

export const getBreeds = (dispatch) => {
    axios.get('https://dog.ceo/api/breeds/list')
        .then(response => {
            dispatch(createList(response.data.message))
        })
        .catch(error => {
            console.log(error);
        })
}