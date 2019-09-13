import React from 'react';
import Gallery from '../layout/Gallery';
import squad from '../../data/squad';

const Home = () => {
  return (
    <div>
      <Gallery squad={squad} />
    </div>
  );
};

export default Home;
