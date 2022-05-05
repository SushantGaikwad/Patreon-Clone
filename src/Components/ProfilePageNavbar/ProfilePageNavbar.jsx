
import React from 'react';
import  Style from './ProfilePageNavbar.module.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown,IoNotificationsOutline} from "react-icons/io5";


const ProfileNavbar = () => {
  return (
      <>
    <div className={Style.navbar_3}>
        <div className={Style.logo_3}>
            <img className={Style.main_logo_3} src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" />
        </div>
       
       
        <div className={Style.right_flex_3}>
        <div className={Style.search_icon_profile}><IoSearchOutline color='grey'/>
        </div>
            <div className={Style.search_3}>
            <input id={Style.search_box_profile} type="search" placeholder='Find a creator'/>
            </div>
        </div>
        <div className={Style.notifications}>
          <IoNotificationsOutline size={28}/> &nbsp;
        </div>
       <div className={Style.right_options_3}>
          
           
           <div class={Style.dropdown}>
          <div className={Style.dropdown_title}>
          <div className={Style.div_circle_icon}>

</div>
            {/* <div className="drop">
              <IoChevronDown color="black" />
            </div> */}
          </div>
          <div className={Style.dropdown_content}>
            <br />
            <div className={Style.inside_dropdown}>
             
                Ambesh Mishra <br />
                
            
            </div>
            <br />
            <div className={Style.inside_dropdown}>
              
                Posts from my creators <br />
                
             
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
                Explore my creators <br />
                
             
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
            Manage memberships <br />
            
         
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
            My Profile Settings 
            
         
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
            Invite creators <br />
            
         
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
            Help Center & FAQ <br />
            
         
            </div>
            <br />
            <div className={Style.inside_dropdown}>
            
            Log out <br />
            
         
            </div>
          </div>
        </div>
       </div>
       
    </div>
    
    </>
  )
}

export default ProfileNavbar