import React from 'react';
import './SearchContainer.css';
import SearchIcon from '../../../../../images/search_icon.svg';

const SearchContainer = () => {
  return (
    <div className="search-container">
      <h1 className="title-student">Alumnos</h1>

      <div className="search-bar">
        <img alt="" className="search-icon" src={SearchIcon} />
        <input
          className="search-input"
          type="text"
          placeholder="Buscar por Nombre, Email o Palabra clave..."
        />
      </div>
    </div>
  );
};

export default SearchContainer;
