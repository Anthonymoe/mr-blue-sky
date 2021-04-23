import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this is the watcher saga waiting for any action types that match 'ADD_ENTRY'
function* deleteSaga() {
    yield takeLatest('DELETE_ENTRY', deleteEntry);
  }

  ///////UPDATE this to make a put to update the store. 
  function* deleteEntry (action) {
      console.log(action.payload)
    try {
        const response = yield axios.delete('/api/entry/' + action.payload );
        console.log('delete call working')
        yield put({type: 'DELETED_ITEM', payload: response.data })
    } catch(error) {
        console.log('This is the error', error)
    }
}

export default deleteSaga;