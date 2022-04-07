
import React from 'react';
import './CreatorFooter.css';
import { FaRegCopyright } from "react-icons/fa";
import { BsTwitter,BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
   
        <div className='Box'>
       <div className='Container'>
      <img style={{width:"70px", background : "white", marginLeft:"15px", marginBottom:"10px" }} alt="p" src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"/>
      <div className="main-division">
          <div className="left-main">
          <div className='ColRow'>
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
         <br />
         <span>WHAT IS PATREON?</span>
         <div className="Col">By supporting creators you love on Patreon, you're becoming an active participant in their creative process. As a member, you receive exclusive content, community access, behind-the-scenes updates, and the pride of fueling work that matters to you.</div>
         <br /><br />
          <span>CAN I CANCEL MY PLEDGE ANY TIME?</span>
          <div className="Col">Yes, you can easily cancel or upgrade your pledge at any time!</div>
          </div>
         

         
          <div className="right-main">
              <br />
          <div className='Col'>
         <div className='Heading'>LEARN MORE</div>
         <div className="FooterLink">About</div>
         <div className="FooterLink">Privacy    </div>
         <div className="FooterLink">Policy & Terms</div>
         <div className="FooterLink">Accessiblity</div>
         <div className="FooterLink">Help Center & FAQ</div>
         
         </div>
         <br />

         <br />
         <br />
         <br /><br />
         <br />
         <div className='ThirdCont'>
        <div className='H1-copyright'>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<FaRegCopyright color='white'/>&nbsp;Patreon&nbsp; &nbsp;Sitemap</div>
        <div className='P'>600 Townsend Street, Suite 500
                 San Francisco, CA 94103
                    USA
             Phone: +1 (833) 972-8766</div>
      </div>

      <div className='SecondCont'>
        <div>
          <BsTwitter color="white"/>
        </div>
        <div>
          < BsFacebook color="white"/>
          
        </div>
        
        <div>
          <BsInstagram color="white"/>
          
        </div>
       

      </div>
          </div>

         
      </div>
         {/* <div className='ColRow'>
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
         <div className='Heading'>PRODUCT</div>
         <div className="FooterLink">Lite</div>
         <div className="FooterLink">Pro</div>
         <div className="FooterLink">Premium</div>
         <div className="FooterLink">Pricing</div>
         
         </div>

         


        

         
       
      </div>
      <div className='SecondCont'>
        <div>
          <BsTwitter color="white"/>
        </div>
        <div>
          < BsFacebook color="white"/>
          
        </div>
        <div>
          <BsInstagram color="white"/>
          
        </div>
        <div>
          <BsYoutube color="white"/>
        </div>

      </div>
      <div className='ThirdCont'>
        <div className='H1-copyright'><FaRegCopyright color='white'/>Patreon&nbsp; &nbsp; &nbsp; &nbsp;Sitemap</div>
        <div className='P'>600 Townsend Street, Suite 500
                 San Francisco, CA 94103
                    USA
             Phone: +1 (833) 972-8766</div>
      </div>    */}
      </div>
    </div>
   
  )
}


export default Footer