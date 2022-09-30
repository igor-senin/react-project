import React from 'react';
import './postTitle.css';

function PostTitle(props) {
    return (
        <div className="title">
            <h2>{props.content}</h2>
        </div>
    );
}

export default PostTitle;
