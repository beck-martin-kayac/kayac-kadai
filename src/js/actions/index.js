let nextCounterId = 0
export const addCounter = () => {
  return {
    type: 'ADD_COUNTER',
    id: nextCounterId++
  }
}