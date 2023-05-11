import React from 'react';

//Styles
import '../../components/Navbar/Navbar.css';


function Navbar(props) {

  
    const handleFilter = (event) => {
        console.log(event.target.value);
        props.onFilter(event.target.value);
      };

    return (
        
        <div className="container-fluid">
            <div className='alignElem'>
                <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="Logo" className="imgLogo d-inline-block align-text-top" />
                <a className="navbar-brand colorTitle" href="https://rickandmortyapi.com/documentation/#get-all-characters">
                    Wiki
                </a>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2 formSize" type="search" placeholder="Search" aria-label="Search" value={props.searchTerm} onChange={handleFilter} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
       
        
    );
  }
  
  export default Navbar;
  