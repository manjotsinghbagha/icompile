import React from 'react'
import Mvp from './Mvp';
import Tabheader from './Tabheader';

import '../component_css/Tab.css'

function Tab(props) {
    console.log(props.title)
    return (
        <>
        
            {/* <Tabheader title={props.title} /> */}
            <Mvp />

        </>
    )
}

export default Tab