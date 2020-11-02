import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data =[
  {
    Game: "Mario Sunshine",
    Name: "luigi55",
    Size: "2",
    Time: "8:00 pm est 10/13",
    Notes:"Test"
  },
  {
    Game: "League of Legends",
    Name: "MikeEagle",
    Size: "5",
    Time: "5:00 pm est 10/3",
    Notes:"Gold rank or higher only add me asap"
  },
  {
    Game: "Counter Strike: Global Offense",
    Name: "YObama",
    Size: "3",
    Time: "8:00 am est 10/17",
    Notes:"late night casuals anyones welcome!"
  },

];
ReactDOM.render(
  <React.StrictMode>
    <App tableInfo={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
