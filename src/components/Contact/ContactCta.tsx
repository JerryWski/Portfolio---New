import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import './ContactCta.css';

const ContactCta = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-200px 0px' });

  useEffect(() => {
    if (isInView) {
      setTriggered(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isInView]);

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
    <>
      <div ref={ref} className='container'>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className='lists-block'
        >
          <span className='link-sh'>Shortcuts</span>
          <ul className='link-list'>
            {links.map((link, index) => (
              <motion.li
                key={link.href}
                transition={{ delay: isOpen ? 0.1 * index : 0, duration: 0.3 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
              >
                <a href={link.href}>{link.text}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className='word'>
          Let's W
          <button className='letter' onClick={handleToggle}>
            <motion.span
              className='custom-radio'
              animate={{ x: isOpen ? -20 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.span>
          </button>
          rk Together
        </div>
        <motion.div
          className='slider'
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: isOpen ? 0 : -200, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </>
  );
};

export default ContactCta;
