import React from 'react';
import PostTitle from "../post-title/post-title";
import PostContent from "../post-content/post-content";
import PostLikes from "../post-likes/post-likes";
import CommentListButton from "../comment-list-button/comment-list-button";
import classes from './main-section.module.css';

const MainSection = ({handler, title, text, currentLikes}) => {
    return (
        <div className={classes.mainSection}>
            <PostTitle content={title} />
            <PostContent content={text} />
            <PostLikes amount={currentLikes} />
            <CommentListButton handler={handler} />
        </div>
    );
};

export default MainSection;