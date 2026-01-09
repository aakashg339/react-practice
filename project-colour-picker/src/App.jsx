import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColour, setBackgroundColour] = useState('#ffffff');
  const colours = ['#ff0000'];

  return (
    <div>
      <h1>Colour Picker</h1>
      <div className='colour-palette'>
        {colours.map((colour, index) => (
          <div
            key={index}
            className='colour-box'
            style={{backgroundColor: colour}}
            onClick={() => {}}>

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
