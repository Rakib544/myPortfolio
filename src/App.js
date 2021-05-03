import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Sidebar from './components/Home/Navbar/Sidebar/Sidebar';
import Backdrop from './components/Home/Navbar/Backdrop/Backdrop';

import './App.css'
import NotFound from './components/NotFound/NotFound';

const App = () => {
  const [toggleSlide, setToggleSlide] = useState(false)
  return (
      <BrowserRouter>
      <Navbar click={() => setToggleSlide(!toggleSlide)} />
      <Backdrop show={toggleSlide} click={() => setToggleSlide(false)} />
      <Sidebar show={toggleSlide} click={() => setToggleSlide(false)} />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/projects">

          </Route>
          <Route path="/blog">

          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default App;