/* TERMINAL EXECUTION COMMAND LINE
cd server 
node server.js

cd client
npm start

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App2, App } from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App2 />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
