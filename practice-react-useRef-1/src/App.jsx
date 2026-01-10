import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  useEffect(() => {
    console.log(refCount.current);
  });

  const incrementStateCount = () => {
    setStateCount((c) => c+1);
  };

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(refCount.current)
  };

  return (
    <div className='outer-div-container'>
      <div>
        State Count: {stateCount}
        <button onClick={incrementStateCount}>Increment State Count</button>
      </div>

      <div>
        Ref Count: {refCount.current}
        <button onClick={incrementRefCount}>Increment Ref Count</button>
      </div>
    </div>
  )
}

export default App
