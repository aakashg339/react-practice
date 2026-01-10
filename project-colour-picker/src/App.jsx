import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColour, setBackgroundColour] = useState('#ffffff');
  const colours = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'];

  const handleColourChange = (colour) => {
    setBackgroundColour(colour);
  };

  return (
    <div className='App' style={{backgroundColor: backgroundColour}}>
      <h1>Colour Picker</h1>
      <div className='colour-palette'>
        {colours.map((colour, index) => (
          <div
            key={index}
            className='colour-box'
            style={{backgroundColor: colour}}
            onClick={() => handleColourChange(colour)}>

          </div>
        ))}
      </div>

      <div className='custom-colour-picker'>
        <input type='color'
              value={backgroundColour}
              onChange={(e) => handleColourChange(e.target.value)}></input>
      </div>
    </div>
  )
}

export default App
