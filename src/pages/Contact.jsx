import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Contact = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [userEmail, setEmail] = useState('');



  return (
    <>
      <Header />
      <div className='mx-auto border text-center'>
        <h1 className='text-center text-2xl py-5'>Please Provide Your Details</h1>
        <input
          type="number"
          placeholder='Enter Your User Id'
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          className='border border-solid my-2'
        />
        <br />
        <input
          type="text"
          placeholder='Enter Your Name'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className='border border-solid my-2'
        />
        <br />
        <input
          type="email"
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
          value={userEmail}
          className='border border-solid my-2'
        />
        <br />
        <button className='btn btn-primary' >Submit</button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;