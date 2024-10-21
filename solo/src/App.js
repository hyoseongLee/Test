import React, { useState } from 'react'
import './App.css';
import TodoLayout from './component/TodoLayout';
import TodoList from './component/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './component/TodoInsert';

let nextid = 4;

const App = () => {

  const [selectedTodo, setSelectedTodo] = useState(null)
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
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (text === "") {
      return alert("할일을 입력해주세요.")
    } else {
      const todo = {
        id: nextid,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextid++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo

    )))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo)
  };

  const onRemove = id => {
    onInsertToggle()
    setTodos(todos => todos.filter(todo=> todo.id !== id)) 
  }

  const onUpdate = (id,text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  return (
    <TodoLayout todoLangth={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={insertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onRemove={onRemove}
      />

      <div className="app-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert
        onInsertToggle={onInsertToggle}
        onInsertTodo={onInsertTodo}
        selectedTodo={selectedTodo}
        onUpdate={onUpdate} 
        />}
    </TodoLayout>
  );
};
export default App;
