import React, { PropTypes } from 'react'
import Counter from './Counter'

const CounterList = ({ counters }) => (
  <ul>
    {counters.map(counter =>
      <Counter
        key={counter.id}
        {...counter}
        onClick={() => onCounterClick(counter.id)}
      />
    )}
  </ul>
)

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CounterList