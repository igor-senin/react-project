import React, {useEffect, useState} from 'react';
import {getComments} from "../../../api/helpers/get-comments-by-article";
import classes from './comment-list.module.css';
import Comment from "./comment/comment";

const CommentList = ({articleId}) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        getComments(articleId).then(fetchedData => setComments(fetchedData))
    }, []);

    return (
        <div className={classes.commentList}>
            <div style={{margin: 5, color: "teal"}}>
                Комментарии: {comments ? comments.length : '?'}
            </div>
            {comments ?
                    comments.map(({author, text}, i) =>
                        <Comment key={i} author={author} text={text}/>
                    ) : <h1>Loading...</h1>
            }
        </div>
    );
}

export default CommentList;
