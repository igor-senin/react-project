import React from 'react';
import data from "../../assets/mock-data.json";
import Post from "../post/post";
import classes from './feed.module.css';

const Feed = () => {
    return (
        <div className={classes.feed}>
            {data.map((value, i) =>
                <Post key={i} title={value.title} text={value.text} currentLikes={value.currentLikes} />
            )}
        </div>
    );
};

export default Feed;