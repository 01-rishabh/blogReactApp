import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
      .then((userdata) => {
        if(userdata){
          useDispatch(login({userdata}))
        }
        else{
          useDispatch(logout())
        }
      })
      .finally(setLoading(false))
  }, [])
    

  //conditional rendering
  return !loading ? (
    <>
      <h1>Welcome to the Mega Blog App!</h1>
    </>
  ) : (null) 
}

export default App
