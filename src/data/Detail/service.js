import detail from './action'
import axios from 'axios';

export const getDetail = (dispatch, ownProps) => {
    axios.get(`https://dog.ceo/api/breed/${ ownProps.match.params.breed }/images/random`)
        .then(response => {
            console.log(response.data.message);
            dispatch(detail(response.data.message))
        })
        .catch(error => {
            console.log(error);
        })
}