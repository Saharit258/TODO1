import React, { useState } from 'react';
import './t.css'

function Todo() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 
  const [editedTodo, setEditedTodo] = useState({ id: null, text: "" });

  const addTodo = () => {
    if (newTodo.length === 0) return; 
    setTodos([...todos, { id: Date.now(), text: newTodo }]); 
    setNewTodo(""); 
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditedTodo({ id: todoToEdit.id, text: todoToEdit.text });
  }

  const editChange = (event) => {
    setEditedTodo({ ...editedTodo, text: event.target.value });
  }

  const editSubmit = () => {
    const editedTodos = todos.map(todo =>
      todo.id === editedTodo.id ? { ...todo, text: editedTodo.text } : todo
    );
    setTodos(editedTodos);
    setEditedTodo({ id: null, text: "" });
  }

  return (
    <>
      <div>
        {editedTodo.id === null ? (
          <input
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}  
            className='inputbox'
          />
        ) : (
          <input
            type="text"
            value={editedTodo.text}
            onChange={editChange}
            className='inputbox'
          />
        )}
        <button onClick={editedTodo.id === null ? addTodo : editSubmit} className='Submitinputbox'>
          {editedTodo.id === null ? "Submit" : "Save"}
        </button>
      </div>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td className='td-text'>
                  <span>{todo.text}</span>
              </td>
              <td className='td-button'>
                  <button className='button-Edit' onClick={() => editTodo(todo.id)}>Edit</button>
                  <button className='button-Remove' onClick={() => removeTodo(todo.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todo;
