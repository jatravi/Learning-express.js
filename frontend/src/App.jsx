import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        //console.log('Fetched jokes:', response.data);
        setJokes(response.data) 
      })
      .catch((error) => {
        console.error("ERROR fetching jokes:", error)
      })
  }, [])

  return (
    <>
      <h1>Hello, I am here building for you</h1>
      <p>Jokes: {jokes.length}</p>

      {
       jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App
