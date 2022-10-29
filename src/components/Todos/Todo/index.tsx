import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TodoItem } from '../interfaces';
import './styles.css';

const Todos = ({
  todo,
  handleChecked,
  index,
}: {
  todo: TodoItem;
  handleChecked: () => void;
  index: number;
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          data-testid={`checkbox_${index}`}
          onClick={() => handleChecked()}
          checked={todo.completed}
          tabIndex={index}
        />
      </ListItemIcon>
      <ListItemText
        className={`todos__item${todo.completed ? ' completed' : ''}`}
        primary={todo.text}
      />
    </ListItem>
  );
};

export default Todos;
