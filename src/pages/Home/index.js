import React from 'react';
import Topo from './components/Topo';
import Producers from './components/Producers';

const Home = () => {
  return (
    <>
      <Producers top={Topo}/>
    </>
  );
}

export default Home;