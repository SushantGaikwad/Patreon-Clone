import React, { useEffect } from 'react';
import  { useState } from "react";
import './SlideShow.css';



const SlideShow = () => {
    const [image, setImage] = useState("");
  let images = ["https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/podcasters.png",
"https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/videocreators.png",
"https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musicians.png",
"https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/visualartists.png"];

    useEffect(()=>{
      slideshow();
    },[]) 
    let id;
    const slideshow = () => {
      let count = 0;
      var slideshowElement = document.getElementById("imgtag");
      if (count === 0) {
        slideshowElement.src = images[0];
      }
      var i = 1;
      id = setInterval(function () {
        if (i === images.length) {
          i = 0;
        }
        slideshowElement.src = images[i];
        i++;
      }, 2000);
    }

    return (
     
      <div id="main">
        <div className="div-img">
          <img id="imgtag" alt="" src={image} />
        </div>
        <div id="secondmain">
          
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/podcasters.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Podcasters</h2>
              </div>
            </span>
          </a>
          <a
            href="/en/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/videocreators.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Video Creators</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musicians.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Musicians</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/visualartists.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Visual Artists</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/communities.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Communities</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/writers.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Writers & Journalists</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/gamingcreators.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Gaming Creators</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/nonprofit.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Nonprofits</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/tutorials.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Tutorials and Education</h2>
              </div>
            </span>
          </a>
          <a
            href="/fr/"
            onMouseEnter={() =>
              setImage(
                `https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/creatorsofallkinds.png`
              )
            }
            // onMouseLeave={() => setImage("")}
          >
            <span className="shadow">
              <div>
                <h2>Creators-of-all-kinds</h2>
              </div>
            </span>
          </a>
        </div>
        </div>
    )
}

export default SlideShow