import {useState} from 'react';

function EntryPageOne() {
    const [ mood, setMood ] = useState(0);

    const moodChange =(event)=>{
        console.log('in moodChange');
        setMood( Number(event.target.value) )
        console.log(mood);
    }


    return(
        <>
        <h1>How are you Feeling Today?</h1>
        <form onClick={moodChange}>
            <button value='1'>1</button>
            <button value=''>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </form>
        </>
    )
}

export default EntryPageOne;