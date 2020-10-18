import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import PaginationComponent from '../components/PaginationComponent';

const PostList = (props) => {
    const { posts } = props;
    const [ totalPosts, setTotalPosts ] = useState(posts);
    const [ currentPage, setCurrentPage ] = useState(1);
    const POSTS_PER_PAGE = 20;

    if(!posts || posts.length === 0 ) return <p>There are no posts yet!</p>

    let numberOfPosts;
    if(currentPage === 1) numberOfPosts = posts.slice(0, currentPage * POSTS_PER_PAGE)
    else if(currentPage === 2) numberOfPosts = posts.slice(20, currentPage * POSTS_PER_PAGE)
    else if(currentPage === 3) numberOfPosts = posts.slice(40, currentPage * POSTS_PER_PAGE)
    else if(currentPage === 4) numberOfPosts = posts.slice(60, currentPage * POSTS_PER_PAGE)
    else if(currentPage === 5) numberOfPosts = posts.slice(80)
    
    return (
        <div className='container-style'>
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
                        {numberOfPosts.map(post => (<tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.id}</td>
                            <td>{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="pagination-style">
                <PaginationComponent 
                    total={totalPosts}
                    postsPerPage={POSTS_PER_PAGE}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default PostList;