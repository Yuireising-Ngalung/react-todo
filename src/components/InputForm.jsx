import { useContext } from "react"
import { todoContext } from "../context/todoContext"

export default function InputForm(){

    const {todos, setTodos, handleAddTodo} = useContext(todoContext);

    return(<>
        <div className="container shadow py-3">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group d-flex gap-2">
                    <input 
                        type="text" 
                        value={todos}
                        onChange={(e)=> setTodos(e.target.value)}
                        placeholder="enter todo..." 
                        className="form-control"
                    />

                    <button 
                        className="btn btn-success"
                        type="submit"
                        onClick={()=> handleAddTodo()}
                    >ADD</button>
                </div>
            </form>
        </div>
    </>)
}