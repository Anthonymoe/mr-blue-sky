import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

function Insights2() {
    let dispatch = useDispatch();
    const current = useSelector( (store) =>{
        return store;
    })
    const userInfo = useSelector( (store) =>{
        return store.history;
    })

    useEffect(() => {
        dispatch({type: 'FETCH_HISTORY', payload: current.user.id });
        console.log( 'weather at index 1', userInfo[1].weather  )
    }, []);

    const weather = [];
    const mood = [];
    const date = [];

    for (let i = 0; i < userInfo.length && i < 7 ; i++){
        weather.push(userInfo[i].weather);
        mood.push(userInfo[i].mood);
        date.push(userInfo[i].date)
        console.log('this is the weahter', weather);

    }
    
    const data = {
        labels: date ,
        datasets: [
          {
            label: 'Weather',
            data: weather ,
            fill: false,
            backgroundColor: 'rgb(245, 237, 19, .7)',
            borderColor: 'rgb(245, 237, 19, .7)',
          },
          {
              label: 'Mood',
              data: mood,
              fill: false,
              backgroundColor: 'rgb(63, 127, 191, .7)',
              borderColor: 'rgb(63, 127, 191, .7)', 
          }
        ]};
      
        const options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  precision: 0,
                },
              },
            ],
          },
        };
    return (
        <>
            <div className='header'>
            <h1 className='title'>Insights</h1>
            {JSON.stringify(userInfo)}
            </div>
            <Line data={data} options={options} />
        </>
    )
}

export default Insights2