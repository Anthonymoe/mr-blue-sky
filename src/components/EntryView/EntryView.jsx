import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';



function EntryView() {

    //renaming funcitons to make them easier to call
    let dispatch = useDispatch();
    const history = useHistory();
    const entryInfo = useSelector( (store) => {
        return store.currentEntry;
    });
    const entryId = useSelector( (store) => {
        return store.currentEntry;
    })

    //sends user back to home page
    const homeClick = () => {
        history.push('/');
    }

    //sends user back to history page
    const backClick = () => {
        history.push('/history');
    }

    //removes entire entry from db onClick of the delete button
    const deleteClick = () => {
        dispatch({type: 'DELETE_ENTRY', payload: entryInfo[0].id });
        console.log( 'delete click entry id:', entryInfo[0].id );
        history.push('/')
    }

    //updates entry in db 
    const updateEntry = (id) => {
         //Object to send for update to db
        const entryUpdate ={
        id: id,
        comment: commentUpdate
        }
        dispatch({type: 'UPDATE_ENTRY', payload: entryUpdate });
    }

    
    //used to hold any updates the user makes to the comment prior to moving to db
    const [commentUpdate, setCommentUpdate] = useState('');
   

    //changes the value of commentUpdate
    const updateComment = (event) => {
        setCommentUpdate(event.target.value);
    }
   
    

    // this is used to toggle the state of edit to determine if the comment or edit box should be rendered to the DOM
    const [edit, setEdit] = useState(true);
    const toggleEdit = () => {
        setEdit(!edit);
        setCommentUpdate(entryInfo[0].comment);
        return edit;
    }

    //on the click of edit this toggles the comment to a text box with a submit and cancel button
    const displayComment = () => {
        let display = <div><textarea onChange={updateComment} name="" id="" cols="30" rows="10">{entryInfo[0].comment}</textarea> 
            <button onClick={()=>updateEntry(entryInfo[0].id)}>Submit</button> <button onClick={toggleEdit}>Cancel</button></div>;
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