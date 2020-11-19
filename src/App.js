import React, {useState, useEffect} from 'react';
// import {Button} from './components/atm.button/button'
// import {Header} from './components/mol.header/header'

export function App() {
  const [repositories, setRepositories] = useState([]);
  const [filtereds, setFiltereds] = useState([]);
  // const getLastId = () => { 
  //   return repositories[repositories.length - 1].id + 1
  // }
  // const handleAddRepository = () => {
  //   setRepositories([...repositories, {id: getLastId(), name: 'Novo Repo'}])
  // }
// eslint-disable-next-line
  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/yugom/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    setFiltereds(filtered);
  }, [repositories])

  const handleFavorite = id => {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo;
    })
    setRepositories(newRepositories);
  }

  return (
    <div className="App">
      {/* <Button children='Continuar' kind='secondary' outline={true} expanded={true}/> */}
      {/* <Header/> */}
      <h2>{filtereds.length}</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.key}>
            {repo.name}
            {repo.favorite && <span>favorito</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
      {/* <button onClick={handleAddRepository}>
        Adicionar repositório
      </button> */}
    </div>
  );
}
  