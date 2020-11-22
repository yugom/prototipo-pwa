import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu } from './components/mol.menu/menu';
import { Header } from './components/mol.header/header'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Login } from './pages/login'

export function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [login, setLogin] = useState(false);

  const handleLoginClick = () => {
    setLogin(true);
  }

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="App" >
      {login && <Header handleMenuClick={openMenu} />}
      <Router>
        <Menu opened={toggleMenu} handleClick={openMenu}/>
        <Switch>
          <Route path={'/'} exact component={login ? Home : () => <Login handleClick={handleLoginClick} />} />
          <Route path={'/about'} component={About} />
        </Switch>
      </Router>
    </div>
  );
}
