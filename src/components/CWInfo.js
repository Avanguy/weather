import React from 'react'

const CWeather = ({WInfo}) => {
    console.log(WInfo);
    const sunrise = findTime(WInfo.sunrise).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});;
    const sunset = findTime(WInfo.sunset).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});;
    const current = findTime(WInfo.dt).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});;
    const humidity = WInfo.humidity;
    const temp = WInfo.temp;
    const weather = WInfo.weather[0];
    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    console.log(current);
    return (
        <div className = "cWInfo">
            <p>{`Current Time: ${current}`}</p>
            <img src = {icon} alt = {weather} className= "dateImg"/>
            <p>{`${weather.main} - ${weather.description}`}</p>
            <p>{`Temp: ${temp-273.15}°C`}</p>
            <p>{`Humidity: ${humidity}%`}</p>
            <p>{``}</p>
            <p>{`Sunrise: ${sunrise} Sunset: ${sunset}`}</p>
        </div>
    )
}
const findTime = (epoch)=>{
    const curTime = new Date (epoch * 1000);

    return curTime;
}
export default CWeather
