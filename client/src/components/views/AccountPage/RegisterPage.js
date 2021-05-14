import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function RegisterPage(props) {
    const dispatch = useDispatch();

    const onSubmitLogin = (values) => {

        if(values.password !== values.confirmPassword) return alert("Password must be the same"); 

        dispatch(registerUser(values))
            .then( res => {
                if(res.payload.registerSuccess) {
                    props.history.push('/login');
                } else {
                    alert('Failed to sign up');
                }
            });
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onSubmitLogin}
            >
                <Form.Item
                    label="LastName"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your LastName!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Not a valid Email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterPage
