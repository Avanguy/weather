const FDate = ({fDate}) => {
    const displayDate = new Date(fDate);
    return (
        <div>
            {displayDate.toLocaleString('default',{day:"2-digit", month: 'long'})}
        </div>
    )
}

export default FDate;
// forcast.forEach(index=> {
//       const date = new Date(index.dt * 1000);
//       console.log(date.toLocaleString('default',{day:"2-digit", month: 'long'}))
//     });
