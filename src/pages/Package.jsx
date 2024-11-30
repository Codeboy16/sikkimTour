import React, { useState,useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Card from '../component/Card';
import gangtok from '../../public/img/gtk_one.jpg';

const Package = () => {
  const [userData, setUserData] = useState(null);
  return (
    <>
      <Header /> {/* Provide a default name */}
      <div>Package</div>
      <div className='container flex flex-wrap'>
        <Card img={gangtok} title="Gangtok" des="Gangtok Place" price="4500/-" />
        
      </div>
      <Footer />
    </>
  );
};

export default Package;
