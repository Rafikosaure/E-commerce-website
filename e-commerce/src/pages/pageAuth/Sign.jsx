import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import '../../assets/styles/Login.css'

const Sign = () => {
  const [user, setUser] = useState({})
  const { login } = useContext(AuthContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
  }

  return (
    <div className='main-div'>
      <h1>Connexion</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          className='sign-input'
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          className='sign-input'
          type='password'
          placeholder='mot de passe'
          name='password'
          onChange={handleChange}
        />
        <button>Connexion</button>
      </form>
    </div>
  )
}

export default Sign