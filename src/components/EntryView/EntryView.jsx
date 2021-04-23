import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect } from 'react';


function EntryView() {
    //renaming funcitons to make them easier to call
    const history = useHistory();
    const entryInfo = useSelector( (store) =>{
        return store.currentEntry;
    });

    //sends user back to home page
    const homeClick = () => {
        history.push('/');
    }

    //sends user back to history page
    const backClick = () => {
        history.push('/history');
    }


    return(
        <>
            {entryInfo.map(entry => {
                    return (
                        <div key={entry.id}>
                            <p>Date: <span>date will go here</span></p>
                            <p>Mood Rating: <span>{entry.mood}</span></p>
                            <p>Comments:</p>
                            <p>{entry.comment}</p>
                        </div>
                    )
            })}
            <button>Edit</button>
            <button onClick={backClick}>Back</button>
            <button onClick={homeClick}>Home</button>
            <button>Delete Entry</button>
        </>
    )
}

export default EntryView;