import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Books </h1>
      <hr />
      <div className="links" activeKey="/">
        <NavLink href="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink href="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;