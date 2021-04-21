import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentEntry = useSelector( (store) =>{
        return store;
    })

    //object with all of the entry data to be sent to db
    const newEntry = {
        user_id: currentEntry.user.id,
        mood: currentEntry.mood,
        comment: currentEntry.comment
    }

    let backClick = () => {
        history.push('/comment')
    }

    let submitEntry = () => {
        dispatch({type: 'ADD_ENTRY', payload: newEntry })
        console.log('in submit Entry:', newEntry );
        //////// need to add route back to home page //////////
    }

    return(
        <>
            <h1>Review your entry</h1>
            <p>Current mood:{currentEntry.mood}</p>
            <p>Current comment:{currentEntry.comment}</p>
            <p>User Id:{currentEntry.user.id}</p>
            <button onClick={backClick}>Back</button>
            <button onClick={submitEntry}>Confirm</button>
        </>

    )

}

export default ReviewPage;
