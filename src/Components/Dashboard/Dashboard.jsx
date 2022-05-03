import React from 'react';
import Style from'./Dashboard.module.css';
import { IoChatbubblesOutline,IoSettingsOutline } from "react-icons/io5";
import {BsPencilSquare} from "react-icons/bs";
import {RiHome4Fill,RiPagesLine,RiContactsLine,RiPagesFill} from "react-icons/ri";
import {AiOutlineHome} from "react-icons/ai";
import {FaBullhorn,FaCoins} from "react-icons/fa";
// import Style from "style.module.css";
const Dashboard = () => {
  return (
    <>
     <div className={Style.maincontent_dashboard}>
         <div className={Style.left_maincontent_dashboard}>
             <div className={Style.left_section1}>
                <div className={Style.left_section_1_img}>

                </div>
               
                <div className={Style.left_section_1_user_name}>
                    Ambesh Mishra
                </div>
                <div className={Style.left_section_1_creator}>
                    Creator account
                </div>
                <br />
                <div className={Style.left_section_1_features}>
                    <div className='circle_icons'><IoChatbubblesOutline/></div>
                    <div className='circle_icons'><BsPencilSquare/></div>
                    <div className='circle_icons'><IoSettingsOutline/></div>
                </div>
               

             </div>
             <div className={Style.left_section_2}>
                   <div> <AiOutlineHome/>&nbsp;&nbsp;Home</div>
             </div>
             <div className={Style.left_section_3}>
                     <div><RiPagesLine/>&nbsp;&nbsp;Posts</div>
                    
             </div>
             <div className={Style.left_section_3}>
                     <div><RiContactsLine/>&nbsp;&nbsp; Patrons</div>
                   
             </div>
             <div className={Style.left_section_3}>
                    <div><RiPagesFill/>&nbsp;&nbsp;Page</div>
                    
             </div>
             <div className={Style.left_section_3}>
                    <div><FaBullhorn/>&nbsp;&nbsp;Promote</div>
                    
             </div>
             <div className={Style.left_section_3}>
                    <div><FaCoins/>&nbsp;&nbsp;Income</div>
                    
             </div>

         </div>
         <div className={Style.right_maincontent_dashboard}>
             <div className={Style.right_section_1}>
                    This is your <strong>patron view</strong> of your creator page. View your <u>public page</u>. &nbsp; <div className="button_edit">Edit your page</div>
             </div>
             <div className={Style.right_section_2}>

             </div>
             <div className={Style.right_section_3}>
                 <div className={Style.left_right_section_3}>
                     <div className={Style.circle_image_3}></div> <br />
                     <div className={Style.text_right_section_3}>
                         Ambesh Mishra
                     </div> 
                     <div className={Style.text_right_section_4}>
                         is creating videos
                     </div><br />
                     <div className={Style.text_right_section_5}>
                         <div>0 <br />PATRONS</div>
                         <div>$ 0 <br />PER MONTH</div>
                     </div><br />
                     <div className={Style.text_right_section_6}>
                         Share
                     </div>

                 </div>
                 <div className={Style.right_section_4}>
                     <div className={Style.right_section_4_posts}>
                         <br />
                         Posts
                     </div>
                     <div className={Style.right_section_box_posts}>
                         <div className={Style.right_post_1}>
                             <strong>You haven't posted anything yet!</strong>
                             <br /> <br />
                             Creators who post patron-only content twice a month tend to retain more patrons. This means their patrons pledge longer!
                             <br /> <br />
                             <div className={Style.button_right_post}><BsPencilSquare/> &nbsp; Make your first post</div>
                         </div>
                         <br />
                         <div className={Style.right_post_2}>

                         </div>
                         <br />

                     </div>
                    

                 </div>
             </div>

         </div>






     </div>
    
    </>
  )
}

export default Dashboard