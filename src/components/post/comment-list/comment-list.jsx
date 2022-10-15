import React from 'react';
import comments from '../../../assets/comments.json'
import classes from './comment-list.module.css';
import Comment from "./comment/comment";

const CommentList = ({articleId}) => {
    const rightComments = comments.filter(value => {
        return value.articleId === articleId;
    });

    return (
        <div className={classes.commentList}>
            {rightComments.map(({author, text}, i) =>
                <Comment key={i} author={author} text={text} />
            )}
        </div>
    );
}

export default CommentList;
