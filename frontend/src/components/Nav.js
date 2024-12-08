import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaProductHunt } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { FcAbout } from "react-icons/fc";


const Nav = ({path}) => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }

const[activeNav,setActiveNav]=useState('home');


  
  return (
    <div>
      <img alt="logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4X44EpldozH4iKaxjrXAUtUY-LP9nXsrqQ&s"></img>
      {auth ? <ul className="nav-ul" >
        <li className={activeNav==='home'?'active':''} ><Link to="/" onClick={()=>setActiveNav('home')}  ><span>Profile<CgProfile style={{fontSize:'1.2em',marginBottom:'-4px'}}/></span></Link></li>
        <li className={activeNav==='about'?'active':''} ><Link to="/about" onClick={()=>setActiveNav('about')} ><span>About Us</span><FcAbout style={{fontSize:'1.2em',marginBottom:'-4px'}}/></Link></li>
        <li className={activeNav==='product'?'active':''}><Link to="/myproduct" onClick={()=>setActiveNav('product')}><span>Products<FaProductHunt style={{fontSize:'1.2em',marginBottom:'-4px'}}/></span></Link></li>
        <li className={activeNav==='add'?'active':''}><Link to="/add" onClick={()=>setActiveNav('add')} ><span>Add Products<IoAddOutline style={{fontSize:'1.4em',marginBottom:'-4px'}}/></span></Link></li>
        
        <li className={activeNav==='logout'?'active':''}><Link onClick={logout}  to="/login" >Logout<IoMdLogOut style={{fontSize:'1.2em',marginBottom:'-4px'}} /> <span className='name'>({JSON.parse(auth).name})</span></Link></li>

      </ul>
        :
        <ul className="nav-ul nav-right">
          
          <li><Link to="/login">Login <FiLogIn style={{fontSize:'1.2em',marginBottom:'-4px'}}/></Link></li>

        </ul>
      }

    </div>
  )
}

export default Nav
