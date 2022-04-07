import React from 'react';
import './Creators.css'
import CreatorNavbar from './CreatorNavbar.jsx';

const Creators = () => { 
    const [count,setCount]= React.useState("");
  return (
      <>
      <CreatorNavbar/>
       <br /><br /> <br />
      <div className='content'>
          <div className="img-bg">
              {/* <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2243773/8f4401190d61426daa332c669a0f58c7/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.jpg?token-time=1651622400&amp;token-hash=Bxoyl_yfvkxQnZCPRHzusNYljysWg2iuhde34POMj_U%3D" alt="" /> */}
              <div className="icon-img" >
              
              </div>
          </div>
          <div className="about_creator">
              <h3>Pratik Borade</h3>
              <p color="grey"> is creating Movie and Web Series Reviews</p>
              <br />
             <h2>6</h2>
             <div className='small-title'>PATRONS</div>
             <div className="button-patron">
                 Become a Patron
             </div>

          </div>
          
         
          
       
       </div>
    
    
      </>
    
  )
}

export default Creators