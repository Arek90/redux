import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TodoTextInput = ({ onSave, newTodo, editing, placeholder }) => {
  const [text, setText] = useState('');
  const className = useMemo(classnames({ edit: editing, 'new-todo': newTodo }), [editing, newTodo]);

  const handleSubmit = useCallback(e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      onSave(text)
      if (newTodo) {
        setText('');
      }
    }
  }, [onSave, newTodo]);

  const handleChange = useCallback(e => {
    setText(e.target.value);
  }, []);

  const handleBlur = useCallback(e => {
    if (!newTodo) {
      onSave(e.target.value)
    }
  }, [newTodo, onSave]);

  return (
    <input className={className}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit} />
  )

}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput;