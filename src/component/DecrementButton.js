
import React       from 'react'
import { adapter } from '../redux'

function DecrementButton(props) {
  return <button onClick={props.decrement}>-</button>
}

export default adapter(DecrementButton);
