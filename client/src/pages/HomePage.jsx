import React from 'react'
import Navabar from '../components/Navabar';
import Slide from '../components/Slide';
import Categories from '../components/Categories';

const HomePage = () => {
  return (
    <div>
      {" "}
      <Navabar />
      <Slide />
      <Categories />
    </div>
  );
}

export default HomePage