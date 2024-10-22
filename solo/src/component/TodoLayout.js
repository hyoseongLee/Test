import React from 'react';
import './TodoLayout.css';


const TodoLayout = ({children,todoLength}) => {
    

    return (
        <div className='TodoLayout'>
            <div className='title'>오늘의 할일 목록 테스트 ({todoLength}) </div>
            <div>{children} </div>
        </div>
    )
}



export default TodoLayout;