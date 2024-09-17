import React, { useState } from "react";
import "./Banner.css";
import {Button} from '@mui/material'

const Banner = () => {
  const [showSearch,setShowSearch]=useState(false);
  
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button onClick={()=>setShowSearch(!showSearch)} variant="outlined" className="banner__searchButton">Search Dates</Button>
      </div>
      <div className="banner__info">
        <h1>Get out and Stretch you imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hiddem gems near you.
        </h5>
        <Button variant="outlined">Expore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
