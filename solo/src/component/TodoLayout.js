import React from 'react';
import "./TodoLayout.css";

const TodoLayout = ({children, todoLangth}) => {
    return (
        <div className="TodoLayout">
            <div className="title"> 오늘의 할일 ({todoLangth}) </div>
            <div> {children} </div>
        </div>
    )
}


export default TodoLayout;