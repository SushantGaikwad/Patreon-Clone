import React from 'react';
import ProfileNavbar from './ProfilePageNavbar';
// import './ProfilePage.module.css';
// import Footer from '../Footer/Footer';
import { IoChevronDown} from "react-icons/io5";
// import Navbar from '../Navbar/Navbar';
import Style from "./ProfilePage.module.css";

const ProfilePage = () => {
  
  
  return (
    
    <>
    {/* <ProfileNavbar/> */}
   
    <div>
         <br /><br /> <br /><br /><br /><br />
        <div className={Style.style_main_page}>
            <div className={Style.style_first_half}>
                <div className={Style.style_profile_image_section}>
                    <div className={Style.circle_profile}></div> <br />
                    <div className={Style.name_user}>Sushant Gaikwad</div>
                </div>
                <div className={Style.style_profile_support_section}>
                   <div>SUPPORTING</div>
                </div>
                <div className={Style.style_profile_creator_section}>
                  <div>You aren't supporting any <br/> creators yet.</div>
                </div>
            </div>
            <div className={Style.style_second_half}>
                <div className={Style.style_first_row}>
                    <div className={Style.all_posts}>All Posts</div>
                    <div className={Style.Patron_only_posts}>Patron Only Posts</div>
                    <div className={Style.all_creators}>Showing: All Creators &nbsp; &nbsp; &nbsp;<IoChevronDown/></div>
                </div>
                <div className={Style.post_of_creators}>
                  <div className={Style.text_post}> <b>Support</b> or <b>follow</b> creators to see posts in your feed.
                    <br />
                    <br />
                    <div className={Style.button_post}>
                          Find creators you love
                    </div>

                  
                  </div>
                  <img src="https://c5.patreon.com/external/home/empty-stream-illustration.png" alt="patreon" />
                    
                </div>

            </div>
            <div className={Style.style_third_half}>
            <div className={Style.style_profile_support_section}>
                   <div>BECOME A CREATOR</div>
                </div>
                <div className={Style.style_profile_support_section_1}>
                   <div>Build a membership for your <br /> fans and get paid to create on <br/>your own terms.</div> <br />
                   <div className={Style.button_1_support}>Get Started</div>
                </div>
                {/* <hr /> */}
                <div className={Style.style_profile_support_section}>
                   <div>FIND CREATORS YOU LOVE</div>
                </div>
                <div className={Style.style_profile_support_section_1}>
                   <div>The creators you already love <br/> may be on Patreon – connect <br/>your social media to find them.</div> <br />
                   <div className={Style.button_1_support}>Get Started</div>
                </div>
            </div>
            
            
        </div>
        <br />
    </div>
    </>
  )
}

export default ProfilePage