import Hamburger from './Hamburger';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='nav-container'>
        <Hamburger />
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
        <ul className='nav-list mobile'>
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
      </nav>
    </>
  );
};

export default Navbar;
