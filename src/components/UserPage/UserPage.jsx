import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  let dispatch = useDispatch();

  //running use history on user page to fetch history -- this will ensure I have all data necessary in store on the insights page.
  useEffect(() => {
    dispatch({type: 'FETCH_HISTORY', payload: user.id });
  }, []);

  //sends user to first step in new entry(MoodPage)
  const goToEntry = () => {
    history.push('/mood')
  }

  //sends user to HistoryPage can view a table of all previous entries
  const goToHistory = () => {
    history.push('/history')
  }

  //sends user to Insights to view chart with mood and weather data
  const goToInsights = () => {
    history.push('/insights')
  }

  

  return (
    <div className="container">
      <h1>Where to?</h1>
      <button onClick={goToEntry} className="btn">New Entry</button>
      <button onClick={goToInsights} className="btn">Insights</button>
      <button onClick={goToHistory} className="btn">History</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
