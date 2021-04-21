import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

function ReviewPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const review = useSelector( (store) =>{
        return store;
    })

    const backClick = {
        history.push('/comment')
    }

    return(
        <>
        <h1>Review your entry</h1>
        <p>{review.mood}</p>
        <p>{review.comment}</p>
        <button>Back</button>
        <button>Confirm</button>
        </>

    )

}
