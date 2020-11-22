import React, { useState } from 'react';
import { Menu } from './components/mol.menu/menu';

export function App() {
  const [MenuOpened, setMenuOpened] = useState(false)
  
  const openMenu = () => {
    setMenuOpened(!MenuOpened)
  }

  return (
    <div className="App" style={{backgroundColor: 'red'}}>
      <button onClick={openMenu}>Menu</button>
      <Menu opened={MenuOpened} handleClick={openMenu}></Menu>
    </div>
  );
}
  