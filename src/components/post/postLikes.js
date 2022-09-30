import React, {useState} from 'react';
import './postLikes.css';

function PostLikes(props) {
    const [pressed, setPressed] = useState(false)

    console.log(pressed)

    return (
        <div className="likeButton">
            <button onClick={() => {
                setPressed(!pressed);
            }}>
                Класс! {props.amount + (pressed ? 1 : 0)}
            </button>
        </div>
    );
}

export default PostLikes;
