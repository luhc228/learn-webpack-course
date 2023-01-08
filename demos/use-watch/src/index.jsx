import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

const Greet = () => {
  return (
    <h1 className='title'>Hello, world!</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greet />)
