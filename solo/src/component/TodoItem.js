import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = ({ 
    todo, 
    onInsertToggle, 
    onCheckedToggle, 
    onChangeSelectedTodo,
    

 }) => {

    const { id, text, checked } = todo;

    return (
        <div className='TodoItem'>
            <div className={`content ${checked ? 'checked' : ""}`}>
                {checked ? (<MdCheckBox onClick={() => { onCheckedToggle(id) }} />) : (
                    <MdCheckBoxOutlineBlank onClick={() => { onCheckedToggle(id) }} />)}
            </div>

            <div className="text" onClick={() => {
                onChangeSelectedTodo(todo);
                onInsertToggle();
            }}
            >
                {text}
            </div>
        </div >
    )
};

export default TodoItem;