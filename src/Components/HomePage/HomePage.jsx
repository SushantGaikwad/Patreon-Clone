import React, { useState,useRef,useEffect } from "react";
import SlideShow from "./SlideShow";
import "./HomePage.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components"


const LinkWrapper = styled(Link)`
  color: black;
  text-decoration:none
`;




const HomePage = () => {
  const [modal, setModal] = useState(false);
  const[searchData, setSearchData] =useState([]);
  const [user, setUser] = useState(null);



  let searchBoxref = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  

  let videoref = useRef();
  

  useEffect(() => {
    let handler = (event) => {
      if (videoref.current.contains(event.target)) {
          console.log(event.target);
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);


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
      <div>
        <div className="div-1">
          <div className="child-div-1">
            <h1 className="heading-1">Change the way art is valued</h1> <br />
            <p className="para-1">
              Let your most passionate fans support your creative work via
              monthly membership.
            </p>
            <Link to="/login">
              <button className="btn-1">Get started</button>
            </Link>
          </div>
          <div className="mydivchid2">
            <div onClick={toggleModal} className="animated-gif">
              <img
                className="transform-img"
                alt="dic"
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/coe-optimize.gif"
              ></img>
            </div>
            <div>
              <span  onClick={toggleModal} className="play-btn-span">
                <svg
                  className="play-btn-svg"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="38.5" cy="38.5" r="38.5" data-fill="red"></circle>
                  <path
                    fill="white"
                    d="M29.5 26.917L53.25 38 29.5 49.083V26.917z"
                    data-stroke="1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          {modal && (
            <div ref={videoref}  className="modal">
              <div className="overlay">
                <div  className="model-content">
                  <iframe
                    
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/399742289?h=edfaaa1ae5"
                    width="840"
                    height="560"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="div-2">
          <h2 className="heading-2">Search the 200,000+ creators on Patreon</h2>{" "}
          <br />
          <span className="search-icon-home">
            <IoSearchOutline color="grey" />
          </span>
          <input
            className="searchbar"
            type="search"
            aria-label="search"
            placeholder="Find a Creator You Love"
            onChange={(e)=>handleSearch(e.target.value)}
          />          
          {searchData ? (
            <div ref={searchBoxref} className="search_box_homepage">
              {searchData.map((item, index) => {
                return (
                  <div key={index}>
                    <LinkWrapper to={`/${item.username}`}>
                      <div className="search_box_card_homepage">
                        <div className="search_box_card_img_homepage">
                          <img src={item.img} alt="creator_photo" />
                        </div>
                        <div id="search_box_card_text_homepage">
                          <span className="search_box_card_name_homepage">
                            {item.name}
                          </span>
                          <span className="search_box_card_description_homepage">
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
          <button className="btn-2" type="search">
            Search
          </button>
          <div className="head1">
            <h1>What's Patreon?</h1>
            <p>
              On Patreon, you can let your fans become active participants in
              the work they love by <br /> offering them a monthly membership.
              You give them access to exclusive content, <br /> community, and
              insight into your creative process. In exchange, you get the
              freedom to
              <br /> do your best work, and the stability you need to build an
              independent creative career.
            </p>
          </div>
        </div>
        <div className="mydiv2">
          <div className="head2">
            <h1>Develop a recurring income stream</h1>
            <p>
              Stop rolling the dice of ad revenue and per-stream payouts. Get
              recurring income through monthly payments from your patrons.
            </p>
          </div>
          <div className="secondchilddiv2">
            <img
              alt="image"
              id="secondimg"
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/mikki_kendall.png"
            ></img>
            <a id="title_image" href="https://www.patreon.com/karnythia">
              <strong>Mikki Kendall</strong>&nbsp;
              <MdArrowForwardIos color="red" /> <br></br>
              Writer{" "}
            </a>
            <p>
              The reliable monthly income has made it possible for me to spend
              less time chasing checks and more time creating.
            </p>
          </div>
        </div>
        <div className="mydiv3">
          <div id="mydiv3first">
            <img
              alt=""
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/baratunde_thurston.png"
              id="imgdiv3"
            ></img>
            <a
              id="title_image"
              href="https://www.patreon.com/baratunde/creators"
            >
              <strong>Baratunde Thurston</strong>&nbsp;
              <MdArrowForwardIos color="red" />
              <br />
              Writer, comedian, commentator
            </a>
            <p>
              "Twenty years into my career, I realize I???ve been scattering my
              creativity and energy, chasing the approval of algorithms or
              network executives."
            </p>
          </div>
          <div id="mydiv3second">
            <h1 id="divh13">Take back creative control</h1>
            <p id="div3ptag">
              Create what you want and what your audience loves. You don???t have
              to conform to popular taste or the constraints of ad-based
              monetization models.
            </p>
          </div>
        </div>
        <div className="mydiv4">
          <div className="firstchilddiv2">
            <h1>Build a direct, meaningful connection with your audience</h1>
            <p>
              No ads, no trolls, no algorithms. Enjoy direct access and deeper
              conversations with the people who matter the most.
            </p>
          </div>
          <div className="secondchilddiv2">
            <img
              alt="pic"
              id="secondimg"
              src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/heather_mcdonald.png"
            ></img>
            <a id="title_image" href="https://www.patreon.com/karnythia">
              {" "}
              <strong>Heather McDonald</strong>{" "}
              <MdArrowForwardIos color="red" />
              <br />
              Juicy Scoop Podcast
            </a>
            <p>
              "With Patreon, it???s not about likes and views, you can really
              connect with your fans, ignore the haters and focus on the
              positive. I???d rather have 300 patrons than 3 million Instagram
              followers."
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="mydiv5">
          <h1 id="my5head">Who uses Patreon?</h1>
          <p id="mydiv5p">
            If you???re ready to take your work to the next level and willing to
            open your <br /> heart to your audience, Patreon is for you.
          </p>
        </div>

        <div className="mydiv6">
          <SlideShow />
        </div>

        <div className="mydiv7">
          <h2 id="myh27">It???s easier than you think</h2>
          <p id="myp27">
            There are many ways to delight your fans and every creator can find
            their own.
          </p>
          <img
            id="myig"
            alt="pic"
            src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/CreatorProfile-EN.jpg"
          ></img>
        </div>
        <div className="mydiv8">
          <div id="mydivhead">
            <h1 id="headtag">See how other creators use Patreon</h1>
          </div>
          <div id="myfo">
            <div id="firstmyfo">
              <img
                className="myimg11"
                alt=""
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/is-patreon-right-for-you_2x.jpg"
              ></img>
              <h5 className="heading8">
                Is Patreon Right For You And Your Business?
              </h5>
              <p className="mypchild8">
                {" "}
                In this article, we want to introduce you to the membership
                model???an effective, field-tested way for independent creators...{" "}
              </p>
              <a
                className="mya"
                href="https://blog.patreon.com/creator-launch-guide"
              >
                Read More
              </a>
            </div>
            <div id="secondmyfo">
              <img
                className="myimg11"
                alt=""
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/6-membership-based-business_2x.jpg"
              ></img>
              <h5 className="heading8">
                6 Membership-based Business Models You Can Use On Patreon Today
              </h5>
              <p className="mypchild8">
                If you???ve looked at what other creators are doing on Patreon, it
                can be daunting to see how many different ways they leverage...
              </p>
              <a
                className="mya"
                href="https://blog.patreon.com/6-membership-based-business-models-you-can-use-on-patreon-today"
              >
                Read More
              </a>
            </div>
            <div id="thirdmyfo">
              <img
                className="myimg11"
                alt=""
                src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/20-most-useful_2x.jpg"
              ></img>
              <h5 className="heading8">
                The 20 Most Useful Patreon Features & Integrations
              </h5>
              <p className="mypchild8">
                As a creator, it's easy to feel like there just aren't enough
                hours in the day. Whether you're working on your project part
                time...
              </p>
              <a
                className="mya"
                href="https://blog.patreon.com/patreon-integrations-features"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="mydiv9">
          <div className="mydiv9child1">
            <h1>Are you ready to take back control?</h1>
            <Link to="/login">
              <button className="btn-1">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
