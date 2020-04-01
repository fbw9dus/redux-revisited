
import React       from 'react'
import { adapter } from '../redux'

function Output(props) {
  return <h1>{props.value}</h1>
}

export default adapter(Output);
