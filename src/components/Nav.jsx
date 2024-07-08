import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div>Nav</div>
    <Link to="/">Main</Link>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </>
  )
}

export default Nav