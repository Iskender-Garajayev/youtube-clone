import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div>
      <Header />
      <div className='main-container'>
        <Sidebar />
        <div className='main-inner'>
          <p>main</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
