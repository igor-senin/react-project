import React, {useState} from 'react';
import CommentList from "./comment-list/comment-list";
import classes from './post.module.css';
import MainSection from "./main-section/main-section";

const Post = (props) => {
    const [commentsOpened, setCommentsOpened] = useState(false);

    const openComments = () => {
        setCommentsOpened(!commentsOpened);
    }

    return (
        <div className={classes.post}>
            <MainSection
                handler={openComments}
                title={props.title}
                text={props.text}
                currentLikes={props.currentLikes}
            />
            {commentsOpened && <CommentList articleId={props.articleId} />}
        </div>
    );
}

export default Post;
