const initialState = {
    todos: [],
    checked: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDNEWTODO":{
    return {...state, todos: [...state.todos, payload]}
    }
  case "UPDATE":{
    var result = state.todos.map(todo => {
      if (todo.id === payload.id)
        return payload
      else
        return todo
    })
    return {...state, todos:result}
  }
  case "INIT":{
    return {...state, todos: payload}
  }
  case "CHECKBOX":{
    const check = state.checked ? false : true
    return {...state, checked: check}
  }
  default:
    return state
  }
}
