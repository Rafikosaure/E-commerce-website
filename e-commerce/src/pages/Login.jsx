import React from 'react'
import '../assets/styles/Login.css'

export default function Login() {
  return (
    <div className='main-div'>
      <h1>Bienvenue !</h1>
      <div>
        <form action="http://localhost:8090/api/user/sign" method='POST' className='login-form'>
          <label for="email">Email :</label>
          <input type="email" id="email" required />
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" required />
          <button type='submit'>Se connecter</button>
        </form>
      </div>
    </div>
  )
}
