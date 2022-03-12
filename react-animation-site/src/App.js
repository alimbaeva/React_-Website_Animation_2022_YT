import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderDate } from './data/SliderDate';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderDate} />
    </>
  );
}

export default App;
