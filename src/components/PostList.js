import React from 'react';

const PostList = (props) => {
    
    const { posts } = props;
    if(!posts || posts.length === 0 ) return <p>There are no posts yet!</p>

    return (
        <div>
            <h1>Posts</h1>
            <table className='table'>
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
            </table>
        </div>
    );
};

export default PostList;