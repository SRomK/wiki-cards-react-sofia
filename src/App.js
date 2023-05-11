import React, { useEffect, useState } from 'react';

//Styles
import './App.css';

//Components
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar';


function App() {

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const data = await response.json()
      setCharacters(data.results)
    }

    fetchData();
  }, [])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div className='App'>
      <Navbar onFilter={setSearchTerm}/>
      <Cards characters={filteredCharacters}/>
    </div>
      
  );
}

export default App;
