
import React from 'react';
import './ProfilePageNavbar.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown} from "react-icons/io5";


const ProfileNavbar = () => {
  return (
      <>
    <div className="navbar-3">
        <div className="logo-3">
            <Link to="/"><img className="main_logo-3" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
       
       
        <div className='right_flex-3'>
        <div className="search-icon-profile"><IoSearchOutline color='grey'/>
        </div>
            <div className="search-3">
            <input id='search-box-profile' type="search" placeholder='Find a creator'/>
            </div>
        </div>
       <div className="right-options-3">
           {/* <div className="title_right_options_3"><a href="">Log Out</a></div> */}
           <div className="div_circle_icon"></div>
       </div>
       
    </div>
    
    </>
  )
}

export default ProfileNavbar