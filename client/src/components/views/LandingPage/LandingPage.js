import React from 'react';
import axios from 'axios';

function LandingPage(props) {
    const onClickHandler = (event) => {
        axios.get('/api/users/logout')
            .then( res => {
                if(res.data.success) {
                    props.history.push('/login')
                } else {
                    alert("Failed to logout")
                }
            })
    }
    return (
        <div>
            LandingPage
            <button onClick={onClickHandler}>LogOut</button>
        </div>
    )
}

export default LandingPage
