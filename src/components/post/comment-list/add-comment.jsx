import React from 'react';

const AddComment = ({onContentChange, onAuthorChange, addComment, curContent, curAuthor}) => {

    return (
        <form>
            <input
                type="text"
                placeholder="Автор"
                onChange={onAuthorChange}
                value={curAuthor}
            />
            <br/>
            <input
                style={{
                    minHeight: "50px",
                    width: "80%"
                }}
                type="text"
                placeholder="Комментарий"
                onChange={onContentChange}
                value={curContent}
            />
            <button onClick={addComment}>Отправить</button>
        </form>
    );
};

export default AddComment;