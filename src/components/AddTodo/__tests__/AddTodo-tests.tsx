import AddTodo from '..';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Todos value changes after new todo gets added', () => {
  const todos: string[] = [];
  render(<AddTodo handleAddTodo={(value) => todos.push(value)} />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  expect(todos).toStrictEqual(['test']);
});
