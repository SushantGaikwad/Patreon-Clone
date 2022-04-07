
import React from 'react';
import './CreatorNavbar.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown} from "react-icons/io5";


const Navbar = () => {
  return (
      <>
    <div className="navbar-1">
        <div className="logo-1">
            <Link to="/"><img className="main_logo-1" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
       
       
        <div className='right_flex-1'>
        <div className="search-icon-1"><IoSearchOutline color='grey'/>
        </div>
            <div className="search-1">
            <input id='search-box-1' type="search" placeholder=' &nbsp;&nbsp; Find a creator'/>
            </div>
        </div>
       <div className="right-options-1">
           <div><a href="">Create on Patreon</a></div>
           <div><a href="">Log In</a></div>
       </div>
       
    </div>
    
    </>
  )
}

export default Navbar