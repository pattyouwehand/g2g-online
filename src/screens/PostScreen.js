import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import withPostLoading from '../components/withPostLoading';

const PostScreen = (props) => {

    const PostLoading = withPostLoading(PostList);
    const [ appState, setAppState ] = useState({
        loading: false,
        posts: null
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((posts) => {
                setAppState({ loading: false, posts: posts})
            })

    }, [setAppState]);

    return (
        <div className="container-style">
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    );
};

export default PostScreen;