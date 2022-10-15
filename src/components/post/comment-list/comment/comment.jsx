import React from 'react';
import classes from './comment.module.css';

const Comment = ({author, text}) => {
    return (
        <div className={classes.Comment}>
            <h4>{author}</h4>
            {text}
        </div>
    );
};

export default Comment;