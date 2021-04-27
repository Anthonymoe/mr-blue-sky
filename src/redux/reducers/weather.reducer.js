const weatherReducer = (state = 0, action) => {
    console.log('in weather reducer');
    switch (action.type) {
      case 'SET_WEATHER':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default weatherReducer;