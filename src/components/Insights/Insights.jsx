import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Weather',
      data: [1, 3, 4, 2, 5, 3],
      fill: false,
      backgroundColor: 'rgb(245, 237, 19)',
      borderColor: 'rgb(245, 237, 19)',
    },
    {
        label: 'Mood',
        data: [4, 5, 3, 2, 1, 5],
        fill: false,
        backgroundColor: 'rgb(63, 127, 191)',
        borderColor: 'rgb(63, 127, 191)', 
    }
  ]};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    ],
  },
};

const Insights = () => (
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default Insights;