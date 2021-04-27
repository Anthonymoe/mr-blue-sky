import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function ReviewPage() {
    //renaming function to make them easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    const currentEntry = useSelector( (store) =>{
        return store;
    })

    //object with all of the entry data to be sent to db
    const newEntry = {
        user_id: currentEntry.user.id,
        mood: currentEntry.mood,
        comment: currentEntry.comment,
        weather: currentEntry.weather,
        date: currentEntry.date
    }
    //brings user back to comment page
    let backClick = () => {
        history.push('/comment')
    }
    //submits entry to the db and brings the user back to the home page after complete.
    let submitEntry = () => {
        dispatch({type: 'ADD_ENTRY', payload: newEntry })
        console.log('in submit Entry:', newEntry );
        history.push('/')
    }

    return(
        <>
            <h1>Review your entry</h1>
            <p>Current mood:{currentEntry.mood}</p>
            <p>Current weather:{currentEntry.weather}</p>
            <p>Current comment:{currentEntry.comment}</p>
            <p>User Id:{currentEntry.user.id}</p>
            <button onClick={backClick}>Back</button>
            <button onClick={submitEntry}>Confirm</button>
        </>

    )

}

export default ReviewPage;
