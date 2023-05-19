/* eslint-disable */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  return (
  <ul className='todo-list'>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
  )
};
export default TodosList;
