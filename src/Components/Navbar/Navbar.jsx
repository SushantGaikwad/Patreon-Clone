
import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown} from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/"><img className="main_logo" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
        <div className="options">
        <div class="dropdown">
       
            <div className="dropdown_title"><a href="">Product 
      <div className="drop"><IoChevronDown color="black" /></div>
       </a></div>
            <div className="dropdown-content">
            <br />
                <div className="inside_dropdown">
                    <a href="#">Lite</a>
                    <div className="desc">simple tools to setup recurring support from your fans.</div><br />
                </div>
                <div className="inside_dropdown">
                    <a href="#">Pro</a>
                    <div className="desc">All the tools to build and grow a thriving memebership business.</div><br />
                </div>
                <div className="inside_dropdown">
                    <a href="#">Premium</a>
                    <div className="desc">For established and creative businesses</div>
                </div> 
              </div>
        </div>

        <div class="dropdown">
       
            <div className="dropdown_title"><a href="">For creators  <div className="drop-1"><IoChevronDown color="black" /></div></a></div>
            <div className="dropdown-content">
            <br />
                <div className="inside_dropdown">
                    <a href="#"><BiPodcast color='blue'/> &nbsp; &nbsp; Podcasters</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><BsCameraVideo color='blue'/> &nbsp; &nbsp;Video creators</a>
                    
                </div>
                <div className="inside_dropdown">
                    <a href="#"><FaGuitar color='blue'/> &nbsp;&nbsp; Musicians</a>
                </div> 
                <div className="inside_dropdown">
                    <a href="#"><BsBrush color='blue'/>&nbsp;&nbsp;Visual Artist</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><AiOutlineWechat color='blue'/>&nbsp;&nbsp;Communities</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><BsPencil color='blue'/>&nbsp;&nbsp;Writers and Journalists</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><BsController color='blue'/>&nbsp;&nbsp;Gaming Creators</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><BsHeart color='blue'/>&nbsp;&nbsp;NonProfits</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><FaGraduationCap color='blue'/>&nbsp;Tutorial and Educations</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><IoLocationOutline color='blue'/>&nbsp;&nbsp;Local Businesses</a>
                </div>
                <div className="inside_dropdown">
                    <a href="#"><IoCubeSharp color='blue'/>&nbsp;&nbsp;Creator of all Kinds</a>
                </div>  
              </div>
        </div>

        {/* for pricing */}
        <div className="Pricing"><a href="#">Pricing</a></div>   
        {/* <div>Resources</div> */}
        <div class="dropdown">
       
       <div className="dropdown_title"><a href="">Resources <div className="drop-2"><IoChevronDown color="black" /></div></a></div>
       <div className="dropdown-content">
       <br />
           <div className="inside_dropdown">
               <a href="#">Blog</a>
           </div>
           <div className="inside_dropdown">
               <a href="#"> Creator Community</a>
               
           </div>
           <div className="inside_dropdown">
               <a href="#">Events</a>
           </div>
           <div className="inside_dropdown">
               <a href="#">Patreon U</a>
           </div>
           <div className="inside_dropdown">
               <a href="#">App Directory</a>
           </div>
           <div className="inside_dropdown">
               <a href="#">Help Center & FAQ</a>
           </div> 
           
         </div>
     </div>
        <div className='Pricing'><a href="#">Starter Kits</a></div>
        </div>

        {/* for search */}
        <div className='right_flex'>
        <div className="search-icon"><IoSearchOutline color='grey'/></div>
            <div className="search">
                {/* <SearchIcon/> */}
               
                
            <input id='search-box' type="search" placeholder=' &nbsp;&nbsp; Find a creator'/>
            </div>
            <div className="login"> <Link className="link" to="">Log In</Link></div>
            <div className="create"> <Link className="link-create" to="" >Create on Patreon</Link></div>
        </div>
    </div>
  )
}

export default Navbar