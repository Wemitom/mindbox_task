import { OutlinedInput } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './styles.css';

const AddTodo = ({
  handleAddTodo,
}: {
  handleAddTodo: (value: string) => void;
}) => {
  const [input, setInput] = useState('');

  return (
    <>
      <OutlinedInput
        placeholder="What needs to be done?"
        className="todos__add"
        value={input}
        startAdornment={
          <AddIcon
            style={{ cursor: 'pointer' }}
            onClick={() => {
              handleAddTodo(input);
              setInput('');
            }}
          />
        }
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo(input);
            setInput('');
          }
        }}
      />
    </>
  );
};

export default AddTodo;
