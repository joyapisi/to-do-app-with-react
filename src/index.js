import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Navbar from './components/Nav';
// import App from './App';
import TodoApp from './components/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <TodoApp />
  </React.StrictMode>,
);
