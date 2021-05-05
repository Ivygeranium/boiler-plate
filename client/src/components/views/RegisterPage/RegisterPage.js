import React ,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onChangeName = (event) => {
        setName(event.currentTarget.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onSubmitLogin = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) return alert("Password must be the same"); 
        let body = {
            email: Email,
            name: Name,
            password: Password,
        }
        dispatch(registerUser(body))
            .then(response => {
                console.log(response.payload);
                if(response.payload.registerSuccess) {
                    props.history.push('/login');
                } else {
                    alert('Failed to sign up')
                }
            })
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitLogin}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onChangeEmail} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onChangeName} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onChangePassword} />
                <label>Confirm Password</label>
                <input type="Password" value={ConfirmPassword} onChange={onChangeConfirmPassword} />
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterPage
