import './App.css';
import React, { useState, useEffect } from 'react';
import Forcast from './components/Forcast';
 console.log(process.env.REACT_APP_API_KEY);

function App() {
  const [location, setLocation] = useState({lat:51,long:0});
  const [forcast,setForcast] = useState();
  // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&appid=${process.env.REACT_APP_API_KEY}`)
  //   .then((res) => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch( ()=>{
      
  //   })
  function initForcast(){
    const data = fetchWeatherJSON(location);
    data.then(data => setForcast(data));
  }
  useEffect(() => {
    initForcast();
  }, [])
  
  return (
    <div className = "App">
      <h1 className = "city">London</h1>
      {forcast&&<Forcast forcast = {forcast}/>}
    </div>
  );
}
async function fetchWeatherJSON(location){
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&appid=${process.env.REACT_APP_API_KEY}`);
  const data = await res.json();
  return data
}
export default App;
