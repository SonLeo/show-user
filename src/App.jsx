import React, { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App