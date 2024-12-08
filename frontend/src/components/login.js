import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';






const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flag,setFlag]=useState(false);
    
    
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }

    })
   
    const handleChange = async () => {
        let result = await fetch('http://localhost:2164/login', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        }
        else if( !password || !email){
            alert("Please enter data");
      
          
        }
        else{
            setFlag(true);
        }

        
    }
    return (
        <>
        <h1>Login</h1>
        <div className='register'>
            
            {flag?<h5 style={{color:"red",paddingTop:"20px",fontFamily:"sans-serif"}}>No user data found! Signup first.</h5>:""}
            <input type="text" className="inputBox" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <input type="password" className='inputBox' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <button type="button" className="button" onClick={handleChange}>Login</button>
            <div className='err'><span class="span">Don't have an account? <a href="/signup">Signup</a> </span></div>

        </div>
        </>

    )
}

export default Login