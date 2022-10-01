import React from 'react';
import PostTitle from "./postTitle";
import PostContent from "./postContent";
import PostLikes from "./postLikes";
import './post.css';

const Post = (props) => {
    return (
        <div className="post">
            <PostTitle content={props.title} />
            <PostContent content={props.text} />
            <PostLikes amount={props.currentLikes} />
        </div>
    );
}

export default Post;
