import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <div>
      <h1>Hello</h1>
      <ProfileCard name="Alice" age="23" isMember={true} hobbies={['Reading', 'Cooking']} />
      <ProfileCard name="John" age="42" isMember={false} hobbies={['Swimmming', 'Hiking']} />
    </div>
  )
}

export default App
