
const detail = (state = {}, action) => {
    switch(action.type) {
        case 'DET':
            const image = Object.assign({}, state, {
                image : action.data
            })
            return image;

        default: 
            return state
    }
}

export default detail;