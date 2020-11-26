import React, { useState } from 'react';
import { Menu } from './components/mol.menu/menu';
import { Header } from './components/mol.header/header'

export function App() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="App" style={{ backgroundColor: 'red' }}>
      <Header handleMenuClick={openMenu} />
      <Menu opened={toggleMenu} handleClick={openMenu}></Menu>
    </div>
  );
}
