import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleCounters = (counters) => {
      return counters;
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleCounters(state.counters)
  }
}

const VisibleCounterList = connect(
  mapStateToProps
)(CounterList)

export default VisibleCounterList