
import React from 'react';
import style from './CreatorNavbar.module.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown} from "react-icons/io5";


const Navbar = () => {
  return (
      <>
    <div className={style.navbar_1}>
        <div className={style.logo_1}>
            <Link to="/"><img className={style.main_logo_1} src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
       
       
        <div className={style.right_flex_1}>
        <div className={style.search_icon_1}><IoSearchOutline color='grey'/>
        </div>
            <div className={style.search_1}>
            <input id={style.search_box_1} type="search" placeholder=' &nbsp;&nbsp; Find a creator'/>
            </div>
        </div>
       <div className={style.right_options_1}>
           <div><a href="">Create on Patreon</a></div>
           <div><a href="">Log In</a></div>
       </div>
       
    </div>
    
    </>
  )
}

export default Navbar