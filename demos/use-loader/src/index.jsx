import * as React from 'react';
import * as Server from 'react-dom/server';
import './index.css';

const Greet = () => {
  return (
    <h1 className='title'>Hello, world!</h1>
  )
}

console.log(Server.renderToString(<Greet />))
