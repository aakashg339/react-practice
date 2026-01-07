import './App.css'

function App() {
  const name = "Alice";
  const buttonLabel = "Click Me";
  const imageURL = "https://placehold.co/100x100";

  return (
    <div>
      {/* expression */}
      {12 + 6}
      <h1 className='helloClass'>Hello, {name}</h1>

      {/* attribute for inline styling */}
      <button style={{backgroundColor: 'green', color: 'white'}}>
        {buttonLabel}
      </button>

      {/* attribute for onclick event */}
      <button onClick={() => alert('Alerted')}>
        Alert Me!
      </button>

      <img src={imageURL} alt='Dynamic Image'></img>
    </div>
  )
}

export default App
