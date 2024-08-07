import React from 'react'
import './AnalysisComp.scss'

function AnalysisComp({icon,color,bg,text,right}) {
  return (
    <div className="analysis-aa">
        <div className="left-aa">
             <div className="aa-icon" style={{ backgroundColor:bg,color:color,borderRadius:"50%" }} >
                {icon}
             </div>
             <p>{text}</p>
        </div>
        <div className="right-aa">
            <span>{right}</span> 
        </div>
    </div>
  )
}

export default AnalysisComp