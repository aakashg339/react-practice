import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const theme = 'dark';

  return (
    <div style={{border:'2px solid black'}}>
      <h2>App component (Parent)</h2>
      <ComponentA theme={theme} />
    </div>
  )
}

function ComponentA({theme}) {
  return (
    <div style={{border:'2px solid black'}}>
      <h2>ComponentA (child)</h2>
      <ComponentB theme={theme} />
    </div>
  )
}

function ComponentB({theme}) {
  return (
    <div style={{border:'2px solid black'}}>
      <h2>ComponentB (grandchild)</h2>
      <ThemedComponent theme={theme} />
    </div>
  )
}

function ThemedComponent({theme}) {
  return (
    <div style={{border:'2px solid black'}}>
      <h2>ThemedComponent (grandchild)</h2>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

export default App
