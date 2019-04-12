import { LIST } from '../actionTypes';

function createList(response){
    return {
        type: LIST,
        data: response
    }
}

export default createList;
