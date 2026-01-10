import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ` + count;
  }, [count]);

  const updateCount = () => {
    setCount((c) => c+1);
  };

  return (
    <div>
      <h1>Practice useEffect</h1>
      <button onClick={updateCount}>Increase Count</button>
    </div>
  )
}

export default App
