import React from 'react'
import "./MblogNav.css"
import { Link } from 'react-router-dom'
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline } from "react-icons/io5";

export const MblogNav = () => {
  return (
    <div className='nav container'>
      <div className='dropdown'>
      <div className='dropdown_title'>
        <a href="#">Patreon HQ <div className='drop'><BsChevronDown color ="black" /></div></a>
        </div>
        <div className='dropdown-content'>
          <br />
            <div className='inside_dropdown'>
              <a href="#">Announcements</a>
            </div>
            <div className='inside_dropdown'>
              <a href="#">How We Work</a>
            </div>
            <div className='inside_dropdown'>
              <a href="#">All Pateron HQ</a>
            </div>
            <div className='inside_dropdown'>
              <a href="#">Pateron Events</a>
            </div>
        </div>
        </div>
        <div className="product"><a href="#">Product Updates</a></div>
        <div className="Pateron"><a href="#">Patreon U</a></div>
        <div className="creator"><a href="#">Creator Stories</a></div>
        <div className="Product"><a href="#">Marketing & Promotion</a></div>

        <div className='dropdown'>
          <div className='dropdown_title'><a href="">Explore By Creator Type <BsChevronDown color = "black"/></a></div>
             <div className='dropdown-content'>
               <br />
                 <div className='inside_dropdown'>
                   <a href="">Youtubers</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Illustrators</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Podcasters</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Writers</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Musicians</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Livestreamers</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Communities & Education</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Businesses & Organizations</a>
                 </div>
                 <div className='inside_dropdown'>
                   <a href="">Modelling & Cosplay</a>
                 </div>
             </div>
        </div>
        
    
    </div>
  )
}
