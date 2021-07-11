import FDate from './FDate.js'
const Forcast = ({forcast}) => {
    const dates = [];
    const info = [];
    if(forcast != null){
        forcast.daily.forEach(index=> {
        dates.push(index.dt);
        info.push(index)
        });
    }
    const startDate = new Date(dates[0] * 1000).toLocaleString('default',{day:"2-digit", month: 'long'});
    const endDate = new Date(dates[dates.length-1] * 1000).toLocaleString('default',{day:"2-digit", month: 'long'});
    return (
        <div className = "forcastBox">
            <h1>Forcast for: {startDate} - {endDate}</h1>
            {dates.map((fDate,index) => <FDate fDate = {fDate * 1000} info = {info[index]}/>)}
        </div>
    )
}

export default Forcast
