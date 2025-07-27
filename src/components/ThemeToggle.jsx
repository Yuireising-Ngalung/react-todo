import { useContext } from "react"
import { todoContext } from "../context/todoContext";

export default function ThemeToggle(){

    const {theme, handleThemeToggle} = useContext(todoContext);

    return(<>
        <section className="container p-3 d-flex justify-content-end">
            {
                theme === 'light' 
                ?
                <button className="btn btn-dark" onClick={()=> handleThemeToggle()}><i className="fa-solid fa-cloud-sun"></i> Dark</button>
                :
                <button className="btn btn-light" onClick={()=> handleThemeToggle()}><i className="fa-solid fa-sun"></i> Light</button>
            }
            
            
        </section>
    </>)
}