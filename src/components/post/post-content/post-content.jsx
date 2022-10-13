import React from 'react';
import classes from './post-content.module.css';

const PostContent = ({content}) => {
    return <div className={classes.postContent}>{content}</div>
}

export default PostContent;
