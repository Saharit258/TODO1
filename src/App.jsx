import { useState } from 'react';
import './t.css'

function App() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 
  const [editedTodo, setEditedTodo] = useState({ id: null, text: "" });
  const [isEditing, setIsEditing] = useState(false);

  const AddTodo = () => {
    if (newTodo.length === 0) return; 
    setTodos([...todos, { id: Date.now(), text: newTodo }]); 
    setNewTodo(""); 
  };

  const Remove = (id) => {
    setTodos(todos.filter(todos => todos.id !== id));
  }

  const Edit = (id) => {
    const todoToEdit = todos.find(todos => todos.id === id);
    setEditedTodo({ id: todoToEdit.id, text: todoToEdit.text });
    setIsEditing(true);
  }

  const EditChange = (event) => {
    setEditedTodo({ ...editedTodo, text: event.target.value });
  }

  const EditSubmit = () => {
    const editedTodos = todos.map(todo =>
      todo.id === editedTodo.id ? { ...todo, text: editedTodo.text } : todo
    );
    setTodos(editedTodos);
    setEditedTodo({ id: null, text: "" });
    setIsEditing(false);
  }

  return (
    <>
      <div>
        {!isEditing && (
          <>
            <input
              type="text"
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}  
            />
            <button onClick={AddTodo}>Submit</button>
          </>
        )}
        {isEditing && (
          <div>
            <input
              type="text"
              value={editedTodo.text}
              onChange={EditChange}  
            />
            <button onClick={EditSubmit}>Save</button>
          </div>
        )}
        <thead>
          {todos.map((todo, index) => (
            <div  key={index}>
              <tr>
                <th>{todo.text}
                <button className='dd' onClick={() => Edit(todo.id)}>Edit</button>
                <button className='dd' onClick={() => Remove(todo.id)}>Remove</button> 
                </th>
              </tr>
            </div>
          ))}
        </thead>
      </div>
    </>
  );
}

export default App;
