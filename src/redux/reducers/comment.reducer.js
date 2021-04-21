const commentReducer = (state = '', action) => {
    console.log('in comment reducer');
    switch (action.type) {
      case 'SET_COMMENT':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default commentReducer;
  