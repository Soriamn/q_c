import { DET, REM_IMG } from '../actionTypes';

export function detail(response) {
    return {
        type: DET,
        data: response
    }
}

export function delImage(response) {
    return {
        type: REM_IMG
    }
}

