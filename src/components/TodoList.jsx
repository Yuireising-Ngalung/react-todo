import { useContext } from "react"
import { todoContext } from "../context/todoContext"
import Popup from "./Popup";

export default function TodoList(){

    const {todoList, dispatch} = useContext(todoContext);

    return(<>
        <div className="container my-5 d-flex align-items-center flex-column gap-2">
            {
                todoList && todoList.map((todo, todoIndex) => {
                    return(
                        <div 
                            key={todoIndex} 
                            className="listItems d-flex justify-content-between bg-light p-3"
                            style={{width:'min(100%, 900px)'}}
                        >
                            <span> {todo}</span>
                            <div className="d-flex gap-4">
                                <i 
                                    className="fa-solid fa-pen-to-square" 
                                    style={{color:'blue', cursor:'pointer'}}
                                ></i>
                                
                                <i 
                                    className="fa-solid fa-trash" 
                                    style={{color:'red', cursor:'pointer'}}
                                    onClick={()=> dispatch({type:'delete', index:todoIndex})}
                                ></i>
                            </div>
                        </div>
                        
                    )
                })
            }
            
             
        </div>
    </>)
}