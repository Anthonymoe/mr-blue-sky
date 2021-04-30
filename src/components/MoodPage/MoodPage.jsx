import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import './MoodPage.css'
const moment = require("moment");


function MoodPage() {
    //renaming functions to make easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    const test = useSelector( (store) =>{
        return store;
    })

    //this will hold the mood input prior to submission 
    const [ mood, setMood ] = useState(0);

    //handles moodchange onClick
    const moodChange = (event) => {
        console.log('in moodChange');
        setMood( Number(event.target.value) )
        console.log(mood);
    }
    
    //brings user back to homepage
    const cancel = () => {
        history.push('/')
    }
    
    //dispatches mood to store.
    const newMood = () => {
        if ( mood === 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'You need to make a selection before advancing',
                position: 'top',
                padding: '1.5em'
              })
        }
        else {
        dispatch({ type: 'SET_MOOD', payload: mood })
        dispatch({ type: 'SET_DATE', payload: moment().format("MM/DD/YY") })
        setMood(0);
        history.push('/weather')
        }
    }


    return(
        <>
            <div>
                <h1>How are you Feeling Today?</h1>
            </div>
            <form onClick={moodChange}>
                <button className='btn-1' value='1'>1</button>
                <button className='btn-2' value='2'>2</button>
                <button className='btn-3' value='3'>3</button>
                <button className='btn-4' value='4'>4</button>
                <button className='btn-5' value='5'>5</button>
            </form>
            <div>
                <button className='cancel-btn' onClick={cancel}>Cancel</button>
                <button className='next-btn' onClick={newMood}>Next</button>
            </div>
        </>
    )
}

export default MoodPage;