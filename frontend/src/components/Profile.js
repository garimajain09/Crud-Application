import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";

const Profile = () => {
  const auth = localStorage.getItem('user');
  const navigate=useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }


 
 
  return (
    <div className='profile-div'>
      <ul className="li">
     
        <li ><a href="/about" ><span>About Us</span></a></li>
        <li ><a href="/myproduct" ><span>Products</span></a></li>
        <li ><a href="/add"  ><span>Add Products</span></a></li>
        
        <li><Link onClick={logout} to="/login">Logout</Link></li>
        
    </ul>
    
      <h1><MdAccountCircle style={{fontSize:'2em',marginBottom:'-9px'}}/> USER PROFILE </h1>
      <div className="profile">
        <div><h2>Hello <span className='name'>{JSON.parse(auth).name}</span> !</h2>
          <h5>This is your profile page.</h5></div>
        <div>
          <h3 className='h3'>My account <BiSolidUserAccount style={{fontSize:'1em',marginBottom:'-5px'}}/></h3>
          <div className='userinfo'>
            <p className='p'>USER INFORMATION</p>
            
            <section style={{display:'flex'}}><h3 style={{flex:'1'}}>UserId  </h3><span /><h3 style={{flex:'1.5'}}>{"@"+JSON.parse(auth).name.replace(/\s/g,'')+JSON.parse(auth).name.length}</h3></section>
            <section style={{display:'flex'}}><h3 style={{flex:'1'}}>Name  </h3><span /><h3 style={{flex:'1.5',textTransform:'capitalize'}}>{JSON.parse(auth).name}</h3></section>
            <section style={{display:'flex'}}><h3 style={{flex:'1'}}>Email Address  </h3><span /><h3 style={{flex:'1.5'}}>{JSON.parse(auth).email}</h3></section>
           
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile
