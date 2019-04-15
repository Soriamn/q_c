
const detail = (state = {}, action) => {
    switch(action.type) {
        case 'DET':
            const image = Object.assign({}, state, {
                image : action.data
            })
            return image;
        
        case 'REM_IMG': 
            let img = Object.assign({}, state);
            img = {};
            return img; 
        default: 
            return state
    }
}

export default detail;