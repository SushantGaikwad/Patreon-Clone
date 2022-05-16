import React, { useEffect } from 'react';
import Style from'./Dashboard.module.css';
import { IoChatbubblesOutline,IoSettingsOutline } from "react-icons/io5";
import {BsPencilSquare} from "react-icons/bs";
import {RiHome4Fill,RiPagesLine,RiContactsLine,RiPagesFill,RiPencilLine} from "react-icons/ri";
import {AiOutlineHome, AiOutlineHeart,AiOutlineUpload,AiOutlineDelete} from "react-icons/ai";
import {BiPin} from "react-icons/bi";
import {FaBullhorn,FaCoins} from "react-icons/fa";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

// import Style from "style.module.css";


const Dashboard = () => {
    const navigate = useNavigate();
    const  UserData = JSON.parse(localStorage.getItem("items"));
    const [posts, setPost] = React.useState([]);

    useEffect(()=>{
          fetch("https://patreondatabase.herokuapp.com/getposts", {
          method: "GET",
          headers: {
                userId : UserData[0]._id
          },
        })
        .then((response) => response.json())
        .then((response) =>{
            let posts = response.posts;
            setPost(posts)
            console.log(posts);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);

    const getStarted = ()=>{
        navigate("/post");
    }
    const dashboard = ()=>{
        navigate("/dashboard");
    }
   

let input = document.getElementById("input_comment"); 
useEffect(()=>{
    setTimeout(()=>{
        input.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            const container = document.getElementById("comment");
            let imgDiv = document.createElement("div");
            imgDiv.setAttribute("className","comment_icon");
            imgDiv.style.backgroundImage= UserData[0].profilePic;
            let commentDiv = document.createElement("div");
            commentDiv.textContent = input.value;
            container.append(imgDiv,commentDiv);
          }
    },100)
   
    });
},[input])


  return (
    <>
    <div style={{height:"66px"}}></div>
     <div className={Style.maincontent_dashboard}>
         <div className={Style.left_maincontent_dashboard}>
             <div className={Style.left_section1}>
                <div className={Style.left_section_1_img} style={{backgroundImage: `url(${UserData[0].profilePic})`}}>

                </div>
               
                <div className={Style.left_section_1_user_name}>
                    {UserData[0].name}
                </div>
                <div className={Style.left_section_1_creator}>
                    Creator account
                </div>
                <br />
                <div className={Style.left_section_1_features}>
                    <div className={Style.circle_icons}><IoChatbubblesOutline/></div>
                    <div className={Style.circle_icons} onClick={getStarted}><BsPencilSquare/></div>
                    <div className={Style.circle_icons}><IoSettingsOutline/></div>
                </div>
               

             </div>
             <div className={Style.left_section_2}>
                   <div onClick={dashboard}> <AiOutlineHome/>&nbsp;&nbsp;Home</div>
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
                     <div className={Style.circle_image_3} style={{backgroundImage: `url(${UserData[0].profilePic})`}}>
                         </div> <br />
                     <div className={Style.text_right_section_3}>
                         {UserData[0].name}
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
                     { !posts[0] ? <>
                     <div className={Style.right_section_box_posts}>
                         <div className={Style.right_post_1}>
                             <strong>You haven't posted anything yet!</strong>
                             <br /> <br />
                             Creators who post patron-only content twice a month tend to retain more patrons. This means their patrons pledge longer!
                             <br /> <br />
                             <div className={Style.button_right_post} onClick={getStarted}><BsPencilSquare/> &nbsp; Make your first post</div>
                         </div>
                         <br />
                         <div className={Style.right_post_2}>
                         </div>
                         <br />
                     </div>
                     </>
                     : <>
                            <div className={Style.right_section_box_posts}>
                         <div className={Style.right_post_1}>
                             <strong>Your Posts are here</strong>
                           {posts.map((post) =>{
                               return (
                                 <div className= {Style.posts}>
                                 <div className={Style.post_time}>{post.timestamp}</div>
                                 <div className={Style.post_description}>{post.description}</div>
                                 <div  className={Style.post_description}>
                                     <span><AiOutlineHeart /></span>
                                     <span><AiOutlineUpload /></span>
                                     <span><AiOutlineDelete /></span>
                                     <span><RiPencilLine /></span>
                                     <span><BiPin /></span>
                                 </div>
                                 <div className={Style.comments} id="comment">
                                     
                                 </div>
                                 <div className={Style.post_comments}>
                                     <div className={Style.comment_icon} style={{backgroundImage: `url(${UserData[0].profilePic})`}}></div>
                                     <div><input type="text" placeholder='Join Conversation' className={Style.comment_input} id="input_comment"  /></div>
                                                                            
                                     
                                 </div>
                          </div>
                            )
                            })}
                             
                         </div>
                         <br />
                         
                     </div>
                     </>
                     }
                 </div>
             </div>

         </div>
     </div>

     <div style={{height:"100px"}}></div>
    {/* <Footer /> */}
    </>
  )
}

export default Dashboard