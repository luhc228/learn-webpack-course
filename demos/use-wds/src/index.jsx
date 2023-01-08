import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

const Greet = () => {
  return (
    <>
      <h1 className='title'>
        {/* 更新下面的内容，然后手动刷新浏览器查看最新的内容  */}
        Hello, World!
      </h1>
      <br />
      Your Name: <input />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greet />)
