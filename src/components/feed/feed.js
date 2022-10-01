import React from 'react';
import data from "../../assets/mock-data.json";
import Post from "../post/post";
import './feed.css';

const Feed = (props) => {
    console.log(data)

    return (
        <div className="feed">
            {data.map((value, i) =>
                <Post key={i} title={value.title} text={value.text} currentLikes={value.currentLikes} />
            )}
        </div>
    );
};

export default Feed;