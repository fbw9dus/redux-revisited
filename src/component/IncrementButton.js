
import React       from 'react'
import { adapter } from '../redux'

function IncrementButton(props) {
  return <button onClick={props.increment}>+</button>
}

export default adapter(IncrementButton);
