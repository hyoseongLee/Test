import React, {useState, useEffect} from 'react';
import './TodoInsert.css';
import { MdAddCircle } from 'react-icons/md';

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo}) => {
    const [value,setValue] = useState("");
    const onChange = e => {
        setValue(e.target.value);
    };


    const onSubmit = e => { 
        e.preventDefault();
        onInsertTodo(value)
        setValue("");
        onInsertToggle();
    };

    useEffect(() => {
        if(selectedTodo) {
          setValue(selectedTodo.text);
        }
      },[selectedTodo]);

    return (
        <div>
            <div className='background' onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="please type" value={value} onChange={onChange}></input>
                <button type='submit'>
                    <MdAddCircle /></button>
            </form>
        </div>
    )
}



export default TodoInsert;