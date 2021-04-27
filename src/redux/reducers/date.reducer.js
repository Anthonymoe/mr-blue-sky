const dateReducer = (state = '', action) => {
    console.log('in date reducer');
    switch (action.type) {
      case 'SET_DATE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default dateReducer;