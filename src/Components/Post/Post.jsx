import React from 'react';
// import "./Post.css";
import Style from "../Dashboard/Dashboard.module.css";
import { IoChatbubblesOutline,IoSettingsOutline } from "react-icons/io5";
import {BsPencilSquare} from "react-icons/bs";
import {RiHome4Fill,RiPagesLine,RiContactsLine,RiPagesFill} from "react-icons/ri";
import {AiOutlineHome} from "react-icons/ai";
import {FiLink} from "react-icons/fi";
import {MdVideoSettings,MdLiveTv,MdAudiotrack} from "react-icons/md";
import {FaBullhorn,FaCoins,FaImages,FaPollH} from "react-icons/fa";
import {GoTextSize} from "react-icons/go";
import Styled from "./Post.module.css";
import { useNavigate } from 'react-router-dom';


const Post = () => {

    const [UserData, setUserData] =  React.useState(null);
 
    React.useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem("items")));
        console.log(UserData);  
    },[])


    const navigate = useNavigate();
    const goText = ()=>{
        navigate("/makePost")
    }
    const dashboard = ()=>{
        navigate("/dashboard")
    }
  return UserData && (
    <>
    <div style={{height:"67px"}}></div>
    <div className={Style.maincontent_dashboard}>
         <div className={Style.left_maincontent_dashboard}>
             <div className={Style.left_section1}>
                <div className={Style.left_section_1_img} style={{backgroundImage: `url(${UserData.profilePic})`}}>

                </div>
               
                <div className={Style.left_section_1_user_name}>
                    {UserData.name}
                </div>
                <div className={Style.left_section_1_creator}>
                    Creator account
                </div>
                <br />
                <div className={Style.left_section_1_features}>
                    <div className={Style.circle_icons}><IoChatbubblesOutline/></div>
                    <div className={Style.circle_icons}><BsPencilSquare/></div>
                    <div className={Style.circle_icons}><IoSettingsOutline/></div>
                </div>
               

             </div>
             <div className={Style.left_section_2}>
                   <div onClick={dashboard}> <AiOutlineHome/>&nbsp;&nbsp;Home</div>
             </div>
             <div className={Style.left_section_3}>
                     <div ><RiPagesLine/>&nbsp;&nbsp;Posts</div>
                    
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
             <div className={Styled.right_create_post}>
                <div className={Styled.choose_post_type}> <br /> &nbsp; CHOOSE POST TYPE</div>
                <div className={Styled.post_type}>
                    <div className={Styled.top_post}>
                        <div className={Styled.top_1}>
                            <div onClick={goText}><GoTextSize size={42} color={"black"}/><br />Text</div>
                            
                           
                          

                        </div>
                        <div className={Styled.top_2}>
                            <div><FaImages size={42} color={"black"}/><br />Images</div>

                        </div>
                        <div className={Styled.top_3}>
                            <div><MdVideoSettings size={42} color={"black"}/><br />Videos</div>
                        </div>


                    </div>
                    <div className={Styled.bottom_post}>
                    <div className={Styled.bottom_1}>
                        <div><MdLiveTv size={42} color={"black"}/><br />Live Stream</div>

                    </div>
                    <div className={Styled.bottom_2}>
                        <div><MdAudiotrack size={42} color={"black"}/><br />Audio</div>
                    </div>
                    <div className={Styled.bottom_3}>
                        <div><FiLink size={42} color={"black"}/> <br />Link</div>

                    </div>

                    </div>
                    <div className={Styled.bot_post}>
                    <div className={Styled.bot_1}>
                        <div><FaPollH size={42} color={"black"}/><br />Poll</div>

                    </div>
                    <div className={Styled.bot_2}>

                    </div>
                    

                    </div>

                </div>
             </div>
               

         </div>

     </div>
    
    
     <div style={{height:"100px"}}></div>
    </>
  )
}

export default Post