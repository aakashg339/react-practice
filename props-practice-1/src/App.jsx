import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  return (
    <div className='app-container'>
      <ProfileCard name="Alice" 
                  age="23" 
                  isMember={true} 
                  hobbies={['Reading', 'Cooking']}
                  onHobbyClick={handleHobbyClick} />
      <ProfileCard name="John" 
                  age="42" 
                  isMember={false} 
                  hobbies={['Swimmming', 'Hiking']}
                  onHobbyClick={handleHobbyClick} />
    </div>
  )
}

export default App
