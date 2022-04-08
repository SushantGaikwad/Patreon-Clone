import React,{useEffect, useState} from 'react';
import './Creators.css'
import CreatorNavbar from './CreatorNavbar.jsx';
import CreatorFooter from './CreatorFooter.jsx';
import { useParams } from 'react-router-dom';


const Creators = () => { 
    const [creator, setCreator] = useState([]);
    const {username} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3004/creators?q=${username}`)
        .then((res) => res.json())
        .then((res) => {
          setCreator(res);
        //   console.log(res);
        })
    },[])

    console.log(creator);
        

  return (
      <>
      <CreatorNavbar/>
       <br /><br /> <br />
      <div className='content'>
          <div className="img-bg" style={{backgroundImage: `url(https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2243773/8f4401190d61426daa332c669a0f58c7/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.jpg?token-time=1651622400&token-hash=Bxoyl_yfvkxQnZCPRHzusNYljysWg2iuhde34POMj_U%3D)`}}>
              {/* <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2243773/8f4401190d61426daa332c669a0f58c7/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.jpg?token-time=1651622400&amp;token-hash=Bxoyl_yfvkxQnZCPRHzusNYljysWg2iuhde34POMj_U%3D" alt="" /> */}
              <div className="icon-img" style={{backgroundImage: `url(https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2243773/1a031bfd94cd4fc09f754cad4e89decc/eyJ3IjoyMDB9/1.jpg?token-time=2145916800&token-hash=Hi37ycjyu01ztnrsIC3lmGUaYuo6AsLIfRQXvHdRN8k%3D)`}}>

              </div>
          </div>
          <div className="about_creator">
              <h3>{creator[0].name}</h3>
              <p color="grey"> is creating Movie and Web Series Reviews</p>
              <br />
             <h2>6</h2>
             <div className='small-title'>PATRONS</div> <br />
             <div className="button-patron">
                 Become a Patron
             </div> <br />
             <div className="share_follow">
                 <div>Share</div>
                 <div>Follow</div>
                 
             </div>

          </div>
          <br />
          <div className="about_creator_info">
              <h1>About Pratik Borade</h1>
              <div className="text-about">
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
                  <br /><br />
                  <div className='Show-more'>Show more</div>
              </div>

             
          </div>
          <br /><br />
          
         
          
       
       </div>
    
    
      </>
    
  )
}

export default Creators