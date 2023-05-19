/* eslint-disable */
import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    } else {
      alert('Please add item');
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <IconContext.Provider
          value={{
            color: "#5e5e5e",
            style: { fontSize: "20px", color: "#ff0000" },
            className: "submit-iconn",
          }}
        >
          <button className="input-submit">
            <FaPlusCircle />
          </button>
        </IconContext.Provider>
      </form>
      <span className="submit-warning">
        {' '}
        {message}
        {' '}
      </span>
    </>
  );
};
export default InputTodo;
