import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import infoSection from './components/infoSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderDate } from './data/SliderDate';
import GlobalStyle from './globalStyle';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderDate} />
      <infoSection />
    </>
  );
}

export default App;
