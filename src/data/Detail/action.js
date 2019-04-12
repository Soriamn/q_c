import { DET } from '../actionTypes';

function detail(response){
    return {
        type: DET,
        data: response
    }
}

export default detail;