import { useState } from 'react';
import './Hamburger.css';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const animateBurger = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={animateBurger}
      className={`hamburger hamburger--slider ${isActive ? 'is-active' : ''}`}
      type='button'
      aria-label='menu'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};

export default Hamburger;
