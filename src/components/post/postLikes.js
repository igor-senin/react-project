import React, {useState} from 'react';
import './postLikes.css';

const PostLikes = (props) => {
    const [pressed, setPressed] = useState(false)

    console.log(pressed)

    return (
        <div className="likeButton">
            <button onClick={() => {
                setPressed(!pressed);
            }} className={pressed ? "pressed" : "notPressed"}>
                Класс! {props.amount + (pressed ? 1 : 0)}
            </button>
        </div>
    );
}

export default PostLikes;
