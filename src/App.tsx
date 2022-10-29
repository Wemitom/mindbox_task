import { Card } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { TodoItem } from './components/Todos/interfaces';
import { Filter } from './interfaces';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const activeTodos = todos.filter((todo) => !todo.completed).length;

  const handleChecked = (value: number) => {
    setTodos([
      ...todos.map((todo, index) => {
        if (index === value) {
          return { text: todo.text, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    ]);
  };

  const filterTodos = (filter: Filter): TodoItem[] => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'all':
        return todos;
      default:
        return [];
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="todos__main">
        <AddTodo
          handleAddTodo={(value) =>
            setTodos([...todos, { text: value, completed: false }])
          }
        />
        <Card className="todos__card" variant="outlined">
          <Todos todos={filterTodos(filter)} handleChecked={handleChecked} />
          {todos.length ? (
            <Stack
              direction="row"
              justifyContent="space-evenly"
              className="todos__card-footer"
            >
              <p>{activeTodos} items left</p>
              <span className="todos__card-filters">
                <button
                  className={`btn-filter${filter === 'all' ? ' selected' : ''}`}
                  onClick={() => setFilter('all')}
                  data-testid="filter_1"
                >
                  All
                </button>
                <button
                  className={`btn-filter${
                    filter === 'active' ? ' selected' : ''
                  }`}
                  onClick={() => setFilter('active')}
                  data-testid="filter_2"
                >
                  Active
                </button>
                <button
                  className={`btn-filter${
                    filter === 'completed' ? ' selected' : ''
                  }`}
                  onClick={() => setFilter('completed')}
                  data-testid="filter_3"
                >
                  Completed
                </button>
              </span>
              <button
                onClick={() =>
                  setTodos([...todos.filter((todo) => !todo.completed)])
                }
                className="btn-clear"
                data-testid="clear"
              >
                Clear completed
              </button>
            </Stack>
          ) : (
            <></>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
