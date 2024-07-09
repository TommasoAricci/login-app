import { useState } from 'react'
import './index.css'
import Login from './login.jsx'

export default function App() {

  const[formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsLetters: false
  })

  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password && (formData.password === formData.confirmPassword) && formData.email){
      setShowLogin(true)}
    else if (!formData.password || !formData.confirmPassword || !formData.email)
      alert("Please fill out all fields!")
    else if (formData.password !== formData.confirmPassword)
      alert("Passwords do not match!")
    console.log(formData)
}

  
  return(
    <>
      {showLogin ? <Login /> :
      <form className='form' onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name='confirmPassword' 
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <label>
          <input
            className='checkbox'
            type="checkbox"
            name="newsLetters"
            onChange={handleChange}
            checked={formData.newsLetters}
          />
          Subscribe to newsletter
        </label>
        <button type="submit">Submit</button>
      </form>
}
    </>

  )
}
