import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import './HistoryPage.css'

<HistoryPage className="css"></HistoryPage>

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
            </table>
        </>
    )
}

export default HistoryPage;