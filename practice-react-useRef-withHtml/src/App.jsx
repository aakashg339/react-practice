import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    console.log('Component Rerendered');
  });

  const focusInput1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.background = 'yellow';
  };

  const focusInput2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.background = 'yellow';
  };

  const resetInput = () => {
    inputRef1.current.style.background = 'white';
    inputRef2.current.style.background = 'white';
  };

  return (
    <div>
      <h1>Learn React</h1>
      <input ref={inputRef1} type='text' placeholder='Focus me'></input>
      <button onClick={focusInput1}>Focus and Highlight</button>

      <input ref={inputRef2} type='text' placeholder='Focus me'></input>
      <button onClick={focusInput2}>Focus and Highlight</button>

      <button onClick={resetInput}>Reset</button>
    </div>
  )
}

export default App
