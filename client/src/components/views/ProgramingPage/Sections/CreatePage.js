import React, { useState, useEffect } from 'react';
import { Button, Form, message, Input, Cascader} from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import QuillEditor from '../../../Editor/Quill';

function CreatePage(props) {
    const user = useSelector(state => state.user);

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])
    const [blogList, setBlogList] = useState([])

    const callBlogList = async () => {
        const res = await fetch('/api/blog/getBloglist');
        const body = await res.json();
    
        return body; 
    }
    const selector = () => {
        var options = [];
        var children = [];
        blogList.map( list => {
            list.subCategory.map( subCategory => {
                children.push({
                    value: subCategory,
                    label: subCategory
                })
                return children
            })
            options.push({
                value: list.category,
                label: list.category,
                children: children
            })
            children = [];
            return options
        })
        return options
    }

    const onEditorChange = (value) => {
        setContent(value)
    }
    const onFilesChange = (files) => {
        setFiles(files)
    }


    useEffect(() => {
        callBlogList()
            .then( res => setBlogList(res.list))
            .catch( err => console.log(err))
    }, [])




    const onSubmit = ({title, category}) => {

        setContent("");

        const postInfo = {
            category: category[1],
            title: title,
            content: content,
            writer: user.userData._id
        }

        axios.post('/api/blog/createPost', postInfo)
            .then( res => {
                if (res) {
                    message.success('Post Created!');

                    setTimeout(() => {
                        props.history.push(`/Programing/${postInfo.title}`)
                    }, 2000);
                }
            })
    }


    return (
        <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
            <h1>Editor</h1>

            <Form name="CreatePage" onFinish={onSubmit}>

                <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please select Category!' }]}
                >
                    <Cascader options={selector()} placeholder="Please select" />
                </Form.Item>  

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