const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDNEWTODO":{
    return {todos: [...state.todos, payload]}
    }
  default:
    return state
  }
}
