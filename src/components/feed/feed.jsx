import React, {useEffect, useState} from 'react';
import Post from "../post/post";
import {getArticles} from "../../api/helpers/get-articles";
import classes from './feed.module.css';
import AddArticle from "./add-article";

const Feed = () => {
    const [articles, setArticles] = useState(null);
    const [curTitle, setCurTitle] = useState('');
    const [curText, setCurText] = useState('');

    useEffect(() => {
        getArticles().then(fetchedArticles => setArticles(fetchedArticles))
    }, []);

    const addNewArticle = event => {
        event.preventDefault();

        let maxId = 0;
        articles.forEach(elem => maxId = Math.max(maxId, elem.articleId));

        const newArticle = {
            articleId: maxId+1,
            title: curTitle,
            text: curText,
            currentLikes: 0,
            commentsCount: 0
        };

        setCurText('');
        setCurTitle('');

        setArticles([...articles, newArticle]);
    }

    return (
        <div className={classes.feed}>
            {articles ?
                <AddArticle
                    addNewArticle={addNewArticle}
                    onTitleChange={event => setCurTitle(event.target.value)}
                    onTextChange={event => setCurText(event.target.value)}
                    curTitle={curTitle}
                    curText={curText}
                />
                : <div/>
            }
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