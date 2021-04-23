import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this is the watcher saga waiting for any action types that match 'FETCH_HISTORY'
function* historySaga() {
    yield takeLatest('FETCH_HISTORY', fetchHistory );
  }

//function gets entry data specific to user ---> data in store under history. 
function* fetchHistory (action) {
    try {
        const userHistory = yield axios.get('/api/entry/' + action.payload)
        console.log('in fetchHistory(saga):', userHistory.data );
        yield put({type: 'SET_HISTORY', payload: userHistory.data });
    }catch {
        console.log( 'get userHistory error' )
    }
}


export default historySaga;