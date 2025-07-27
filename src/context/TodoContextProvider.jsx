import { useEffect, useReducer, useState } from "react"
import { todoContext } from "./todoContext"
import { todoReducer } from "../reducer/todoReducer";

export default function TodoContextProvider({children}){
    const [todos,setTodos]  = useState('');
    const initialValues = JSON.parse(localStorage.getItem('todos')) || [];
    const [todoList, dispatch] = useReducer(todoReducer, initialValues);
    const [theme, setTheme] = useState('light');
    

    const handleAddTodo = () => {
        if(todos === '') return;
        dispatch({type:'add', todoValue:todos})
        setTodos('')
    }

    const handleThemeToggle = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return(<todoContext.Provider 
        value={
            {   
                todos, 
                setTodos, 
                todoList, 
                dispatch, 
                handleAddTodo,
                theme,
                handleThemeToggle
            }
        }
    >
        {children}
    </todoContext.Provider>)
}