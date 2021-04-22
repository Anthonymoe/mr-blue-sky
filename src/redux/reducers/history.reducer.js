const historyReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return action.payload;
        default:
            return state;
    }
}

export default historyReducer;