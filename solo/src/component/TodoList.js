import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({
    todos,
    onCheckedToggle,
    onInsertToggle,
    onChangeSelectedTodo,
    onRemove
}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onInsertToggle={onInsertToggle}
                    onCheckedToggle={onCheckedToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                    onRemove={onRemove}
                />
                ))}
        </div>
    )
};

export default TodoList;