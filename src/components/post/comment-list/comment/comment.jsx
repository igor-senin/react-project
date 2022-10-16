import React from 'react';
import classes from './comment.module.css';

const Comment = ({author, text}) => {
    return (
        <div className={classes.comment}>
            <h4 style={{margin: 5}}>{author}</h4>
            <div style={{margin: 5}}>{text}</div>
        </div>
    );
};

export default Comment;