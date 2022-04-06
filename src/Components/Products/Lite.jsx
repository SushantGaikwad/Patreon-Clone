import React from "react";
import "./Lite.css";
import { Link } from "react-router-dom";

const Lite = () =>{
    return (
        <div>
            <div className="div1">
                <div className="div1-background">                
                <svg height="100%" width="100%" fill="#ff9b7a"><svg viewBox="0 0 1440 600" preserveAspectRatio="none"><path d="M0 0h1440v575s-88 16-153 14c-58.04-1.786-159.94 7.931-181.09 10.031-2.65.264-5.25.399-7.91.407L921 600H0V0z" data-fill="1"></path></svg></svg>
                </div>
                <div className="div1-img-contents">
                    <div>
                        <img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/product-lite-01-header_2x.png" alt="" />
                    </div>
                    <div className="div1-span">
                            <span className="span1">PATREON LITE</span><br />
                            <span className="span2">Just the basics</span><br />
                            <span className="span3">Simple tools to set up recurring support from your fans and run a membership business.</span><br />
                            <Link to="/"> <span className="span4-button">Get started</span></Link>
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
    {/* DIv 3 */}
                <a href="/">
            <div className="div3">
                    <div className="div3-background">
                    <svg fill="#faf0ed" height="100%" width="100%"><svg preserveAspectRatio="none" viewBox="0 0 1301 449" xmlns="http://www.w3.org/2000/svg" fill="#faf0ed"><path d="M12 159L0 35a2 2 0 0 1 2-2l46-6 78-3 316-9 225-5 120-4 263-6h207l2 2 9 61 24 244 9 79-4 35-2 2-245 6-263 2-237 6-132 5-197 3-151 4a2 2 0 0 1-2-2v-7L12 250v-91z" data-fill="1"></path></svg></svg>
                    </div>
                    <picture className="Background-leftImage"><source srcset="https://c5.patreon.com/external/product/shared/product-spots-left@2x.png 2x, https://c5.patreon.com/external/product/shared/product-spots-left.png 1x" />
                            <img src="https://c5.patreon.com/external/product/shared/product-spots-left.png" />
                    </picture>
                    <picture className="Background-rightImage"><source srcset="https://c5.patreon.com/external/product/shared/product-spots-right@2x.png 2x, https://c5.patreon.com/external/product/shared/product-spots-right.png 1x"/>
                            <img src="https://c5.patreon.com/external/product/shared/product-spots-right.png"/>
                    </picture>
                    <div className="div3-image-contents">
                      <div className="div3-image-contents-img">
                          <div style={{marginBottom:"20px"}}><img src="https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/lite-avatar-bay-12_2x-1.png" alt="" /></div>
                          <div>
                              <span className="div3-name">Tarn  Zach, Bay 12 Games</span>
                              <span className="div3-creator">Video Game Creator</span>
                          </div>
                      </div>
                      <div className="div3-image-contents-span" >
                      <span className="div3-text">Our patrons support us because they want us to keep releasing our video game. They’re not super motivated by a huge list of benefits, so we don’t need multiple tiers. We just offer a single level of support and patrons can choose the amount. This works great for us.</span>
                      </div>
                    </div>
            </div>
            </a>

    {/* Div 4 */}
            <div className="div4">
                    <div  className="div4-heading">
                        <div className="heading-text">All plans include</div>
                        <div ><Link to="/"> <span className="compare-button-lite"> Compare all plans </span> </Link></div>
                    </div>
                    <div className="div4-cards">
                            <div>
                                <span>
                                <svg viewBox="0 0 25 25" className="div4-svg-icon-lite"><path data-stroke="1" d="M4.083 12.8l.44-1.175-1.029-2.744a.937.937 0 01.354-1.107l2.42-1.605.755-2.834a.915.915 0 01.927-.684l2.886.149 2.25-1.845a.902.902 0 011.146 0l2.25 1.845 2.886-.146a.915.915 0 01.927.684l.755 2.834 2.42 1.605c.359.238.506.7.354 1.107l-1.029 2.744 1.029 2.743a.937.937 0 01-.355 1.108l-2.419 1.6-.759 2.835a.914.914 0 01-.927.685l-2.886-.146-2.25 1.841m-12.49-2.525l1.63 2.609m7.384-14.231l6.195 9.916"></path><path data-stroke="2" d="M16.621 17.54L3.043 21.858l-.979-1.566L11.078 8.67l5.543 8.872z"></path><path data-stroke="3" d="M5.977 20.924l.862 1.346c.288.48.758.818 1.3.934.54.116 1.105 0 1.56-.32a2.28 2.28 0 00.578-3.04l-.16-.236"></path></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Direct Relationships</span><br />
                                <span className="div4-cards-text">Develop relationships with your patrons through patron-only posts, messages, or directly via email.</span>
                            </div>
                            <div>
                            <span>
                            <svg viewBox="0 0 25 25"  className="div4-svg-icon"><path data-stroke="1" d="M1.75.75v22.5h22.5M16.936 8.578l4.494-5.616M10.621 7.359L14.63 9.14M1.75 11.25l6.214-3.728m8.596 8.998l4.74-2.632M9.25 17.25h4.5m-12 3l4.658-2.329"></path><path data-stroke="2" d="M9.25 8.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.75 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.75-7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 11.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 3.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Business Tools</span><br />
                                <span className="div4-cards-text">Track patron payments, lifetime value, and notes to help manage relationships with them directly.</span>
                            </div>
                            <div>
                            <span>
                            <svg viewBox="0 0 25 25" className="div4-svg-icon-lite" ><g data-stroke="1"><path d="M17.247 18.28l4.623-1.855c1.158-.416 2.41.088 3.13 1.263-12.762 7.713-8.63 7.675-19.826 3.156L1 24"></path><path d="M10.391 18.937h5.74c.417.089.834-.126 1.074-.555.23-.43.23-.985 0-1.414-.24-.43-.657-.644-1.075-.556H13c-1.242-1.54-2.922-2.449-4.696-2.524h-3.13L1 16.412M7.26.631c0-.353.23-.63.522-.63h14.61c.291 0 .52.277.52.63V9.47c0 .353-.229.631-.52.631H7.781c-.281 0-.521-.278-.521-.631V.63zM18.27 0l4.643 4.419M18.916 10.1l3.997-4.419m-15.653 0l3.997 4.42M7.26 4.419L11.895 0"></path><path d="M15.087 6.944c.866 0 1.565-.846 1.565-1.894s-.7-1.894-1.565-1.894c-.866 0-1.566.846-1.566 1.894s.71 1.894 1.566 1.894z"></path></g><defs><clipPath id="money-hand_svg__prefix__clip0"><path fill="#fff" d="M0 0h25v25H0z"></path></clipPath></defs></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Flexible Payouts</span><br />
                                <span className="div4-cards-text">Pay yourself whenever you want, or receive monthly auto payouts from your creator balance via direct deposit, PayPal, or Payoneer.</span>
                            </div>
                            <div>
                            <span>
                            <svg viewBox="0 0 25 25" className="div4-svg-icon-lite"><path data-stroke="1" d="M5.5 18h-.75a3 3 0 01-3-3v-3a3 3 0 013-3h.75a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75zm15.75 0h-.75a.75.75 0 01-.75-.75v-7.5A.75.75 0 0120.5 9h.75a3 3 0 013 3v3a3 3 0 01-3 3z"></path><path data-stroke="2" d="M4.75 9A8.25 8.25 0 0113 .75 8.25 8.25 0 0121.25 9M16 21.75h2.25a3 3 0 003-3V18"></path><path data-stroke="3" d="M14.5 23.25H13a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"></path><path data-stroke="4" d="M10 15.442c1.7 1.55 4.3 1.55 6 0m-6-5.457v1.312m6-1.312v1.312"></path></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Patron support</span><br />
                                <span className="div4-cards-text">Rest easy knowing we handle your patron's questions, payments, and concerns to ensure they are taken care of.</span>
                            </div>
                            <div>
                            <span>
                            <svg viewBox="0 0 25 25" className="div4-svg-icon-lite"><path data-stroke="1" d="M19.454 12.1V6c0-.828-.66-1.5-1.476-1.5h-4.43m-5.904 0h-4.43c-.815 0-1.476.672-1.476 1.5v9c0 .828.661 1.5 1.477 1.5h4.429m-.738 0l-2.215 5.25m5.906-21V3"></path><path data-stroke="2" d="M17.24 14.308l-6.643 2.779 6.643 2.471 6.644-2.471-6.644-2.779z"></path><path data-stroke="3" d="M10.597 17.066v3.771m2.952-2.652V21.3a.75.75 0 00.464.7l2.953 1.2a.723.723 0 00.548 0l2.953-1.2a.748.748 0 00.464-.7v-3.115"></path><path data-stroke="4" d="M12.073 6H9.12a1.488 1.488 0 01-1.476-1.5v-.75c0-.414.33-.75.738-.75h4.429c.408 0 .738.336.738.75v.75c0 .828-.66 1.5-1.476 1.5z"></path></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Creator-first education</span><br />
                                <span className="div4-cards-text">Learn how to effectively run your creative business with our workshops, world-class knowledge base, and creator resources.</span>
                            </div>
                            <div>
                            <span>
                            <svg viewBox="0 0 25 25" className="div4-svg-icon-lite"><path data-stroke="1" d="M21.233 1.157a5.234 5.234 0 00-5.967 8.283l-.656 3.779 3.423-2.111a5.133 5.133 0 003.33-.321"></path><path data-stroke="2" d="M9.437 18.75a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z"></path><path data-stroke="3" d="M14.663 23.243A6.062 6.062 0 004.2 23.25m15.004-9v9m-17.25 0V3.75a3 3 0 013-3h7.5m-10.5 6h9m-3-3h3M23.7 3a.375.375 0 100 .75.375.375 0 000-.75m-5.996.75v4.5m6-2.25v2.25m-6-2.25h3m0-2.25v4.5"></path></svg>
                                </span>
                                <span className="div4-cards-heading-lite">Mobile app</span><br />
                                <span className="div4-cards-text">Message your patrons and monitor your membership business with our native iOS and Android apps.</span>
                            </div>
                    </div>
            </div>

            {/* Div 5 */}
            <div className="div5">
                    <span className="div5-text">Join 200,000+ creators using Patreon today</span>
                    <a href="/"><span className="div5-button" >Get Started with Lite</span></a>
            </div>
        </div>
    )
}
export default Lite;