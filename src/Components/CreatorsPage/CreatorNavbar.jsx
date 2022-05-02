
import React,{useState,useRef,useEffect} from 'react';
import style from './CreatorNavbar.module.css'
import { Link } from 'react-router-dom';
import { BsChevronDown, BsCameraVideo,BsBrush,BsPencil,BsController,BsHeart } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar,FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { IoLocationOutline,IoCubeSharp,IoSearchOutline,IoChevronDown} from "react-icons/io5";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
  color: black;
  text-decoration:none;
`;


const Navbar = () => {

  const [searchData, setSearchData] = useState([]);
  let searchBoxref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!searchBoxref.current.contains(event.target)) {
        setSearchData([]);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      setSearchData([]);
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  const handleSearch = (key) => {
    console.log(key);
    fetch(`http://localhost:3004/creators?q=${key}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setSearchData(res);
        console.log(searchData);
      })
      .catch((err) => console.log(err));
  };


  return (
      <>
    <div className={style.navbar_1}>
        <div className={style.logo_1}>
            <Link to="/"><img className={style.main_logo_1} src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png" alt="" /></Link>
        </div>
       
       
        <div className={style.right_flex_1}>
        <div className={style.search_icon_1}><IoSearchOutline color='grey'/>
        </div>
            <div className={style.search_1}>
            <input id={style.search_box_1} type="search" placeholder='Find a creator' onChange={(e) =>handleSearch(e.target.value)}/>
              
                {searchData ? (
                  <div ref={searchBoxref} className="search_box">
                    {searchData.map((item, index) => {
                      return (
                        <div key={index}>
                          <LinkWrapper to={`/${item.username}`}>
                            <div className="search_box_card">
                              <div className="search_box_card_img">
                                <img src={item.img} alt="creator_photo" />
                              </div>
                              <div id="search_box_card_text">
                                <span className="search_box_card_name_navbar">
                                  {item.name}
                                </span>
                                <span className="search_box_card_description">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          </LinkWrapper>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              
            </div>
        </div>
       <div className={style.right_options_1}>
           <div><a href="">Create on Patreon</a></div>
           <div><a href="">Log In</a></div>
       </div>
       
    </div>
    
    </>
  )
}

export default Navbar