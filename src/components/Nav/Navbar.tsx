import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import removeSideBar from '../../hooks/removeSideBar';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const animateBurger = () => {
    setIsActive((prev) => !prev);
  };

  removeSideBar(() => setIsActive(false));

  return (
    <>
      <nav className='nav-container'>
        <Hamburger isActive={isActive} animateBurger={animateBurger} />
        <ul className='nav-list desktop'>
          <li className='nav-list_item'>
            <a href='/'>_o mnie</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_skills</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_projekty</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_kontakt</a>
          </li>
        </ul>
        <ul className={`nav-list mobile ${isActive ? 'is-active' : ''}`}>
          <li className='nav-list_item'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_o mnie</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_skills</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_projects</a>
          </li>
          <li className='nav-list_item'>
            <a href='/'>_contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
