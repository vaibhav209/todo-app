import React, { useState } from 'react';
import Inputfields from '../Inputfields/Inputfields';
import Button from '../Button/Button';
import styles from './Todo.module.css';

const Todo = () => {
  const [task, setTask] = useState('');
  const [item, setItem] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    const newItem = { task };
    setItem([...item, newItem]);
    setTask('');
  };

  const handleDeleteTodo = (index) => {
    const updatedItems = [...item];
    updatedItems.splice(index, 1);
    setItem(updatedItems);
    setEditMode(false);
  };

  const handleEditTodo = (index) => {
    setTask(item[index].task);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedItems = [...item];
    updatedItems[editIndex] = { task };
    setItem(updatedItems);
    setTask('');
    setEditMode(false);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setTask('');
    setEditMode(false);
    setEditIndex(null);
  };

  return (
    <>
      <div className={styles.todoContainer}>
        <h1>A Todo App</h1>
        <div className={styles.inputContainer}>
          <div>
            <Inputfields inputchange={handleInputChange} value={task} />
            {editMode ? (
              <div className={styles.btnSaveEdit}>
                <Button btnName="Save" onClick={handleSaveEdit} />

                <Button btnName="Cancel" onClick={handleCancelEdit} />
              </div>
            ) : (
              <Button
                btnName="Add Task"
                onClick={handleAddTodo}
                disabled={!task}
              />
            )}
          </div>

          <div className={styles.todoList}>
            <ul>
              {item.map((element, index) => (
                <li key={index}>
                  {element.task}
                  <div className={styles.btnAligns}>
                    <Button
                      btnName="Edit"
                      onClick={() => handleEditTodo(index)}
                    />
                    <Button
                      btnName="Delete"
                      onClick={() => handleDeleteTodo(index)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
