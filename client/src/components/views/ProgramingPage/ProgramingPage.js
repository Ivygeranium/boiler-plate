import React from 'react';
import SideMenu from './SideMenu';
import Contents from './Contents';

function ProgramingPage(props) {

    return (
        <div>
            <div className="Content">
                <SideMenu {...props} /> 
                <Contents />
                <div className="right"></div>
            </div>
        </div>
    )
}

export default ProgramingPage
