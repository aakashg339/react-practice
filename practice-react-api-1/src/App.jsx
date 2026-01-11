import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);

        //throw new Error('Something went wrong');
      })
      .catch((e) => {
        console.error(`Error fetching data: ${e}`);
        setError('Unable to fetch the data');
        setLoading(false);
      })
  }, []);

  if(loading) {
    return <p>Loading......</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h2>API's</h2>
      <ul>
        {data.map(post => {
          return (
            <li key={post.id}>
              <p><strong>{post.title}</strong></p>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
      <p></p>
    </div>
  )
}

export default App
