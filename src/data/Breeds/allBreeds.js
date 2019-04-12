
const allBreeds = (state = [], action) => {
    switch(action.type) {
        case 'LIST':
            return Object.assign({}, state, {
                data: action.data
            })
        default: 
            return state
    }
}

export default allBreeds;