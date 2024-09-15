 import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  

  return (
    <>
      <h1>Welcome to the Mega Blog App!</h1>
    </>
  )
}

export default App
