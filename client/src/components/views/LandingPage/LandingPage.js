import React from 'react';
import axios from 'axios';

function LandingPage(props) {
    const onClickLogout = (event) => {
        axios.get('/api/users/logout')
            .then( res => {
                if(res.data.success) {
                    props.history.push('/login');
                } else {
                    alert("Failed to Logout");
                }
            });
    }
    return (
        <div>
            LandingPage
            <button onClick={onClickLogout}>LogOut</button>
        </div>
    )
}

export default LandingPage
