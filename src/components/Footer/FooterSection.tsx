import React from 'react';
import './FooterSection.css';

const FooterSection: React.FC = () => {
  const currentYear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <>
      <div className='footer'>
        <p className='footer_year'>
          ©{currentYear()} &nbsp;
          <a
            aria-label='link to portfolio site'
            className='footer_link'
            href='https://github.com/JerryWski'
          >
            Jerry_Wski
          </a>
          &nbsp; Wszelkie prawa zastrzeżone
        </p>
      </div>
    </>
  );
};

export default FooterSection;
