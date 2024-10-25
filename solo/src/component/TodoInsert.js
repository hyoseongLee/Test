import React, { useState,useEffect } from 'react';
import './TodoInsert.css';
import { MdAddCircle } from 'react-icons/md';
import {TiPencil, TiTrash} from 'react-icons/ti';

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdata}) => {
  const [value, setValue] = useState("")

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  const onChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  },[selectedTodo]);
  

  return (
    <div>
      <div className='background' onClick={onInsertToggle}> </div>
        <form onSubmit= {selectedTodo ? () => {onUpdata(selectedTodo.id,value)} : onSubmit}>
          <input
            placeholder="plaese type"
            value={value}
            onChange={onChange}>
          </input>
         {selectedTodo ? (
          <div className='rewrite'>
            <TiPencil onClick={() => {onUpdata(selectedTodo.id,value)}} />
            <TiTrash onClick={() => {onRemove(selectedTodo.id)}} />
          </div>
         ) : (<button type='submit'> <MdAddCircle /> </button>)}
        </form>
    </div>
  )
};

export default TodoInsert;