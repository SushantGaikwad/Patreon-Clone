import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  BsChevronDown,
  BsCameraVideo,
  BsBrush,
  BsPencil,
  BsController,
  BsHeart,
} from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { FaGuitar, FaGraduationCap } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import styled from "styled-components";
import {
  IoLocationOutline,
  IoCubeSharp,
  IoSearchOutline,
  IoChevronDown,
} from "react-icons/io5";
import { isLogin } from "../../ContextAPI/AuthContext";
import LoginNavbar from "../LoginNavbar/LoginNavbar"

const LinkWrapper = styled(Link)`
  color: black;
  text-decoration:none;
`;

const Navbar = () => {
  const [searchData, setSearchData] = useState([]);
  let searchBoxref = useRef();
  const{isAuth, LoginAuth} = React.useContext(isLogin);

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
    fetch(`https://patreondatabase.herokuapp.com/users?q=${key}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setSearchData(res);
        console.log(searchData);
      })
      .catch((err) => console.log(err));
  };

const UserData = JSON.parse(localStorage.getItem("items"));


  return !UserData ? (   
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            className="main_logo"
            src="https://seeklogo.com/images/P/patreon-logo-93191455CE-seeklogo.com.png"
            alt=""
          />
        </Link>
      </div>
      <div className="options">
        <div className="dropdown">
          <div className="dropdown_title">
            Product
            <div className="drop">
              <IoChevronDown color="black" />
            </div>
          </div>
          <div className="dropdown-content">
            <br />
            <div className="inside_dropdown">
              <Link to="/lite">
                Lite
                <div className="desc">
                  simple tools to setup recurring support from your fans.
                </div>
                <br />
              </Link>
            </div>
            <div className="inside_dropdown">
              <Link to="/pro">
                Pro
                <div className="desc">
                  All the tools to build and grow a thriving memebership
                  business.
                </div>
                <br />
              </Link>
            </div>
            <div className="inside_dropdown">
              <Link to="/premium">
                Premium
                <div className="desc">
                  For established and creative businesses
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdown_title">
            For Creators{" "}
            <div className="drop-1">
              <IoChevronDown color="black" />
            </div>
          </div>
          <div className="dropdown-content">
            <br />
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/podcasts">
                <BiPodcast color="blue" /> &nbsp; &nbsp; Podcasters
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/video">
                <BsCameraVideo color="blue" /> &nbsp; &nbsp;Video creators
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/music">
                <FaGuitar color="blue" /> &nbsp;&nbsp; Musicians
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/visualartists">
                <BsBrush color="blue" />
                &nbsp;&nbsp;Visual Artist
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/communities">
                <AiOutlineWechat color="blue" />
                &nbsp;&nbsp;Communities
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/writing">
                <BsPencil color="blue" />
                &nbsp;&nbsp;Writers and Journalists
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/gaming">
                <BsController color="blue" />
                &nbsp;&nbsp;Gaming Creators
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/nonprofits">
                <BsHeart color="blue" />
                &nbsp;&nbsp;NonProfits
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/c/tutorials-and-education">
                <FaGraduationCap color="blue" />
                &nbsp;Tutorial and Educations
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="patreon.com/c/local-businesses">
                <IoLocationOutline color="blue" />
                &nbsp;&nbsp;Local Businesses
              </a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/explore">
                <IoCubeSharp color="blue" />
                &nbsp;&nbsp;Creator of all Kinds
              </a>
            </div>
          </div>
        </div>

        {/* for pricing */}
        <a className="atag_decoration" href="https://www.patreon.com/pricing"><div className="Pricing">Pricing</div></a>
        {/* <div>Resources</div> */}
        <div className="dropdown">
          <div className="dropdown_title">
            <a className="atag_decoration" href="">
              Resources{" "}
              <div className="drop-2">
                <IoChevronDown color="black" />
              </div>
            </a>
          </div>
          <div className="dropdown-content">
            <br />
            <div className="inside_dropdown">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="inside_dropdown">
              <a href="https://discord.com/invite/patreon"> Creator Community</a>
            </div>
            <div className="inside_dropdown">
              <a href="https://events.patreon.com/">Events</a>
            </div>
            <div className="inside_dropdown">
              <a href="https://blog.patreon.com/patreon-u">Patreon U</a>
            </div>
            <div className="inside_dropdown">
              <a href="https://www.patreon.com/apps">App Directory</a>
            </div>
            <div className="inside_dropdown">
              <a href="https://support.patreon.com/hc/en-us">Help Center & FAQ</a>
            </div>
          </div>
        </div>
       <a href="https://www.patreon.com/themes/browse"> <div className="Pricing">Starter Kits</div></a>
      </div>

      {/* for search */}
      <div className="right_flex">
        <div className="search-icon">
          <IoSearchOutline color="grey" />
        </div>
        <div className="search">
          {/* <SearchIcon/> */}

          <input
            id="search-box"
            type="search"
            placeholder="Find a creator"
            onChange={(e) => handleSearch(e.target.value)}
          />

          {searchData ? (
            <div ref={searchBoxref} className="search_box">
              {searchData.map((item, index) => {
                return (
                  <div key={index}>
                    <LinkWrapper to={`/${item.name}`}>
                      <div className="search_box_card">
                        <div className="search_box_card_img">
                          <img src={item.profilePic} alt="creator_photo" />
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
        {!isAuth ? <>
        <Link to="/login">
        <span className="login-btn">
            Log In
        </span>
          </Link>
          </>
          : <span className="logout-btn" onClick={LoginAuth}>Log Out</span>
        }
        {!isAuth ?
        <Link  to="/register">
          <span className="create"> Create on Patreon</span>
        </Link>
        :<div className="div_circle_icon_navbar"></div>
        }
      </div>
    </div>
  ): <LoginNavbar />
} 

export default Navbar;
