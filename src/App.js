import React, { useState } from 'react';
import { Menu } from './components/mol.menu/menu';
import { Header } from './components/mol.header/header'

export function App() {
  const [MenuOpened, setMenuOpened] = useState(false)
  
  const openMenu = () => {
    setMenuOpened(!MenuOpened)
  }

  return (
    <div className="App" style={{backgroundColor: 'red'}}>
      <Header handleMenuClick={openMenu}/>
      <Menu opened={MenuOpened} handleClick={openMenu}></Menu>
    </div>
  );
}
  