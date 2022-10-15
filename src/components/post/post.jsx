import React, {useState} from 'react';
import PostTitle from "./post-title/post-title";
import PostContent from "./post-content/post-content";
import PostLikes from "./post-likes/post-likes";
import CommentListButton from "./comment-list-button/comment-list-button";
import CommentList from "./comment-list/comment-list";
import classes from './post.module.css';

const Post = ({articleId, title, text, currentLikes, commentsCount}) => {
    const [commentsOpened, setCommentsOpened] = useState(false);

    const openComments = () => {
        setCommentsOpened(!commentsOpened);
    }

    return (
        <div className={classes.post}>
            <PostTitle content={title} />
            <PostContent content={text} />
            <PostLikes amount={currentLikes} />
            <CommentListButton handler={openComments}></CommentListButton>
            {commentsOpened ? <CommentList articleId={articleId} /> : <div/>}
        </div>
    );
}

export default Post;
