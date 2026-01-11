import './App.css'
import useCounter from './useCounter'

function App() {
  const {count, increment, decrement} = useCounter();

  return (
    <div>
      <h1>Counter value: {count}</h1>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default App
