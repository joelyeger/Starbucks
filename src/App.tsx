import React from 'react';
import './App.css';
import FirstPic from "./components/FirstPic";
import GreenBox from './components/GreenBox';
import SecondPic from './components/SecondPic';
import BrownBox from './components/BrownBox';
import ThirdPic from './components/ThirdPic';
import PinkBox from './components/PinkBox';
import ForfthPic from './components/ForfthPic';
import BlueBox from './components/BlueBox';
import FifthPic from './components/FifthPic';
import GrayBox from './components/GrayBox';
import AdditionalText from './components/Text';

function App() {

  return (
    <>
    <div className='App'>
      <FirstPic/>
      <GreenBox/>
      <SecondPic/>
      <BrownBox/>
      <ThirdPic/>
      <PinkBox/>
      <ForfthPic/>
      <BlueBox/>
      <FifthPic/>
      <GrayBox/>
      </div>
    </>
  )
}

export default App
