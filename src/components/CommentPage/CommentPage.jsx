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

    return(
        <>
            <p>{JSON.stringify(test)}</p>
        </>
    )
}

export default CommentPage;