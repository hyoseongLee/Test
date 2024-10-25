import React, { useState } from 'react';
import TodoLayout from './component/TodoLayout';
import TodoList from './component/TodoList';
import TodoInsert from './component/TodoInsert';
import './App.css';
import { MdAddCircle } from 'react-icons/md';

let nextid = 4;

const App = () => {

  const [selectedTodo,setSelectedTodo] = useState (null)
  const [insertToggle, setInsertToggle] = useState(false)
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
    }
  ]);

  const onInsertTodo = text => {
    if (text === "") {
      return alert ("할일을 입력해주세요.")
    }else {
      const todo = {
        id: nextid,
        text,
        checked:false
      };
      setTodos (todos => todos.concat(todo))
      nextid++
    } 
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onCheckedToggle = id => {
    setTodos(todos=> 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo))
  };
  
const onRemove = id => {
  onInsertToggle();
  setTodos(todos => todos.filter(todo => todo.id !==id));
};

const onUpdata = (id,text) => {
  onInsertToggle();
  setTodos(todos => todos.map(todo => todo.id ? {...todo, text} : todo))
}

  return (

    <TodoLayout todolangth={todos.length}>
      <TodoList 
      todos={todos} 
      onInsertTodo={onInsertTodo} 
      onCheckedToggle={onCheckedToggle} 
      onChangeSelectedTodo={onChangeSelectedTodo}
      onInsertToggle={onInsertToggle}
      />
      <div className='app-plus-button' onClick={onInsertToggle}>
        <MdAddCircle />
        </div>
      {insertToggle && (
        <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle}
        onInsertTodo={onInsertTodo}
        onRemove={onRemove}
        onUpdata={onUpdata}
        />
      )}
    </TodoLayout>
  )
};




export default App;