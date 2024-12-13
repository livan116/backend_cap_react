
import { useState } from 'react'
import { register,login } from './services/index'
import './App.css'

function App() {
  const [formdata,setFormData] = useState({
    name:'',
    mobile:'',
    email:'',
    password:''
  })

  const [loginFormData, setLoginFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormData({...formdata,[name]:value})
  }

  const handleLoginChange = (e) =>{
    const {name,value} = e.target
    setLoginFormData({...loginFormData,[name]:value})
  }

  const handleLogin = async(e) =>{
    e.preventDefault();
    const res = await login(loginFormData);
    if(res.status === 200){
      alert('Logged in successfully');
    }
    else{
      console.log(res);
      alert('error')
    }
  }

  const handleRegister = async(e) =>{
    e.preventDefault();
    const res = await register(formdata);
    if(res.status === 200){
      alert('registered successfully');
    }
    else{
      console.log(res);
      alert('error')
    }
  }
  return (
    <>
    <form action="" onSubmit={handleRegister}>
    <input type="text" value={formdata.name} onChange={handleChange} name="name" placeholder='Enter your name' />
    <input type="text" value={formdata.mobile} onChange={handleChange} name="mobile" placeholder='Enter your mobile number' />
    <input type="text" value={formdata.email} onChange={handleChange} name="email" placeholder='Enter your email' />
    <input type="text" value={formdata.password} onChange={handleChange} name="password" placeholder='Enter your password' />
    <button type="submit">submit</button>
    </form>
    <form action="" onSubmit={handleLogin}>
      <input type="text" name='email' value={loginFormData.email} onChange = {handleLoginChange} placeholder='Enter you email' />
      <input type="text" name='password' value={loginFormData.password} onChange = {handleLoginChange} placeholder='Enter you password' />
      <button type="submit">submit</button>
    </form>
    </>
  )
}

export default App
