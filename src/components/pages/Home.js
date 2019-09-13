import React from 'react';
import Navbar from '../layout/Navbar';
import Gallery from '../layout/Gallery';
import squad from '../../data/squad';

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-center'>My Character Squad</h1>
      <Gallery squad={squad} />
    </div>
  );
};

export default Home;
