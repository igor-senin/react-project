import React from 'react';
import articles from "../../assets/data/articles.json";
import Post from "../post/post";
import classes from './feed.module.css';

const Feed = () => {
    return (
        <div className={classes.feed}>
            {articles.map(value =>
                <Post
                    key={value.articleId}
                    articleId={value.articleId}
                    title={value.title}
                    text={value.text}
                    currentLikes={value.currentLikes}
                    commentsCount={value.commentsCount}
                />
            )}
        </div>
    );
};

export default Feed;