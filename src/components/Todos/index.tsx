import { Divider, List } from '@mui/material';
import React from 'react';
import { TodoItem } from './interfaces';
import Todo from './Todo';

const Todos = ({
  todos,
  handleChecked,
}: {
  todos: TodoItem[];
  handleChecked: (value: number) => void;
}) => {
  return (
    <List>
      {todos.length
        ? todos.map((todo, index) => (
            <React.Fragment key={`todo_${index}`}>
              <Todo
                todo={todo}
                handleChecked={() => handleChecked(index)}
                index={index}
              />
              <Divider variant="fullWidth" component="li" />
            </React.Fragment>
          ))
        : 'The list is empty'}
    </List>
  );
};

export default Todos;
