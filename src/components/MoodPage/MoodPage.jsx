import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

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
        dispatch({ type: 'SET_MOOD', payload: mood })
        // history.push('/entry2')
    }


    return(
        <>
            <div>
                <h1>How are you Feeling Today?</h1>
            </div>
            <form onClick={moodChange}>
                <button value='1'>1</button>
                <button value='2'>2</button>
                <button value='3'>3</button>
                <button value='4'>4</button>
                <button value='5'>5</button>
            </form>
            <div>
                <p>{JSON.stringify(test.mood)}</p>
                <button onClick={cancel}>Cancel</button>
                <button onClick={newMood}>Next</button>
            </div>
        </>
    )
}

export default MoodPage;