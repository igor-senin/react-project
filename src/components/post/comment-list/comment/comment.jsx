import React, {useState} from 'react';
import classes from './comment.module.css';

const Comment = ({deleteComment, author, text, commentIndex}) => {
    const [deleted, setDeleted] = useState(false);

    const removeComment = () => {
        setDeleted(!deleted);
        deleteComment(commentIndex);
    }

    return (
        <div>
            {!deleted ?
                <div className={classes.comment}>
                    <h4 style={{margin: 5}}>{author}</h4>
                    <div style={{margin: 5}}>{text}</div>
                    <button
                        className={classes.closeButton}
                        onClick={removeComment}
                    />
                </div> : <div/>
            }
        </div>
    );
};

export default Comment;