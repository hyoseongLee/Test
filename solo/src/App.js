import React, { useState } from 'react';
import TodoLayout from './component/TodoLayout';
import TodoList from './component/TodoList';
import { MdAddCircle, MdCircle } from 'react-icons/md';
import './App.css';
import TodoInsert from './component/TodoInsert';

let nextid = 4;
const App = () => {
  const [selectedTodo,setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: true
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    },
  ])

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onInsertTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해 주세요.");
    }else {
      const todo = {
        id: nextid,
        text,
        checked:false
      };
      setTodos(todos => todos.concat(todo));
      nextid++;
    }
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)

  }

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (
      todo.id === id ? 
      {...todo, checked: !todo.checked} : todo
    )))
  }

  return (
    <TodoLayout todoLength={todos.length}>
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle} />

      <div className='add-plus-button' onClick={onInsertToggle}> <MdAddCircle /> </div>
      {insertToggle && 
      <TodoInsert 
      selectedTodo={selectedTodo}
      onInsertToggle={onInsertToggle} 
      onInsertTodo={onInsertTodo} />}
    </TodoLayout>
  )
}



export default App;