import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const review = useSelector( (store) =>{
        return store;
    })

    let backClick = () => {
        history.push('/comment')
    }

    return(
        <>
            <h1>Review your entry</h1>
            <p>Current mood:{review.mood}</p>
            <p>Current comment:{review.comment}</p>
            <p>User Id:{review.user.id}</p>
            <button onClick={backClick}>Back</button>
            <button>Confirm</button>
        </>

    )

}

export default ReviewPage;
