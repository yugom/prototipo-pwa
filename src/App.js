import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from './components/mol.menu/menu';
import { Header } from './components/mol.header/header'
import { Home } from './pages/home'
import { About } from './pages/about'

export function App() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="App" >
      <Header handleMenuClick={openMenu} />
      <Router>
        <Menu opened={toggleMenu} handleClick={openMenu}></Menu>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </Router>
    </div>
  );
}
