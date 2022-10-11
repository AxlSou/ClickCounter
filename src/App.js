import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import freeCodeCampLogo from './Images/freecodecamp-logo.png'
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de FreecodeCamp' />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
        text='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Button
        text='Reset'
        esBotonDeClick={false}
        manejarClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
