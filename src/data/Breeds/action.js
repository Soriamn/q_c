import { LIST } from '../actionTypes';
import { REM_LIST } from '../actionTypes';

export function createList(response){
    return {
        type: LIST,
        data: response
    }
}

export function removeList(){
    return {
        type: REM_LIST
    }
}

