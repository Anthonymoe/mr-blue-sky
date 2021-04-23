import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect } from 'react';


function EntryView() {
    const entryInfo = useSelector( (store) =>{
        return store.currentEntry;
    });


    return(
        <>
            <p>{JSON.stringify(entryInfo)}</p>
        </>
    )
}

export default EntryView;