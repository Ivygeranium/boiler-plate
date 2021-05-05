import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function Auth (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
                .then( res => {
                    if (!res.payload.isAuth) {
                        if(option) {
                            props.history.push('/login');
                        }
                    } else {
                        if (adminRoute && ! res.payload.isAdmin) {
                            props.history.push('/');
                        } else {
                            if (option === false) {
                                props.history.push('/');
                            }
                        }
                    }
                });
        })

        return <SpecificComponent {...props}/> 
    }

    return AuthenticationCheck
}