import React from 'react';
import { NavLink } from 'react-router-dom';



const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'all' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'  
    }}
  >
  {children}
  </NavLink>
);



const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='all'>
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter='active'>
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter='completed'>
      Completed
    </FilterLink>
  </p>
);

export default Footer;