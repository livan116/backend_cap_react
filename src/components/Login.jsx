import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/index";
const Login = () => {
    const navigate = useNavigate()
    if(localStorage.getItem("token")){
        alert("Already Logged In");
        navigate('/home')
    }

   
    const [loginFormData, setLoginFormData] = useState({
        email:'',
        password:''
      })
    
     
      const handleLoginChange = (e) =>{
        const {name,value} = e.target
        setLoginFormData({...loginFormData,[name]:value})
      }
    
      const handleLogin = async(e) =>{
        e.preventDefault();
        const res = await login(loginFormData);
        if(res.status === 200){
            localStorage.setItem('token',res.token)
          alert('Logged in successfully');
          navigate('/home')
        }
        else{
          console.log(res);
          alert('error')
        }
      }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          value={loginFormData.email}
          onChange={handleLoginChange}
          placeholder="Enter you email"
        />
        <input
          type="text"
          name="password"
          value={loginFormData.password}
          onChange={handleLoginChange}
          placeholder="Enter you password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
