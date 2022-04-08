import React from 'react';
import ProfilePageNavbar from './ProfilePageNavbar';
import './ProfilePage.css';
import Footer from '../Footer/Footer';
import { IoChevronDown} from "react-icons/io5";

const ProfilePage = () => {
  return (
    <div>
        <ProfilePageNavbar/> <br /><br /> <br /><br /><br /><br />
        <div className="style_main_page">
            <div className="style_first_half">
                <div className="style_profile_image_section">
                    <div className="circle_profile"></div> <br />
                    <div className="name_user">Sushant Gaikwad</div>
                </div>
                <div className="style_profile_support_section">
                   <div>SUPPORTING</div>
                </div>
                <div className="style_profile_creator_section">
                  <div>Pratik Borade</div>
                </div>
            </div>
            <div className="style_second_half">
                <div className="style_first_row">
                    <div className="all_posts">All Posts</div>
                    <div className="Patron_only_posts">Patron Only Posts</div>
                    <div className="all_creators">Showing: All Creators &nbsp; &nbsp; &nbsp;<IoChevronDown/></div>
                </div>
                <div className="post_of_creators">
                    <div className='heading_style'>Post from Pratik Borade..</div><br />
                <span >संक्षेप में जानकारी -</span>
                  <br /> <br />
                  <div>
                  दोस्तों, जैसा की आप सब जानते हैं हमारे यूट्यूब चैनल पर हम मूवीज़ और वेब सिरीज के रिव्यू करते हैं, जिनमे बॉलीवुड, हॉलीवुड के साथ ही सभी प्रकार की भारतीय रीजनल फिल्म इंडस्ट्रीज की फिल्मों का भी समावेश होता हैं !
                  </div>
                  <br />
                  <div>
                  बॉलीवुड और हॉलीवुड की नई रिलीज हुई फिल्मों का रीव्यू शनिवार तक जितना जल्दी हो सके मैं करता हूं, इसके साथ ही जो रीजनल फिल्म नई रिलीज होती हैं उनमें से भी ज्यादा से ज्यादा फिल्मों के रीव्यू मैं करने की कोशिश करता हूं।
                  </div>
                  <br />
                  <div>
                  इसके अलावा बीच बीच में हम हमारे चैनल पर कुछ पुरानी फिल्मों के भी रीव्यू करते रहते हैं।
                  </div>
                  <br />
                  <div>
                  अभी तक हमने -
मराठी, गुजराती, कन्नडा, तमिल, तेलुगु, मलयालम, बंगाली, पंजाबी, आसामी ऐसी कुछ भारतीय रीजनल फिल्म के रीव्यू किए हैं !
                  </div>
                </div>

            </div>
            <div className="style_third_half">
            <div className="style_profile_support_section">
                   <div>BECOME A CREATOR</div>
                </div>
                <div className="style_profile_support_section_1">
                   <div>Build a membership for your <br /> fans and get paid to create on <br/>your own terms.</div> <br />
                   <div className="button_1_support">Get Started</div>
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