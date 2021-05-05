import React ,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitLogin = (event) => {
        event.preventDefault();
        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/');
                } else {
                    alert('Failed to sign in')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitLogin}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onChangeEmail} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onChangePassword} />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
