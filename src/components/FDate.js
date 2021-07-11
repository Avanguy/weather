import sun from '.././images/Sun-icon.png';

const FDate = ({fDate,info}) => {
    const displayDate = new Date(fDate);
    const weather = info.weather[0].main;
    const icon = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const colours = cScheme(weather);
    return (
        <div className = "fDate" style={{backgroundColor: colours[1]}}>
            <div className = "fDateHighlight" style={{backgroundColor: colours[0], color:colours[1]}}>
                <h2>{displayDate.toLocaleString('default',{weekday:"long"})}</h2>
                <p>{displayDate.toLocaleString('default',{day:"2-digit", month: 'long'})}</p>
            </div>
            <img src = {icon} alt = {weather} className= "dateImg"/>
            <h4>{weather}</h4>
            <div className = "info">
                <p>{info.weather[0].description}</p> <br/>
                <p>{`Temp: ${parseInt(info.temp.min -273.15)}°C - ${parseInt(info.temp.max-273.15)}°C`}</p>
            </div>
        </div>
    )
}
const cScheme = (weather) =>{
    let colours = ["white","black"];
    switch(weather){
        case "Thunderstorm":
            colours = ["black","yellow"];
            break;
        case "Drizzle":
            colours = ["grey","lightblue"];
            break;
        case "Rain":
            colours = ["blue","lightblue"];
            break;
        case "Snow":
            colours = ["white","lightblue"];
            break;
        case "Atmosphere":
            colours = ["red","yellow"];
            break;
        case "Clear":
            colours = ["yellow","orange"];
            break;
    }
    return colours;
}
export default FDate;
