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

    const [ comment, setComment ] = useState('')

    let handleChange = (event) => {
        setComment(event.target.value);
    }

    let submitEntry = () => {
        console.log(comment);
    }
    

    return(
        <>
            <textarea onChange={handleChange} placeholder="comments" name="comments" id="" cols="50" rows="10" type="text"></textarea>
            <button>Back</button>
            <button onClick={submitEntry}>Submit</button>
            <p>{JSON.stringify(test)}</p>
        </>
    )
}

export default CommentPage;