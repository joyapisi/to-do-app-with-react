/* eslint-disable */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);
export default TodosList;
