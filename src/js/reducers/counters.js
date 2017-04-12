const counter =  (state = { }, action) => {
        switch(action.type) {
            case 'ADD_COUNTER':
              return {
                id: action.id,
                value: 0
              }
            case 'INCREMENT':
              return state.value + 1;
            default:
              return state;
        }
}

const counters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [
        ...state,
        counter(undefined, action)
      ]
    case 'INCREMENT':
      return state.map(t =>
        counter(t, action)
      )
    default:
      return state
  }
}

export default counters;