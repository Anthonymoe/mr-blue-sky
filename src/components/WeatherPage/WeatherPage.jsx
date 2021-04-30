import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './WeatherPage.css'
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
                <button className='btn-1' value='1'>1</button>
                <button className='btn-2' value='2'>2</button>
                <button className='btn-3' value='3'>3</button>
                <button className='btn-4' value='4'>4</button>
                <button className='btn-5' value='5'>5</button>
            </form>
            <div>
                <button className='back-btn' onClick={cancel}>Back</button>
                <button className='next-btn' onClick={newWeather}>Next</button>
            </div>
        </>
    )
}

export default WeatherPage;