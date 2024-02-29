import './App.css';
import TodoForm from './component/Todoform';
import TodoItem from './component/Todoitem';
import { ContextProvider } from './conetxtapi/contextapi';
import { useState } from 'react';

function App() {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos(
      (prev) => [...prev, { ...todo }]
    )
  }
  const updatetodo = (id, todo) => {
    settodos((prev) => prev.map((prev) => (prev.id === id ? todo : prev))
    )
  }
  const deletetodo = (id) => {
    settodos(
      (prev) => 
        prev.filter((item) => item.id !== id)
      
    )
  }
  const togglecomplete = (id) => {
    settodos(
      (prev) =>
        prev.map((prev) => (prev.id === id ? {...prev, completed: !prev.completed} : prev)
        )
    )
  }
  return (
    <ContextProvider value={{ todos, addtodo, deletetodo, updatetodo, togglecomplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div id={todo.id} className='w-full'>
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>



  );
}

export default App;
