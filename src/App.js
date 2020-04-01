import React from 'react';
import './App.css';

import Output          from './component/Output'
import IncrementButton from './component/IncrementButton'
import DecrementButton from './component/DecrementButton'

function App(){
  return (
    <div className="App">
      <Output/>
      <IncrementButton/>
      <DecrementButton/>
    </div>
  );
}

export default App;
