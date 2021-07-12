import React from 'react'

const CHour = ({info}) => {
    console.log(info);
    const time = findTime(info.dt).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});
    const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const weather = info.weather[0].main;
    return (
        <div>
            {`${time} ${parseInt(info.feels_like - 273.15)}°C ${weather}`}
            <img src = {icon} alt = {weather} className= "dateImg"/>
        </div> //make this into css grid
    )
}
const findTime = (epoch)=>{
    const curTime = new Date (epoch * 1000);

    return curTime;
}
export default CHour
