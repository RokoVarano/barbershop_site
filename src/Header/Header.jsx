import React from 'react';

const Header = () => (
  <nav className="header">
    <div className="header-card">
      <div className="header-title">
        <div className="blue-square" />
        <h1 className="alphaKayser">{'AlphaKayser  '}</h1>
      </div>
      <h3 className="header-subtitle">Estilista</h3>
    </div>
    <ul className="button-list">
      <li><h3>Boton 1</h3></li>
      <li><h3>Boton 2</h3></li>
      <li><h3>Boton 3</h3></li>

    </ul>
  </nav>
);

export default Header;
