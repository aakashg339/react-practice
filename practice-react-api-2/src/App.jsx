import { useState } from 'react'
import './App.css'
import axios from 'axios';

// custom axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization': 'Bearer <TOKEN>',
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(request => {
  console.log('Starting Request ', request);
  return request;
});

api.interceptors.response.use(response => {
  console.log("Response", response);
  return response;
});

function App() {
  const [data, setData] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    api.post('/posts', newPost)
      .then((response) => {
        console.log('New Post Added: ', response.data);
        setData([response.data]);
      });
  };

  return (
    <div>
      <h1>API's in React</h1>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  )
}

export default App
