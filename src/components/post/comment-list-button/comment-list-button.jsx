import React, {useState} from 'react';
import classes from './comment-list-button.module.css';

const CommentListButton = ({handler}) => {
    const [opened, setOpened] = useState(false);

    const inverseButton = () => {
        setOpened(!opened);
        handler();
    }

    return (
        <button className={classes.commentListButton} onClick={inverseButton}>
            <div className={ opened ? classes.arrowUp : classes.arrowDown }></div>
        </button>
    );
}

export default CommentListButton;