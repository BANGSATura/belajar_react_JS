import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/home/App.js';

function appRouter() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact Component={App}/>
      </div>
    </BrowserRouter>
  );
}
export default appRouter;
