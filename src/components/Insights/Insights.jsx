import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

function Insights() {
    //gets history from store ---> history is fetched onEffect of userPage - cannot get to insights page w/o going through userPage
    const userInfo = useSelector( (store) =>{
        return store.history;
    })

    //this arrays hold my chart data
    const weather = [];
    const mood = [];
    const date = [];
    
    //loops through userInfo array to capture necessary data
    //will only show last 7 entries ---> ideally showing the last week of data
    for (let i = 0; i < userInfo.length && i < 7 ; i++){
        weather.push(userInfo[i].weather);
        mood.push(userInfo[i].mood);
        date.push(userInfo[i].date);
    }
    
    //data to be rendered to the chart
    const data = {
        labels: date ,
        datasets: [
          {
            label: 'Mood',
            data: mood,
            fill: false,
            backgroundColor: 'rgb(63, 127, 191)',
            borderDash: [10,10],
            borderColor: 'rgb(63, 127, 191)', 
          },
          {
            label: 'Weather',
            data: weather ,
            fill: false,
            backgroundColor: 'rgb(245, 237, 19, .7)',
            borderColor: 'rgb(245, 237, 19, .7)',
          }
        ]};
      
        const options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  precision: 0,
                  fixedStepSize: 1,
                },
              },
            ],
          },
        };
    return (
        <>
            <div className='header'>
            <h1 className='title'>Insights</h1>
            </div>
            <Line data={data} options={options} />
        </>
    )
}

export default Insights;