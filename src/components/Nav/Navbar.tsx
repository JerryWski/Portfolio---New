import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-list desktop'>
          <li className='nav-list_item'><a href="/">_o mnie</a></li>
          <li className='nav-list_item'><a href="/">_bio</a></li>
          <li className='nav-list_item'><a href="/">_projekty</a></li>
          <li className='nav-list_item'><a href="/">_kontakt</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
