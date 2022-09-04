import React from 'react'
import '../component_css/tabheader.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Tabheader(props) {


  return (
    <>  
            <div className='Tabhead'>
            <h6 className='title'>{props.title}</h6>
            <Link to="/"><div className='circle' onClick={props.delFn}> </div></Link>
        </div>
    </>
  )
}

export default Tabheader