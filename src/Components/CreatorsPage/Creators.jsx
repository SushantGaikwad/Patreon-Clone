import React,{useEffect, useState} from 'react';
import './Creators.css'
import CreatorNavbar from './CreatorNavbar.jsx';
import CreatorFooter from './CreatorFooter.jsx';
import { Link,useParams } from 'react-router-dom';
import ProfileNavbar from '../ProfilePage/ProfilePageNavbar';
import Navbar from '../Navbar/Navbar';
import Style from "../Dashboard/Dashboard.module.css"


import {RiPencilLine} from "react-icons/ri";
import { AiOutlineHeart,AiOutlineUpload,AiOutlineDelete} from "react-icons/ai";
import {BiPin} from "react-icons/bi";




const Creators = () => { 
    window.scrollTo(0, 0);
    const [creator, setCreator] = useState(null);
    const [posts, setPosts] = useState([]);
    const {username} = useParams();
    console.log(username);

    useEffect(()=>{
        fetch(`http://localhost:9999/users?q=${username}`)
        .then((res) => res.json())
        .then((res) => setCreator(res));

        return (setCreator(null));
    },[username]);

    console.log(creator);    

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:9999/getposts", {
                method: "GET",
                headers: {
                      userId : creator[0]._id
                },
              })
              .then((response) => response.json())
              .then((response) =>{
                  let posts = response.posts;
                  setPosts(posts)
                  console.log(posts);
              })
              .catch((err) => {
                console.log(err);
              });
        },100) 
  },[username]);

  return (
      creator &&
      <>
      <Navbar />
       <br /><br /> <br />
      <div className='content'>
          <div className="img-bg" style={{backgroundImage: `url(${creator[0].background})`}}>
              {/* <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2243773/8f4401190d61426daa332c669a0f58c7/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.jpg?token-time=1651622400&amp;token-hash=Bxoyl_yfvkxQnZCPRHzusNYljysWg2iuhde34POMj_U%3D" alt="" /> */}
              <div className="icon-img" style={{backgroundImage: `url(${creator[0].profilePic})`}}>

              </div>
          </div>
          <div className="about_creator">
              <h3>{creator[0].name}</h3>
              <p color="grey"> {creator[0].description}</p>
              <br />
             <h2>{creator[0].patrons}</h2>
             <div className='small-title'>PATRONS</div> <br />
             <Link to="/payment">
             <div className="button-patron">
                 Become a Patron
             </div> 
             </Link><br />
             <div className="share_follow">
                 <div>Share</div>
                 <div>Follow</div>
                 
             </div>

          </div>
          <br />
          <div className="about_creator_info">
              <h1>Posts of {creator[0].name}</h1>
              <div className="text-about">
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
                                 
                          </div>
                            )
                            })}
              </div>

             
          </div>
          <br /><br />
          
         
          
       
       </div>
    
    
      </>
    
  )
}

export default Creators