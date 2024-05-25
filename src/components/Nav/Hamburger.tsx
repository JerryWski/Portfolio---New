import './Hamburger.css';

const Hamburger = () => {
  return (
    <button className="hamburger hamburger--slider " type="button" aria-label='menu'>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>  
  )
}

export default Hamburger
