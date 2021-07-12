import React from 'react'
import CHour from './CHour.js'
import CWInfo from './CWInfo.js';
const CDate = ({cHInfo, cWInfo}) => {
    cHInfo = cHInfo.slice(0,cHInfo.length/2);
    return (
        <div className = "cDate">
           <CWInfo WInfo = {cWInfo}/>
           <div className ="cHInfo">
            {cHInfo.map(hInfo => <CHour info = {hInfo} />)}
            </div>
        </div>
    )
}
export default CDate
