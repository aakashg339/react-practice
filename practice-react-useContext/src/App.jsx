import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <GlobalComponent />
      <ThemeContext.Provider value={theme}>
        <div style={{border:'2px solid black'}}>
          <h2>App component (Parent)</h2>
          <button onClick={toggleTheme}>Toggle theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>

      <ThemeContext.Provider value={'purple'}>
        <GlobalComponent />
      </ThemeContext.Provider>
    </div>
  )
}

function ComponentA() {
  return (
    <div style={{border:'2px solid black'}}>
      <h2>ComponentA (child)</h2>
      <ComponentB />
    </div>
  )
}

function ComponentB() {
  return (
    <div style={{border:'2px solid black'}}>
      <h2>ComponentB (grandchild)</h2>
      <ThemedComponent />
    </div>
  )
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{border:'2px solid black'}}>
      <h2>ThemedComponent (grandchild)</h2>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

function GlobalComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{border:'2px solid black'}}>
      <h2>GlobalComponent (outside Provider)</h2>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

export default App
