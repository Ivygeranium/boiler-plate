import React from 'react';
import SideMenu from '../../../utils/SideMenu';
import Contents from './Contents';

function ProgramingPage(props) {
    
    return (
        <div>
            <div className="Content">
                <div className="left"> <SideMenu {...props}/> </div>
                <Contents />
                <div className="right"></div>
            </div>
        </div>
    )
}

export default ProgramingPage
