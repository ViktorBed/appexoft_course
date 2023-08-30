import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  const [currentTodo, setCurrentTodo] = useState("");

  const addTodo = () => {
    if (currentTodo.trim() !== "") {
      setTodos([...todos, currentTodo]);
      setCurrentTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((_, i) => i !== index);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Reactus</h1>
      <div className="flex mb-2">
        <input
          className="flex-grow border rounded-l py-2 px-3"
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button
          className="bg-green-300 hover:bg-green-500 text-white py_8 px_4 rounded-r"
          onClick={addTodo}
        >
          Add task
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              className="flex items-center justify-between border-b py-2"
              ley={index}
            >
              {todo}
              <button
                className="bg-red-200 hover:bg-red-600 text-white py-1 py-2 rounded"
                onClick={() => removeTodo(index)}
              >
                delete task
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
