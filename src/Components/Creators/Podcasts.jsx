import React from "react";
import  Style from"./Podcasts.module.css";



const Podcasts = () =>{
    
    return(
        <div>
            <br /><br /><br /><br /><br />
                <div className={Style.div1}>
                    <div className={Style.div1_img} >
                        <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/heatherpodcastspg-4.png" alt="" />
                    </div>
                    <div className={Style.div1_text}>
                        <span className={Style.div1_text_span1}>PATREON FOR PODCASTERS</span>
                        <span className={Style.div1_text_span2}>Creating a successful podcast shouldn’t involve compromising your vision, so stop letting advertisers and networks call the shots. Grow your show your way with support from the listeners who never miss an episode. Offer your fans a place to connect, discuss, and dive deeper with your podcast, and in return, establish a reliable revenue stream beyond ads.</span>
                        
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        </div>
    )
}

export default Podcasts;