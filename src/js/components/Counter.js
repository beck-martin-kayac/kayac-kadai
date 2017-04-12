import React, { PropTypes } from 'react';

const Counter = ({ onClick, value, onIncrement }) => (
        <li>
          <button onClick={onIncrement}>+</button>
          <span>count: </span>
          <span>{value}</span>
        </li>
   )
    
    Counter.propTypes = {
      onClick: PropTypes.func.isRequired,
      value: PropTypes.number.isRequired,
      onIncrement: PropTypes.func.isRequired
    }

export default Counter


    
    // const rootEl = document.getElementById('root');
    // const store = createStore(counter);
   
    // const render = () =>
    //     ReactDOM.render(
    //         <Counter 
    //           value = {store.getState()}
    //           onIncrement ={() => store.dispatch({ type: 'INCREMENT' })}
    //         />, 
    //             rootEl
    //         );
    
    // render();
    // store.subscribe(render);
    // 