import {connect} from "react-redux";
import TodoInput from "../components/TodoInput"

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: newToDo => {
      dispatch({
        type: "ADDNEWTODO",
        payload: newToDo
      })
    }
  })
  
export default connect(null, mapDispatchToProps)(TodoInput);
  