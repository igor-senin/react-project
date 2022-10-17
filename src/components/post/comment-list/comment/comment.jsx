import React, {useState} from 'react';
import classes from './comment.module.css';
import CloseButton from 'react-bootstrap/CloseButton';

const Comment = ({author, text}) => {
    const [deleted, setDeleted] = useState(false);

    return (
        <div>
            {!deleted ?
                <div className={classes.comment}>
                    <h4 style={{margin: 5}}>{author}</h4>
                    <div style={{margin: 5}}>{text}</div>
                    <CloseButton
                        className={classes.closeButton}
                        onClick={() => setDeleted(!deleted)}
                    />
                </div> : <div/>
            }
        </div>
    );
};

export default Comment;