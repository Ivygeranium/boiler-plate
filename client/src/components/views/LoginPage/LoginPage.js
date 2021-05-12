import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function LoginPage(props) {

    const dispatch = useDispatch();

    const onSubmitLogin = (values) => {
        dispatch(loginUser(values))
            .then( res => {
                if(res.payload.loginSuccess) {
                    props.history.push('/');
                } else {
                    alert('Failed to Signin');
                }
            });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            
            <Form
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={onSubmitLogin}
            >
                <Form.Item
                    name="email"
                    rules={[{ type: 'email', message: 'Not a valid Email' }]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input prefix={<LockOutlined/>} type="password" placeholder="Password"/>
                </Form.Item>

                <Form.Item  name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{marginRight: "20px"}}>Login</Button>
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage
