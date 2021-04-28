// import React, { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';

// const userInfo = useSelector( (store) =>{
//   return store;
// })

// const [weather, setWeather] = useState([]);
// const [mood, setMood] = useState([]);

// setWeather(userInfo.weather)
// console.log('this is userweather',weather);

// // for (let i = 0,; i < userInfo.length || i < 7; i++){
// //   setWeather(userInfo)
// // }

// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: 'Weather',
//       data: [1, 3, 4, 2, 5, 3],
//       fill: false,
//       backgroundColor: 'rgb(245, 237, 19, .7)',
//       borderColor: 'rgb(245, 237, 19, .7)',
//     },
//     {
//         label: 'Mood',
//         data: [4, 5, 3, 2, 1, 5],
//         fill: false,
//         backgroundColor: 'rgb(63, 127, 191, .7)',
//         borderColor: 'rgb(63, 127, 191, .7)', 
//     }
//   ]};

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             precision: 0,
//           },
//         },
//       ],
//     },
//   };

// const Insights = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Insights</h1>
//     </div>
//     <Line data={data} options={options} />
//   </>
// );

// export default Insights;