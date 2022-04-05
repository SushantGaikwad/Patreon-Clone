

import React from 'react';
import './Footer.css';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
   
        <div className='Box'>
       <div className='Container'>
      <img style={{width:"70px", background : "white", marginLeft:"15px", marginBottom:"10px" }} alt="p" src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"/>
       <div className='Row'>
         <div className='Col'>
          <div className='Div'>
            <div className='H1'>Language: English (United States) </div>
          </div>
          <div className='Div' style={{height:"50px"}}>
             <div className='H1'> India</div>
          </div>
          <div className='Div' style={{height:"50px"}}>
          <div className='H1'>Currency : USD</div>
          </div>
         </div>
         <div className='Col'>
         
         </div>


         <div className='Col'>
         <div className='Heading'>PRODUCT</div>
         <div className="FooterLink">Lite</div>
         <div className="FooterLink">Pro</div>
         <div className="FooterLink">Premium</div>
         <div className="FooterLink">Pricing</div>
         
         </div>

         <div className='Col'>
          <div className="Heading">FOR CREATORS</div>
         <div className="FooterLink">Podcasters</div>
         <div className="FooterLink">Video Creators</div>
         <div className="FooterLink">Musicians</div>
         <div className="FooterLink">Visual Artists</div>
        <div className="FooterLink">Writers & Journalist</div>
        <div className="FooterLink">Communities</div>
        <div className="FooterLink">Gaming Creators</div>
        <div className="FooterLink">Nonprofits</div>
        <div className="FooterLink">Tutorials and Education</div>
        <div className="FooterLink">Local Businesses</div>
        <div className="FooterLink">Creators-of-all-kinds</div>
        
         </div>


         <div className='Col'>
             <div className="Heading">RESOURCES</div>
         <div className="FooterLink">Blog</div>
         <div className="FooterLink">Patreon U</div>
         <div className="FooterLink">Creators Community</div>
         <div className="FooterLink">Help Center & FAQ</div>
         <div className="FooterLink">App Directory</div>
         <div className="FooterLink">Developers</div>
         </div>


         <div className='Col'>
             <div className="Heading">COMPANY</div>
             <div className="FooterLink">About</div>
             <div className="FooterLink">Press</div>
             <div className="FooterLink">Careers</div>
             <div className="FooterLink">Privacy</div>
             <div className="FooterLink">Policy & Terms</div>
             <div className="FooterLink">Privacy Preferences</div>
             <div className="FooterLink">Accessibility</div>
             <div className="FooterLink">Impressum</div>
         </div>
       </div>
      </div>
      <div className='SecondCont'>
        {/* <Logo>
        <TwitterIcon sx={{ color: blue[500] }}/>
        </Logo>
        <Logo>
        <FacebookRoundedIcon sx={{ color: blue[500] }}/>
        </Logo>
        <Logo>
        <InstagramIcon sx={{ color: blue[500] }}/>

        </Logo>
        <Logo>
        <YouTubeIcon sx={{ color: red[500] }}/>
        </Logo> */}
      </div>
      <div className='ThirdCont'>
        <div className='H1-copyright'><FaRegCopyright color='white'/>Patreon&nbsp; &nbsp; &nbsp; &nbsp;Sitemap</div>
        <div className='P'>600 Townsend Street, Suite 500
                 San Francisco, CA 94103
                    USA
             Phone: +1 (833) 972-8766</div>
      </div>   
    </div>
   
  )
}


export default Footer