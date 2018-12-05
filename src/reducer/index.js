const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDNEWTODO":{
    var newTodos = state.todos.concat(state.todos, payload)
    return {todos: state.todos.concat(state.todos, payload)}
    }
  default:
    return state
  }
}
