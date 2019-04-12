const allBreeds = (state = [], action) => {
    switch(action.type) {
        case 'LIST':
            let list = Object.assign({}, state)
            list = state.concat(action.data);
            return list;
        
        case 'REM_LIST':
            let rList = Object.assign({}, state)
            rList = state;
            return rList;
        default: 
            return state
    }
}

export default allBreeds;