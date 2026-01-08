import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <div className='app-container'>
      <ProfileCard name="Alice" age="23" isMember={true} hobbies={['Reading', 'Cooking']} />
      <ProfileCard name="John" age="42" isMember={false} hobbies={['Swimmming', 'Hiking']} />
    </div>
  )
}

export default App
