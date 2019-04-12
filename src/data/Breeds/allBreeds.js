const allBreeds = (state = [], action) => {
    switch(action.type) {
        case 'LIST':
            let list = Object.assign({}, state)
            list = state.concat(action.data);
            return list;
        default: 
            return state
    }
}

export default allBreeds;