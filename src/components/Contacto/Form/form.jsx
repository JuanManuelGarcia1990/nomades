import React from 'react'

const Form = ({input,handleInput, handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ingresa un texto"
        onChange={handleInput}
        value={input}
      />
      <input type="submit" value="Enviar"/>
      </form>
  )
}

export default Form