import React, { useState } from 'react';
import { Typography, Button, Form, message, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import QuillEditor from '../../../Editor/Quill';
const { Title } = Typography;

function CreatePage(props) {
    const user = useSelector(state => state.user);

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setContent(value)
    }
    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onSubmit = ({title}) => {

        setContent("");

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        const postInfo = {
            title: title,
            content: content,
            writer: user.userData._id
        }

        axios.post('/api/blog/createPost', postInfo)
            .then( res => {
                console.log(res);
                if (res) {
                    message.success('Post Created!');

                    setTimeout(() => {
                        props.history.push('/Programing/Overview')
                    }, 2000);
                }
            })
    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} > Editor</Title>
            </div>

            <Form name="basic" onFinish={onSubmit}>
                <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input Title!' }]}
                >
                    <Input />
                </Form.Item>    

                <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
                />

                <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>

    )
}

export default CreatePage