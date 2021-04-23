import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this is the watcher saga waiting for any action types that match 'ADD_ENTRY'
function* fetchEntrySaga() {
    yield takeLatest('FETCH_ENTRY', fetchEntry );
  }

//function gets entry data specific to user ---> data in store under history. 
function* fetchEntry (action) {
    try {
        const selectedEntry = yield axios.get(`/api/entry/?entryId=${action.payload}`)
        console.log('in fetchHistory(saga):', selectedEntry.data );
        yield put({type: 'SET_ENTRY', payload: selectedEntry.data });
    }catch {
        console.log( 'get selectedEntry error' )
    }
}


export default fetchEntrySaga;