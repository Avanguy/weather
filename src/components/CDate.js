import React from 'react'
import CHour from './CHour.js'
const CDate = ({info}) => {
    info = info.slice(0,info.length/2);
    // info.forEach(index=>{
    //     time = findTime(index.dt).toLocaleString("default", {hour: "2-digit", minute: "2-digit", hour12: false});
    //     console.log(`${time} ${parseInt(index.feels_like - 273.15)}°C ${index.weather[0].main}`);
    // })
    
    return (
        <div className = "cDate">
           <h4>Today: </h4>
           {info.map(hInfo => <CHour info = {hInfo} />)}

        </div>
    )
}
export default CDate
