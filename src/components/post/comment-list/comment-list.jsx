import React, {useEffect, useState} from 'react';
import {getComments} from "../../../api/helpers/get-comments-by-article";
import classes from './comment-list.module.css';
import Comment from "./comment/comment";
import AddComment from "./add-comment";

const CommentList = ({articleId}) => {
    const [comments, setComments] = useState(null);
    const [curAuthor, setCurAuthor] = useState('');
    const [curContent, setCurContent] = useState('');

    useEffect(() => {
        getComments(articleId).then(fetchedData => setComments(fetchedData))
    }, []);

    const onContentChange = event => {
        setCurContent(event.target.value);
    }

    const onAuthorChange = event => {
        setCurAuthor(event.target.value);
    }

    const addComment = event => {
        event.preventDefault();

        const newComment = {
            author: curAuthor,
            articleId: articleId,
            text: curContent
        };

        setComments([...comments, newComment]);

        setCurAuthor('');
        setCurContent('');
    }

    const deleteComment = (commentId) => {
        const newComments = comments.filter((comm, ind) => ind !== commentId);

        setComments(newComments);
    }

    return (
        <div className={classes.commentList}>
            <div style={{margin: 5, color: "teal"}}>
                Комментарии: {comments ? comments.length : '?'}
            </div>
            {comments ?
                    comments.map(({author, text}, i) =>
                        <Comment
                            key={i + Date.now()}
                            deleteComment={deleteComment}
                            author={author}
                            text={text}
                            commentIndex={i}
                        />
                    ) : <h1>Loading...</h1>
            }
            {comments ?
                <AddComment
                    onContentChange={onContentChange}
                    onAuthorChange={onAuthorChange}
                    addComment={addComment}
                    curContent={curContent}
                    curAuthor={curAuthor}
                />
                : <div/>
            }
        </div>
    );
}

export default CommentList;
