import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

const TodoItem = ({ deleteTodo, editTodo, todo, completeTodo }) => {
  const [editing, setEditing] = useState(false);
  const handleCompleted = useMemo(() => classnames({ completed: todo.completed }), [todo.completed])
  const handleDeleteTodo = useCallback(id => deleteTodo(id), [deleteTodo])
  const handleEditTodo = useCallback((id, text) => editTodo(id, text), [editTodo])
  const handlerDeleteTodo = useCallback(() => deleteTodo(todo.id), [deleteTodo, todo.id])
  const handleCompleteTodo = useCallback(() => completeTodo(todo.id), [completeTodo, todo.id])
  const handleOnSave = useCallback(text => handleSave(todo.id, text), [handleSave, todo.id])

  const handleDoubleClick = useCallback(() =>
    setEditing(true), [setEditing]);

  const handleSave = useCallback((id, text) => {
    if (text.length === 0) {
      handleDeleteTodo(id)
    } else {
      handleEditTodo(id, text)
    }
    setEditing(false);
  }, [handleDeleteTodo, handleEditTodo]);

  let element
  if (editing) {
    element = (
      <TodoTextInput text={todo.text}
        editing={editing}
        onSave={handleOnSave} />
    )
  } else {
    element = (
      <div className="view">
        <input className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleCompleteTodo} />
        <label onDoubleClick={handleDoubleClick}>
          {todo.text}
        </label>
        <button className="destroy"
          onClick={handlerDeleteTodo} />
      </div>
    )

    return (
      <li className={handleCompleted, editing}>
        {element}
      </li>
    )
  }
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }
}
export default TodoItem;