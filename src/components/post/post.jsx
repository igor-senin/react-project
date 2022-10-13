import React from 'react';
import PostTitle from "./post-title/post-title";
import PostContent from "./post-content/post-content";
import PostLikes from "./post-likes/post-likes";
import classes from './post.module.css';

const Post = ({title, text, currentLikes}) => {
    return (
        <div className={classes.post}>
            <PostTitle content={title} />
            <PostContent content={text} />
            <PostLikes amount={currentLikes} />
        </div>
    );
}

export default Post;
