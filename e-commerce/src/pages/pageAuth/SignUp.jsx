import React from 'react'
import '../../assets/styles/Login.css'
import { URL_SIGNUP } from '../../urls/Urls'
import { useForm } from 'react-hook-form'
import axios from 'axios'


export default function SignUp() {

  const { register, handleSubmit } = useForm()
  let userObject;

  const onSubmit = async (user) => {
    userObject = {...user, role: 'user'}
    console.log(userObject)
    try {
      const response = await axios.post(URL_SIGNUP, userObject)
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <div className='main-div'>
      <h1>Bienvenue !</h1>
      <div>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="prenom">Prénom :</label>
          <input type="text" id="prenom" name='prenom' {...register("prenom")} required />
          <label htmlFor="picture">Photo (url) :</label>
          <input type="url" id="picture" name='picture' {...register("picture")} required />
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name='email' {...register("email")} required />
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name='password' {...register("password")} required />
          <button type='submit'>Se connecter</button>
        </form>
      </div>
    </div>
  )
}
