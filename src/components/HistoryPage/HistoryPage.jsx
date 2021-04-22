import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

function HistoryPage() {
    //renaming functions to make easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    const current = useSelector( (store) =>{
        return store;
    })

    useEffect(() =>{
        dispatch({type: 'FETCH_HISTORY', payload: current.user.id });
    }, []);

    return(
        <>
            <p>{JSON.stringify(current.history)}</p>
        </>
    )
}

export default HistoryPage;