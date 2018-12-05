import {connect} from "react-redux";
import TodoInput from "../components/TodoInput"

const mapDispatchToProps = (dispatch) => ({

    addNewTodo: newTodo => {
        const newTodoItem ={
            content: newTodo,
            status: "active"
        }
        fetch("http://localhost:8080/api/todos", {
            mode: 'cors', 
            method: 'POST', 
            body: JSON.stringify(newTodoItem),
            headers: new Headers({
                'Content-Type': 'application/json'
            }), 
        })
        .then(res => res.json())
        .then(res => dispatch({
            type: "ADDNEWTODO",
            payload: {
                id:res.id, 
                status:res.status, 
                content:res.content
            }
        }))
      
    }
  })
  
export default connect(null, mapDispatchToProps)(TodoInput);
  