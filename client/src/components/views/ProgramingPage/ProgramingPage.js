import React from 'react';
import SideMenu from './SideMenu';
import Contents from './Contents';
import Option from './Option';

function ProgramingPage(props) {

    return (

        <div className="Content">
            <SideMenu {...props} /> 
            <Contents />
            <Option /> 
        </div>

    )
}

export default ProgramingPage
