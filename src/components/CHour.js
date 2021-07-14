import React from 'react'

const CHour = ({info}) => {
    const time = findTime(info.dt).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});
    const humidity = info.humidity;
    const pop = info.pop // probability of percipitation
    const desc = info.weather[0].description;
    let nextDay = "";
    if(time === "00:00"){    
        nextDay = "Next Day";
    }
    const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const weather = info.weather[0].main;
    return (
        <div tabIndex="0" className = "cHour">
            <p  style={{textDecoration:" underline", fontWeight:"bold"}}>{`${nextDay}`}</p>
            <div className = "cHourShort">
                <p>{`${time}`}</p>
                <p style={{color:"red"}}>{`${parseInt(info.temp - 273.15)}°C`}</p> 
                <img src = {icon} alt = {weather} className= "dateImg"/>
            </div>
            <div className = "info">
                <p>{`${weather} - ${desc}`}</p>
                <p>{`Humidity: ${humidity}%`}</p>
                <p>{`Chance of rain: ${pop*100}%`}</p>
            </div>
        </div> 
    )
}
const findTime = (epoch)=>{
    const curTime = new Date (epoch * 1000);

    return curTime;
}
export default CHour
