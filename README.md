import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/"><img className="main_logo" src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
        <div className="options">
        <div class="dropdown">
       
            <div className="dropdown_title">
            <a href="">Product 
      <div className="drop"><BsChevronDown color="black" /></div>
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
       
            <div className="dropdown_title"><a href="">For Creators  <div className="drop-1"><BsChevronDown color="black" /></div></a></div>
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
       
       <div className="dropdown_title"><a href="">Resources <div className="drop-2"><BsChevronDown color="black" /></div></a></div>
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
            <div className="create"> <Link className="link1" to="" >Create on Patreon</Link></div>
        </div>
    </div>
  )
}

export default Navbar










<!-- ****************CSS*****************
 -->

.navbar{
    width:100%;
    height:65px;
    position:fixed;
    z-index:1;
    display:flex;
    background-color: #ffffff;
    border-bottom: 0.1px solid grey;
}
.options{
    margin-top:20px;
    margin-left:20px;
    display:flex;
    gap:35px;
    /* justify-content: center; */
    width:50%;
    /* background-color:green; */
    height:40px;
}
.dropdown{
    position: relative;
    display: inline-block;
}
.inside_dropdown{
    padding:10px;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f5f5f5;
    min-width: 200px;
    padding:10px;
    /* margin-top:8px; */
    /* margin-bottom:20px; */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }
    .dropdown-content a {
        /* opacity:1; */
    /* margin-left:10px; */
    /* margin-top:5px; */
    color: black;
    font-weight: 50;
    font-size:0.900rem;
    /* padding: 12px 16px; */
   
    text-decoration: none;
    display: block;
    margin-left:10px;
    font-family: sans-serif;
  
    }
    .dropdown_title{
        margin-top: 2px;

        color:black;
        /* font-weight:500; */
        font-size:0.875rem;
        position:relative;
        cursor:pointer;
    }
    .dropdown_title a{
        color:black;
        text-decoration: none;
        position:relative;
    }
    .dropdown_title a:hover{
     color:#0e0d0de2;
    }
    .desc{
        margin-left:10px;
        color:black;
        font-weight:400;
        font-size:0.875rem;
        position:relative;
        cursor:pointer;

    }
    .Pricing a{
        font-size:0.875rem;
        text-decoration:none;
        color:black;
    }
    .right_flex{
        margin-top:20px;
        /* margin-left:66%; */
        margin-left:10px;
        display:flex;
        flex-direction: row;
        /* justify-content: center; */
        width:44%;
        /* background-color:pink; */
        height:40px;
    }

    #search-box{
        vertical-align: top;
        width: 250px;
        height: 40px;
        padding-left: 20px;
        margin-left: 70px;
        margin-top: -8px;
       border-radius: 20px;
      
       background-color: rgb(233,236,239);
       outline:none;
       border: none;
     }
     .login{
        margin-left: 25px;
        font-size: 0.875rem;
        text-decoration: none;
        margin-top: 3px;
        font-family: sans-serif;
      }
     .create{
         background-color:#cecece;
        padding: 10px;
        margin-left: 40px;
        border-radius: 100px;
        height: 15px;
        width: 140px;
        color: white;
        padding-bottom: 15px;
        text-align: center;
        margin-top: -8px;
        
       outline:black;
       font-family: sans-serif;
       background-color: rgb(255,66,77);
     }
     .link{
         text-decoration:none;
         color:black;
         font-size:0.875rem;
     }
     .link1{
         text-decoration:none;
         color:white;
     }

     .drop{
         margin-top:-15px;
         margin-left:55px;
         display:flex;
         flex-direction: row;
         position: absolute;
     }
     .drop-1{
        margin-top:-15px;
        margin-left:80px;
        display:flex;
        flex-direction: row;
        position: absolute;
    }
    .drop-2{
        margin-top:-15px;
        margin-left:65px;
        display:flex;
        flex-direction: row;
        position: absolute;
    }
    .search-icon{
        position: absolute;
        margin-left:6%;
        margin-top: 3px;
    }
     .create a:hover{outline:black;}
     .inside_dropdown a:hover{text-decoration: none;}
    .dropdown-content a:hover {background-color: #fff; font-weight:400}

    .dropdown:hover .dropdown-content {display: block;}