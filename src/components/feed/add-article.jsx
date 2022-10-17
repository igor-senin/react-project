import React from 'react';

const AddArticle = ({addNewArticle, onTitleChange, onTextChange, curTitle, curText}) => {
    return (
        <form style={{marginBottom: "40px"}}>
            <input
                style={{
                    minHeight: "20px",
                    width: "100%"
                }}
                value={curTitle}
                type="text"
                placeholder="Тема"
                onChange={onTitleChange}
            />
            <input
                style={{
                    minHeight: "50px",
                    width: "100%"
                }}
                value={curText}
                type="text"
                placeholder="Содержание"
                onChange={onTextChange}
            />
            <button onClick={addNewArticle}>Опубликовать</button>
        </form>
    );
};

export default AddArticle;