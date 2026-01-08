import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  const aliceProfile ={
    name: "Alice",
    age: 23,
    isMember: true, 
    hobbies: ['Reading', 'Cooking'],
    onHobbyClick: handleHobbyClick
  };

  const johnProfile = {
    name: "John", 
    age: 42, 
    isMember: false, 
    hobbies: ['Swimmming', 'Hiking'],
    onHobbyClick: handleHobbyClick
  };

  return (
    <div className='app-container'>
      <ProfileCard {...aliceProfile} />
      <ProfileCard {...johnProfile} />
    </div>
  )
}

export default App
