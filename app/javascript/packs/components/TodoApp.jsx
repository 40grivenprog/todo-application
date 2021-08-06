import React from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  render() {
    return <p>TodoApp</p>
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('todo-app')
  let me = "Maksim"
  app && ReactDOM.render(<h1>{me}</h1>, app)
})