import './App.css'

function App() {
  const name = "Alice";
  const buttonLabel = "Click Me";
  const imageURL = "https://placehold.co/100x100";

  const isLoggedin = true;
  // conditional rendering Method 1 - to use comment out the second if
  /*
  if(isLoggedin) {
    return <h1>Welcome back</h1>
  } else {
    return <h1>Please log in</h1>
  }
  */

  // conditional rendering Method 2
  const element = <h1>{isLoggedin ? "Welcome back!" : "Please login"}</h1>

  const messages = ["1", "2"];

  return (
    <div>
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
      <div>
        {/* conditional rendering */}
        {element}

        {/* conditional rendering using &&. Will be shown only when messages non-empty */}
        {messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>}
      </div>
    </div>
  )
}

export default App
