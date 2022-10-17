import React, {useEffect, useState} from 'react';
import Post from "../post/post";
import {getArticles} from "../../api/helpers/get-articles";
import classes from './feed.module.css';

const Feed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        getArticles().then(fetchedArticles => setArticles(fetchedArticles))
    }, []);

    return (
        <div className={classes.feed}>
            {articles ?
                articles.map(value =>
                    <Post
                        key={value.articleId}
                        articleId={value.articleId}
                        title={value.title}
                        text={value.text}
                        currentLikes={value.currentLikes}
                        commentsCount={value.commentsCount}
                    />) : <h1>Loading...</h1>
            }
        </div>
    );
};

export default Feed;