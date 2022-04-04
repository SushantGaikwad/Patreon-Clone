import React from "react";
import "./Lite.css";
import { Link } from "react-router-dom";

const Lite = () =>{
    return (
        <div>
            <div className="div1">
                <div className="div1-background">                
                    <svg viewBox="0 200 1440 600" preserveAspectRatio="none"><path fill="#FE9B7B" 
                    d="M0 0h1440v575s-88 16-153 14c-58.04-1.786-159.94 7.931-181.09 10.031-2.65.264-5.25.399-7.91.407L921 600H0V0z" data-fill="1"></path>
                    </svg>
                </div>
                <div className="div1-img-contents">
                    <div>
                        <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-01-header_2x.png" alt="" />
                    </div>
                    <div className="div1-span">
                            <span className="span1">PATREON LITE</span><br />
                            <span className="span2">Just the basics</span><br />
                            <span className="span3">Simple tools to set up recurring support from your fans and run a membership business.</span><br />
                            <Link to="/signup"> <span className="span4-button">Get started</span> </Link>
                    </div>
                </div>
            </div>

            <div>
            <div className="div2-image-contents">
                    <div>                        
                        <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-02-features_2x.png" alt="" />
                    </div>
                    <div className="div2-contents">
                        <span className="main-heading">Membeship essentials</span>
                        <div>
                            <span className="span-heading">Hosted Created Page</span><br />
                            <span className="span-text">Your creator page on patreon.com is where you invite fans to become patrons, and post updates and content just for them</span>
                        </div>
                        <div>
                            <span className="span-heading">Patron communication tools</span><br />
                            <span className="span-text">You own the relationship with patrons. Communicate directly via email, posts on your page, or with direct messaging</span>
                        </div>
                        <div>
                            <span className="span-heading">Patreon workshops</span><br />
                            <span className="span-text">Learn from our Creator Success team about how to set up your page, what to offer, how to talk about Patreon, and more.</span>
                        </div>
                            
                    </div>
                </div>
            </div>
                <a href="/">
            <div className="div3">
                    <div className="div3-background">
                    <svg preserveAspectRatio="none" viewBox="0 0 1301 449" xmlns="http://www.w3.org/2000/svg" fill="#faf0ed"><path d="M12 159L0 35a2 2 0 0 1 2-2l46-6 78-3 316-9 225-5 120-4 263-6h207l2 2 9 61 24 244 9 79-4 35-2 2-245 6-263 2-237 6-132 5-197 3-151 4a2 2 0 0 1-2-2v-7L12 250v-91z" data-fill="1"></path></svg>
                    </div>
                    <picture className="Background-leftImage"><source srcset="https://c5.patreon.com/external/product/shared/product-spots-left@2x.png 2x, https://c5.patreon.com/external/product/shared/product-spots-left.png 1x" />
                    <img src="https://c5.patreon.com/external/product/shared/product-spots-left.png" />
                    </picture>
                    <picture className="Background-rightImage"><source srcset="https://c5.patreon.com/external/product/shared/product-spots-right@2x.png 2x, https://c5.patreon.com/external/product/shared/product-spots-right.png 1x"/>
                    <img src="https://c5.patreon.com/external/product/shared/product-spots-right.png"/>
                    </picture>
                    <div className="div3-image-contents">
                      <div style={{width:"30%"}}>
                          <div style={{marginBottom:"20px"}}><img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/lite-avatar-bay-12_2x-1.png" alt="" /></div>
                          <div>
                              <span className="div3-name">Tarn  Zach, Bay 12 Games</span>
                              <span className="div3-creator">Video Game Creator</span>
                          </div>
                      </div>
                      <div style={{width:"60%", marginLeft:"50px"}}>
                      <span className="div3-text">Our patrons support us because they want us to keep releasing our video game. They’re not super motivated by a huge list of benefits, so we don’t need multiple tiers. We just offer a single level of support and patrons can choose the amount. This works great for us.</span>
                      </div>

                    </div>

            </div>
            </a>
            <div></div>
            <div></div>
        </div>
    )
}
export default Lite;