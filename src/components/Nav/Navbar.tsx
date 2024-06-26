import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import removeSideBar from '../../hooks/removeSideBar';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const animateBurger = () => {
    setIsActive((prev) => {
      if (!prev) {
        document.body.classList.add('sticky-body');
      } else {
        document.body.classList.remove('sticky-body');
      }
      return !prev;
    });
  };

  const handleLinkClick = () => {
    setIsActive(false);
    document.body.classList.remove('sticky-body');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('sticky-body');
    };
  }, []);

  removeSideBar(() => setIsActive(false));

  return (
    <>
      <nav className='nav-container'>
        <Hamburger isActive={isActive} animateBurger={animateBurger} />
        <ul className='nav-list desktop'>
          <li className='nav-list_item'>
            <a href='/#about'>_about</a>
          </li>
          <li className='nav-list_item'>
            <a href='/#skills'>_skills</a>
          </li>
          <li className='nav-list_item'>
            <a href='/#projects'>_projects</a>
          </li>
          <li className='nav-list_item'>
            <a href='/#contact'>_contact</a>
          </li>
        </ul>
        <ul className={`nav-list mobile ${isActive ? 'is-active' : ''}`}>
          <li className='nav-list_item'>
            <a onClick={handleLinkClick} href='/'>Home</a>
          </li>
          <li className='nav-list_item'>
            <a onClick={handleLinkClick} href='/#about'>_o mnie</a>
          </li>
          <li className='nav-list_item'>
            <a onClick={handleLinkClick} href='/#skills'>_skills</a>
          </li>
          <li className='nav-list_item'>
            <a onClick={handleLinkClick} href='/#projects'>_projects</a>
          </li>
          <li className='nav-list_item'>
            <a onClick={handleLinkClick} href='/#contact'>_contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
