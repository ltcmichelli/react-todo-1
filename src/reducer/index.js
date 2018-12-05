const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDNEWTODO":{
    return {todos: [...state.todos, payload]}
    }
  case "UPDATE":{
    console.log(state.todos)
    var result = state.todos.map(todo => {
      if (todo.id === payload.id)
        return payload
      else
        return todo
    })
    return {todos:result}
  }
  default:
    return state
  }
}
