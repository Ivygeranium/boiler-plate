import React from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import { Form, Input, message, Button } from 'antd';

function CreateBlogList(props) {
    const user = useSelector(state => state.user);
    const onSubmitModal = ( { Category, SubCategory }) => {
        const postInfo = {
            category: Category,
            subCategory: SubCategory,
            writer: user.userData._id
        }

        axios.post('/api/blog/createBlogList', postInfo)
            .then( res => {
                if (res) {
                    message.success('Created Success!');

                    setTimeout(() => {
                        props.history.push(`/Programing/Overview`)
                    }, 2000);
                }
            })

    }
    return (
        <div style={{ maxWidth: '900px', margin: '2rem auto' }}>

            <Form name="CreateBlogList" onFinish={onSubmitModal}>
                <Form.Item
                    label="Category"
                    name="Category"
                    rules={[{ required: true, message: 'Please select Category!' }]}
                >
                    <Input />
                </Form.Item>  

                <Form.Item
                    label="SubCategory"
                    name="SubCategory"
                    rules={[{ required: true, message: 'Please select Category!' }]}
                >
                    <Input />
                </Form.Item>  

                <Form.Item><Button htmlType="submit">Submit</Button></Form.Item>
            </Form>

        </div>
    )
}

export default CreateBlogList
