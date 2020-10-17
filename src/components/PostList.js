import React from 'react';
import Table from 'react-bootstrap/Table';

const PostList = (props) => {

    const { posts } = props;
    if(!posts || posts.length === 0 ) return <p>There are no posts yet!</p>

    return (
        <div className='post-list-style'>
            <div className='header-style'>
                <h1>Posts</h1>
            </div>
            <div className='table-style'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Title</th>
                            <th>Id</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (<tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.id}</td>
                            <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PostList;