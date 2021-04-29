import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Swal from 'sweetalert2';

function WeatherPage() {
    //renaming functions to make easier to call
    const history = useHistory();
    const dispatch = useDispatch();
    const test = useSelector( (store) =>{
        return store;
    })

    //this will hold the weather input prior to submission 
    const [ weather, setWeather ] = useState(0);

    //handles weatherChange onClick
    const weatherChange = (event) => {
        console.log('in weatherChange');
        setWeather( Number(event.target.value) )
        console.log(weather);
    }
    
    //brings user back to MoodPage
    const cancel = () => {
        history.push('/mood')
    }
    
    //dispatches weather to store.
    const newWeather = () => {
        if ( weather === 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops....',
                text: 'You need to make a selection before advancing',
                position: 'top',
                padding: '1.5em'
              })
        }
        else {
        dispatch({ type: 'SET_WEATHER', payload: weather })
        setWeather(0);
        history.push('/comment')
        }
    }


    return(
        <>
            <div>
                <h1>How is the weather?</h1>
            </div>
            <form onClick={weatherChange}>
                <button value='1'>1</button>
                <button value='2'>2</button>
                <button value='3'>3</button>
                <button value='4'>4</button>
                <button value='5'>5</button>
            </form>
            <div>
                <button onClick={cancel}>Back</button>
                <button onClick={newWeather}>Next</button>
            </div>
        </>
    )
}

export default WeatherPage;