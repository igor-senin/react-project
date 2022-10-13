import React, {useState} from 'react';
import classes from './post-likes.module.css';

const PostLikes = ({amount}) => {
    const [pressed, setPressed] = useState(false)

    return (
        <div className={classes.likeButton}>
            <button onClick={() => {
                setPressed(!pressed);
            }} className={pressed ? classes.pressed : classes.notPressed}>
                Класс! {amount + (pressed ? 1 : 0)}
            </button>
        </div>
    );
}

export default PostLikes;
