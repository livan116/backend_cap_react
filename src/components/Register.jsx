import React from "react";
import { useState } from "react";
import { register } from "../services/index";

const Register = () => {
    const [formdata,setFormData] = useState({
        name:'',
        mobile:'',
        email:'',
        password:''
      })
      const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData({...formdata,[name]:value})
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
    <div>
      <form action="" onSubmit={handleRegister}>
        <input
          type="text"
          value={formdata.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={formdata.mobile}
          onChange={handleChange}
          name="mobile"
          placeholder="Enter your mobile number"
        />
        <input
          type="text"
          value={formdata.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
        />
        <input
          type="text"
          value={formdata.password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
