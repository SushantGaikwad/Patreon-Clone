import React, { useEffect } from 'react';
import ProfilePageNavbar from './ProfilePageNavbar';
import './ProfilePage.css';
import Footer from '../Footer/Footer';
import { IoChevronDown} from "react-icons/io5";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { isLogin } from '../../ContextAPI/AuthContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const {isAuth, isGoogle} =React.useContext(isLogin);

  const getStarted = ()=>{
    console.log("Dashboard");
    navigate("/contents")
  }
const localGoogle = JSON.parse(localStorage.getItem("Google"));
const [UserData, setUserData] =  React.useState(null);
  

//   React.useEffect(()=>{
//  const getData = ()=>{
//     fetch("https://patreondatabase.herokuapp.com/login/success")
//   .then((response) => response.json())
//   .then((response) =>{
//       console.log("User : ",response.user);
//       const user = response.user
//       localStorage.setItem("items", JSON.stringify([user]));
//       console.log(UserData);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   // console.log(user);
//  }
//  localGoogle && getData();
// },[])


useEffect(()=>{
  let data = JSON.parse(localStorage.getItem("items"));
  setUserData(data);
},[])


  return UserData && (
    <div>  
        <Navbar/> <br /><br /> <br /><br /><br /><br />
        <div className="style_main_page">
            <div className="style_first_half">
                <div className="style_profile_image_section">
                    <div className="circle_profile"  style={{backgroundImage: `url(${UserData.profilePic})`}}> </div><br />
                 
                    <div className="name_user">{UserData.name}</div>
                </div>
                <div className="style_profile_support_section">
                   <div>SUPPORTING</div>
                </div>
                <div className="style_profile_creator_section">
                <div>You aren't supporting any <br/> creators yet.</div>
                </div>
            </div>
            <div className="style_second_half">
                <div className="style_first_row">
                    <div className="all_posts">All Posts</div>
                    <div className="Patron_only_posts">Patron Only Posts</div>
                    <div className="all_creators">Showing: All Creators &nbsp; &nbsp; &nbsp;<IoChevronDown/></div>
                </div>
                <div className="post_of_creators">
                  <div className="text_post"> <b>Support</b> or <b>follow</b> creators to see posts in your feed.
                    <br />
                    <br />
                    <div className="button_post">
                          Find creators you love
                    </div>                  
                  </div>
                  <img src="https://c5.patreon.com/external/home/empty-stream-illustration.png" alt="patreon" />
                    
                </div>

            </div>
            <div className="style_third_half">
            <div className="style_profile_support_section">
                   <div>BECOME A CREATOR</div>
                </div>
                <div className="style_profile_support_section_1">
                   <div>Build a membership for your <br /> fans and get paid to create on <br/>your own terms.</div> <br />
                   <div className="button_1_support"  onClick={getStarted}>Get Started</div>
                </div>
                {/* <hr /> */}
                <div className="style_profile_support_section">
                   <div>FIND CREATORS YOU LOVE</div>
                </div>
                <div className="style_profile_support_section_1">
                   <div>The creators you already love <br/> may be on Patreon – connect <br/>your social media to find them.</div> <br />
                   <div className="button_1_support">Get Started</div>
                </div>
            </div>
            
            
        </div>
        <br />
    </div>
  )


}

export default ProfilePage