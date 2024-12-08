import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 


  const navigate = useNavigate();



  const collectData = async () => {
    let result = await fetch('http://localhost:2164/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if(!name || !password || !email){
      alert("Please enter data");

    }
    else if(!email.endsWith("@gmail.com")){
      alert("Enter correct email");
    }
    else if(password.length<=6){
      alert("Password must contain 6 digits");

    }
    else{
      navigate("/");
    }
  



  }


  return (
    <>
    <h1>SignUp</h1>
    <div className='register'>
      
      <input  className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter username" ></input>
      <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" ></input>
      <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" ></input>
      
      <button type="button" className="button" onClick={collectData}>Sign Up</button>

    </div>
    </>
  )
}

export default Signup
