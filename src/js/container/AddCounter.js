import React from 'react'
import { connect } from 'react-redux'
import { addCounter } from '../actions'

let AddCounter = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCounter())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Counter
        </button>
      </form>
    </div>
  )
}
AddCounter = connect()(AddCounter)

export default AddCounter