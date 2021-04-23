import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this is the watcher saga waiting for any action types that match 'ADD_ENTRY'
function* entrySaga() {
    yield takeLatest('ADD_ENTRY', addNewEntry);
  }

  function* addNewEntry (action) {
    try {
        yield axios.post('/api/entry', action.payload )
    }catch {
        console.log( 'in addNewEntry' )
    }
}

export default entrySaga;