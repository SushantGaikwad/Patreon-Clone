import React from "react";
import  Style from"./Podcasts.module.css";
import { Button } from "./Button";



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
                         <Button>Get Started</Button>
                    </div>
                </div>
                <div className={Style.div2}>
                        <span className={Style.div2_span1}>Why should podcasters use membership?</span>
                        <div className={Style.div2_grid}>
                            <div className={Style.div2_grid_card}>
                                <span className={Style.div2_grid_card_icon}> 
                            <svg viewBox="0 0 64 64" height="100%" width="100%"><path stroke="#328AC7" stroke-linecap="round" stroke-linejoin="round" d="M42.923 45.894l11.36-4.253c2.846-.955 5.923.202 7.692 2.893-31.36 17.678-21.205 17.59-48.718 7.233L3 59"></path><path stroke="#328AC7" stroke-linecap="round" stroke-linejoin="round" d="M26.077 47.398H40.18c1.026.203 2.051-.289 2.64-1.273a3.314 3.314 0 0 0 0-3.24c-.589-.984-1.614-1.476-2.64-1.273h-7.693c-3.05-3.53-7.18-5.613-11.538-5.787h-7.693L3 41.612M18.384 5.447c0-.81.564-1.447 1.282-1.447h35.898c.718 0 1.282.637 1.282 1.447v20.252c0 .81-.564 1.447-1.282 1.447H19.666c-.692 0-1.282-.637-1.282-1.447V5.447zM45.436 4l11.41 10.126M47.025 27.146l9.821-10.127M18.384 17.02l9.82 10.126M18.384 14.127L29.77 4"></path><path stroke="#328AC7" stroke-linecap="round" stroke-linejoin="round" d="M37.616 19.913c2.128 0 3.846-1.939 3.846-4.34 0-2.402-1.718-4.34-3.846-4.34-2.129 0-3.846 1.938-3.846 4.34 0 2.401 1.743 4.34 3.846 4.34zM42.923 45.894l11.36-4.253c2.846-.955 5.923.202 7.692 2.893-31.36 17.678-21.205 17.59-48.718 7.233L3 59"></path><path stroke="#328AC7" stroke-linecap="round" stroke-linejoin="round" d="M26.077 47.398H40.18c1.026.203 2.051-.289 2.64-1.273a3.314 3.314 0 0 0 0-3.24c-.589-.984-1.614-1.476-2.64-1.273h-7.693c-3.05-3.53-7.18-5.613-11.538-5.787h-7.693L3 41.612"></path><path stroke="#E3F0FA" stroke-linecap="round" stroke-linejoin="round" d="M18.384 5.447c0-.81.564-1.447 1.282-1.447h35.898c.718 0 1.282.637 1.282 1.447v20.252c0 .81-.564 1.447-1.282 1.447H19.666c-.692 0-1.282-.637-1.282-1.447V5.447zM45.436 4l11.41 10.126M47.025 27.146l9.821-10.127M18.384 17.02l9.82 10.126M18.384 14.127L29.77 4"></path><path stroke="#E3F0FA" stroke-linecap="round" stroke-linejoin="round" d="M37.616 19.913c2.128 0 3.846-1.939 3.846-4.34 0-2.402-1.718-4.34-3.846-4.34-2.129 0-3.846 1.938-3.846 4.34 0 2.401 1.743 4.34 3.846 4.34z"></path></svg>
                                </span>
                            </div>
                            <div></div>
                            <div></div>
                        </div> 
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        </div>
    )
}

export default Podcasts;