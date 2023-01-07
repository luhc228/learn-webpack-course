import * as React from 'react';
import * as Server from 'react-dom/server';

const Greet = () => {
  return (
    <h1>Hello, world!</h1>
  )
}

console.log(Server.renderToString(<Greet />))
