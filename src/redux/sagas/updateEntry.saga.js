import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this is the watcher saga waiting for any action types that match 'ADD_ENTRY'
function* updateEntrySaga() {
    yield takeLatest('UPDATE_ENTRY', updateEntry);
  }

  function* updateEntry (action) {
    try {
        yield axios.put('/api/entry', action.payload );
        console.log('update entrysaga sent:', action.payload );
    }catch(error) {
        console.log( 'error in updateEntrysaga:', error )
    }
}

export default updateEntrySaga;