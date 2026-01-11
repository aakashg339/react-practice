import './App.css'
import useCounter from './useCounter'

function App() {
  const {count, increment, decrement, reset} = useCounter(0);

  return (
    <div>
      <h1>Counter value: {count}</h1>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default App
