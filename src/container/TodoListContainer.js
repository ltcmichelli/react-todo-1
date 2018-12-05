import {connect} from "react-redux";
import TodoList from '../components/TodoList'

const mapStateToProps = state =>({
  todos: state.todos
});
const mapDispatchToProps = (dispatch) =>({
  getInitData: fetch("http://localhost:8080/api/todos", {
    mode: 'cors', 
    method: 'GET'    
  })
  .then(res => res.json())
  .then(res => {
    dispatch({
      type: "INIT",
      payload: res._embedded.todos
    })
  }),
  handleInputChange:
    dispatch({
      type: "CHECKBOX",
      payload: ''
    })
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);