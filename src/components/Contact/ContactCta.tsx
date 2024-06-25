import { motion } from 'framer-motion';
import { useState } from 'react';
import './ContactCta.css';

const ContactCta = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='container'>
        <ul className='link-list'>
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.1 * index : 0, duration: 0.3 }}
            >
              <a href={link.href}>{link.text}</a>
            </motion.li>
          ))}
        </ul>
        <div className='word'>
          Let's W
          <span className='letter' onClick={handleToggle}>
            o
          </span>
          rk Together
        </div>
        <motion.div
          className='slider'
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ContactCta;
