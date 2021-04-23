import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect } from 'react';


function EntryView() {
    const entryInfo = useSelector( (store) =>{
        return store.currentEntry;
    });


    return(
        <>
            {entryInfo.map(entry => {
                    return (
                        <div key={entry.id}>
                            <p>date</p>
                            <p>{entry.mood}</p>
                            <p>{entry.comment}</p>
                        </div>
                    )
                })}
        </>
    )
}

export default EntryView;