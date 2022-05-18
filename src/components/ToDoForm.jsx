import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    // A linha abaixo faz com que ao clicar no botão, a página não recarregue
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('')
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" placeholder="Inserir tarefa" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
      <button className='todo-btn'>Adicionar</button>
    </form>
  )
}

export default ToDoForm