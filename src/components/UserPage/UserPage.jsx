import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const goToEntry = () => {
    history.push('/entry')
  }

  return (
    <div className="container">
      {/* leaving user.username and user.id here for reference for now */}
      <h2>Welcome, {user.username}</h2>
      <p>Your ID is: {user.id}</p>
      <p>will remove username and id before completetion</p>
      {/* end of reference delete at end of project */}
      <h1>Where to?</h1>
      <button onClick={goToEntry} className="btn">New Entry</button>
      <button className="btn">Insights</button>
      <button className="btn">History</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
