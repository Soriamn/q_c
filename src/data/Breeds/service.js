import axios from 'axios';

export const getBreeds = () => {
    axios.get('https://dog.ceo/api/breeds/list')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
}