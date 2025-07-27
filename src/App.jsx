import { useContext } from 'react';
import InputForm from './components/InputForm';
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';
import { todoContext } from './context/todoContext';

function App() {

  const {theme} = useContext(todoContext);

  const themeStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    minHeight: '100vh',
  }

  return (
    <>
      <section className='container-fluid py-5' style={themeStyle}>
        <ThemeToggle />
        <h1 className='text-center mb-5 text-info fw-bold'>TODO APP</h1>
        <InputForm />
        <TodoList />
      </section>
    </>
  )
}

export default App
