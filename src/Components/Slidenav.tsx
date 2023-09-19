import React from 'react';
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from 'react-router-dom';

const Slidenav = () => {
  return (
  <nav className='sidenav box bg-3'>
    <FintechSVG title='Fintech Logo'/>
    <ul>
      <li>
        <span>
          <img src={resumo} />
        </span>
        <NavLink to='/'>Resumo</NavLink>
      </li>
      <li>
      <span>
          <img src={vendas} />
        </span>
        <NavLink to='/vendas'>Vendas</NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Slidenav