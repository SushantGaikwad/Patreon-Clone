import React from 'react';
import {Nav} from './Components/Nav-Blog/Nav'
import {Login} from './Components/Login/Login'
// import {Blog} from "./Components/Blogs/Blog"
import {Mblog} from "./Components/MainBlog/Mblog"
import { MblogNav } from './Components/MainBlog/MblogNav';
// import {Patreon} from "./Components/MainBlog/Patreon"
// import {Product } from './Components/MainBlog/Product';
// import {PateronU } from './Components/MainBlog/PateronU';
// import {Creator} from './Components/MainBlog/Creator';
// import {Marketing} from './Components/MainBlog/Marketing'
// import {Explore} from './Components/MainBlog/Explore'
// import { AllPateronWork } from './Components/MainBlog/HQ/AllPateronWork';
// import { Announcements } from './Components/MainBlog/HQ/Announcements';
// import { HowWeWork } from './Components/MainBlog/HQ/HowWeWork';
// import { PateronEvents } from './Components/MainBlog/HQ/PateronEvents';
// import { BussinessOrganizations } from './Components/MainBlog/Explore/BussinessOrganizations';
// import { CommunitiesEducation } from './Components/MainBlog/Explore/CommunitiesEducation';
// import { Illustrators } from './Components/MainBlog/Explore/Illustrators';
// import { LiveStreamers } from './Components/MainBlog/Explore/LiveStreamers';
// import { ModelingCosplay } from './Components/MainBlog/Explore/ModelingCosplay';
// import { Musicians } from './Components/MainBlog/Explore/Musicians';
// import { Podcasters } from './Components/MainBlog/Explore/Podcasters';
// import { Writers } from './Components/MainBlog/Explore/Writers';
// import { Youtubers } from './Components/MainBlog/Explore/Youtubers';



 
function App() {
  return (
   <>
   {/* <React.Fragment>

</React.Fragment> */}
    <Nav />  
    <MblogNav />
    <Mblog />
    {/* <Login /> */}
  
   </>
  );
}

export default App;
