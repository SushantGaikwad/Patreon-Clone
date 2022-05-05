import React from 'react';
import Style from "../Dashboard/Dashboard.module.css";
import Styled from "./Text.module.css";
import { IoChatbubblesOutline,IoSettingsOutline } from "react-icons/io5";
import {BsPencilSquare} from "react-icons/bs";
import {RiHome4Fill,RiPagesLine,RiContactsLine,RiPagesFill} from "react-icons/ri";
import {AiOutlineHome} from "react-icons/ai";
import {GoTextSize} from "react-icons/go";
import {FaBullhorn,FaCoins,FaTags} from "react-icons/fa";
import { TextField } from '@material-ui/core';
import {GrAttachment} from "react-icons/gr"
import { useNavigate } from 'react-router-dom';


const Text = () => {
    const navigate = useNavigate();
    const getPublish = ()=>{
        navigate("/dashboard");
    }
  return (


    <>
    <div style={{height:"70px"}}></div>
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
         <div className={Styled.right_maincontent_dashboard}>
             <div className={Styled.right_left}>
                 <div className={Styled.fortext}>
                 <div>&nbsp;<GoTextSize size={28} color={"black"}/>&nbsp; <strong>TEXT</strong> </div>

                 
                 </div>
                 <div className={Styled.input_1}>
                 <TextField fullWidth label="&nbsp; &nbsp; &nbsp; Post title (required)" id="fullWidth"  />

                 </div>
                 <div className={Styled.input_2}>
                 <TextField
                    id="filled-multiline-flexible"
                    label="&nbsp; &nbsp; &nbsp; Enter your post..."
                    multiline={true}
                    maxRows={8}
                    
                    fullWidth
                    size='large'
                    
                   
                    />

                 </div>
                <div className={Styled.input_3}>
                    <div>
                      &nbsp; &nbsp; <GrAttachment/> <strong>ATTACHMENTS</strong>
                    </div>
                    <div>
                        <a href="">upload</a>
                    </div>

                </div>
                <div className={Styled.input_4}>
                    <div>
                    &nbsp; &nbsp; <FaTags/><strong> &nbsp;TAGS</strong>
                    </div>
                    <br />
                    <div>
                   &nbsp;&nbsp; <TextField  label="Add tags.."  />

                    </div>

                </div>

             </div>
             <div className={Styled.right_right}>
                 <div className={Styled.publish_now}>
                        <button className={Styled.publish} onClick={getPublish}>
                            PUBLISH
                        </button>
                 </div>

             </div>

         </div>






     </div>
    
    
    
    </>
  )
}

export default Text