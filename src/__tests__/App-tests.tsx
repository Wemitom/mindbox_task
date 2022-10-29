import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Active items label text is correct', () => {
  render(<App />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');

  expect(screen.getAllByText('2 items left').length).toBe(1);
});

test('All filter renders correct amount of list items', () => {
  render(<App />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.click(screen.getByTestId('checkbox_1'));

  // Разделитель рендерится после каждого элемента списка, т.е. кол-во разделителей = кол-ву элеметов
  expect(screen.getAllByRole('separator').length).toBe(2);
});

test('Active filter renders correct amount of list items', () => {
  render(<App />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.click(screen.getByTestId('checkbox_1'));
  userEvent.click(screen.getByTestId('filter_2'));

  expect(screen.getAllByRole('separator').length).toBe(1);
});

test('Completed filter renders correct amount of list items', () => {
  render(<App />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.click(screen.getByTestId('checkbox_1'));
  userEvent.click(screen.getByTestId('filter_2'));

  expect(screen.getAllByRole('separator').length).toBe(1);
});

test('Clear completed removes completed todos from the list', () => {
  render(<App />);
  userEvent.click(screen.getByPlaceholderText('What needs to be done?'));
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.keyboard('test');
  userEvent.keyboard('{Enter}');
  userEvent.click(screen.getByTestId('checkbox_1'));
  userEvent.click(screen.getByTestId('clear'));

  expect(screen.getAllByRole('separator').length).toBe(1);
});
