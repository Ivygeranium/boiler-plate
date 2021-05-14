import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

function Option() {

    return (
        <div>
            <Button type="primary" ghost><Link to='/Programing/Create'>Create</Link></Button>
            <Button type="primary" ><Link to='/Programing/CreateBlogList'>CreateBlogList</Link></Button>
        </div>
    )
}

export default Option
