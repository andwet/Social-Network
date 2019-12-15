import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Firefox_Project_Logo%2C_2019.svg/1024px-Firefox_Project_Logo%2C_2019.svg.png'></img>
    </header>
  )
}

export default Header;