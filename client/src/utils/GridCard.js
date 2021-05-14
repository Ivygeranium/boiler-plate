import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

function GridCard(props) {
    const [blogs, setBlogs] = useState([])

    const callBlogs = async () => {
        const res = await fetch('/api/blog/getBlogs');
        const body = await res.json();
    
        return body; 
    }

    useEffect(() => {
        callBlogs()
            .then( res => setBlogs(res.blogs))
            .catch( err => console.log(err))
    }, [])

    if (blogs.length > 8) blogs.length = 8;
    const renderCards = blogs.map( (blog, index) => {
        return <Col lg={8} md={12} xs={24} key={index}>
                    <div style={{ position: 'relative' }}>
                        <Link to={`/Programing/${blog.title}`}>
                            <Card hoverable style={{ width: 320}}>
                                <Meta
                                    // avatar={
                                    //     <Avatar src={blog.writer.image} />
                                    // }
                                    title={blog.title}
                                    description={blog.category}
                                />
                                <div style={{ height: 150, overflowY: 'auto', marginTop: 10 }}>
                                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                </div>
                            </Card>
                        </Link>
                    </div>
                </Col>
    })
    

    return (
        <Row gutter={[0, 32]}>
            {renderCards}
        </Row>
    )
}

export default GridCard


