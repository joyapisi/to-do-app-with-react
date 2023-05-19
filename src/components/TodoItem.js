/* eslint-disable */
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
  <li className="item">
    <div className="content" style={viewMode}>
      <input
        type="checkbox"
        className="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button className="edit-btn" onClick={handleEditing}>
        <AiFillEdit />
      </button>
      <button className="trash-btn" onClick={() => delTodo(itemProp.id)}>
        <FaTrash />
      </button>
        {itemProp.title}
    </div>
    <input
      type="text"
      value={itemProp.title}
      className="textInput"
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
  </li>
  );
  };
export default TodoItem;
