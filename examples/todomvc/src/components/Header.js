import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => {
  const handleOnSave = useCallback(text => {
    if (text.length !== 0) {
      addTodo(text)
    }
  }, [addTodo])

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleOnSave}
        placeholder="What needs to be done?"
      />
    </header>
  )

  Header.propTypes = {
    addTodo: PropTypes.func.isRequired
  }
}

export default Header
