import FDate from './FDate.js'
const Forcast = ({forcast}) => {
    const dates = [];
    if(forcast != null){
        forcast.daily.forEach(index=> {
        dates.push(index.dt);
        //prob change this part to array of classes for info for forcast
        });
    }
    console.log(dates)
    return (
        <div>
            {dates.map(fDate => <FDate fDate = {fDate * 1000}/>)}
        </div>
    )
}

export default Forcast
// forcast.forEach(index=> {
//       const date = new Date(index.dt * 1000);
//       console.log(date.toLocaleString('default',{day:"2-digit", month: 'long'}))
//     });
