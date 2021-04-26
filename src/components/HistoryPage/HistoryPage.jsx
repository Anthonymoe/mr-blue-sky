import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import './HistoryPage.css'

<HistoryPage className="css"></HistoryPage>

function HistoryPage() {
    //renaming functions to make easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    
    //two seperate variables for useSelector to bring in data from the store
    const current = useSelector( (store) =>{
        return store;
    })
    const entryHistory = useSelector( (store) =>{
        return store.history;
    })
    
    //gathers users entry history and renders to DOM -> follow to historySaga
    useEffect(() =>{
        dispatch({type: 'FETCH_HISTORY', payload: current.user.id });
    }, []);

    //gathers selected entry data from db and stores it as selectedEntry in store -> follow to selectedEntrySaga
    const handleClick = (entry) => {
        console.log('in view/edit/delete click:', entry.id);
        dispatch({type: 'FETCH_ENTRY', payload: entry.id });
        history.push('/entry')
    }

    return(
        <>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Mood</th>
                    <th>View/Edit/Delete</th>
                </tr>
                <tr>
                    <td>4/22/21</td>
                    <td>3</td>
                    <td><button>Go!</button></td>
                </tr>
                {entryHistory.map(entry => {
                    return (
                        <tr key={entry.id}>
                            <td>date</td>
                            <td>{entry.mood}</td>
                            <td><button onClick={()=>handleClick(entry)} key={entry.id}>Go!</button></td>
                        </tr>
                    )
                })}
            </table>
            <p>{JSON.stringify(current)}</p>
        </>
    )
}

export default HistoryPage;