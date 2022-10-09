import React from 'react';
import classes from './post-title.module.css';

const PostTitle = ({content}) => {
    return (
        <div className={classes.title}>
            <h2>{content}</h2>
        </div>
    );
}

export default PostTitle;
