import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import TextEdit from '../TextEdit/TextEdit'


function EntryView() {

    //renaming funcitons to make them easier to call
    let dispatch = useDispatch();
    const history = useHistory();
    const entryInfo = useSelector( (store) => {
        return store.currentEntry;
    });
    const entryId = useSelector( (store) => {
        return store.currentEntry.id
    })

    //sends user back to home page
    const homeClick = () => {
        history.push('/');
    }

    //sends user back to history page
    const backClick = () => {
        history.push('/history');
    }

    const deleteClick = () => {
        dispatch({type: 'DELETE_ENTRY', payload: entryInfo[0].id });
        console.log( 'delete click entry id:', entryInfo[0].id );
        history.push('/')
    }

    const [edit, setEdit] = useState(true);
    
    const toggleEdit = () => {
        if( edit ){
            setEdit(false);
        }
        else{
            setEdit(true);
        }
        console.log(edit);
        return edit;
    }

    const displayComment = () => {
        let display = <textarea name="" id="" cols="30" rows="10">{entryInfo[0].comment}</textarea>;
        if (edit) {
            display = <p>{entryInfo[0].comment}</p>;
        }
        return display;
    }

    return(
        <>
            {entryInfo.map(entry => {
                    return (
                        <div key={entry.id}>
                            <p>Date: <span>date will go here</span></p>
                            <p>Mood Rating: <span>{entry.mood}</span></p>
                            <p>Comments:</p>
                            {displayComment()}
                            <p>{JSON.stringify(entryId)}</p>
                        </div>
                        
                    )
            })}
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={backClick}>Back</button>
            <button onClick={homeClick}>Home</button>
            <button onClick={deleteClick}>Delete Entry</button>
        </>
    )
}

export default EntryView;