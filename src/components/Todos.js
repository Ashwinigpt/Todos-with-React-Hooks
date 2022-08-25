import React, { useState } from 'react';
import Todo from './Todo';

function Todos() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    setTodos([...todos, { text, id:Date.now() }]);
    setText('');
  };

  const deleteTodo = ({ id }) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleCheckbox = (id) => {
    const newTodoList = todos.map(todo => {
      if (todo.id === id)
        return { ...todo, done: !todo.done }
      return todo;
    });
    setTodos(newTodoList);
  };

  return (
    <center>
      <h1>My Todos App</h1>
      <input className='input' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your Todos' />
      <button className='btn' onClick={addTodos}>Add</button>
      {
        todos.map((todo) => <Todo data={todo} deleteTodo={deleteTodo} handleChange={handleCheckbox} />)
      }
    </center>
  )
}

export default Todos;