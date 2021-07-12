import FDate from './FDate.js'
import CDate from './CDate.js'
const Weather = ({forcast}) => {
    const dates = [];
    const info = [];
    forcast.daily.forEach(index=> {
    dates.push(index.dt);
    info.push(index)
    });
    const cHInfo = forcast.hourly; // curent hourly info
    const cWInfo = forcast.current; // current weather info
    dates.shift();
    info.shift();
    const startDate = new Date(dates[0] * 1000).toLocaleString('default',{day:"2-digit", month: 'long'});
    const endDate = new Date(dates[dates.length-1] * 1000).toLocaleString('default',{day:"2-digit", month: 'long'});
    return (
        <div> 
            <CDate cHInfo = {cHInfo} cWInfo ={cWInfo}/>
            <h1  style={{textAlign: "center"}}>Forcast for: {startDate} - {endDate}</h1>
            <div className = "forcastBox"> 
                {dates.map((fDate,index) => <FDate fDate = {fDate * 1000} info = {info[index]}/>)}
            </div>
        </div>
    )
}
export default Weather
