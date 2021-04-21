import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function CommentPage() {
    //renaming functions to make easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    const test = useSelector( (store) =>{
        return store;
    });

    //comment variable
    const [ comment, setComment ] = useState('')

    //changes value of comment onChange
    let handleChange = (event) => {
        setComment(event.target.value);
    }

    //dispatches comment to comment reducer ---> then to store as "comment"
    let submitEntry = () => {
        console.log(comment);
        dispatch({type: 'SET_COMMENT', payload: comment })
    }

    //brings user to the previous page which is mood.
    let backClick = () => {
        history.push('/mood')
    }
    

    return(
        <>
            <textarea onChange={handleChange} placeholder="comments" name="comments" id="" cols="50" rows="10" type="text"></textarea>
            <button onClick={backClick}>Back</button>
            <button onClick={submitEntry}>Submit</button>
            <p>{JSON.stringify(test)}</p>
        </>
    )
}

export default CommentPage;