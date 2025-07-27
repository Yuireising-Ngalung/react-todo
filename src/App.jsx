import { useState } from 'react'
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='container my-5'>
        <h1 className='text-center mb-5 text-info fw-bold'>TODO APP</h1>
        <InputForm />
        <TodoList />
      </section>
    </>
  )
}

export default App
