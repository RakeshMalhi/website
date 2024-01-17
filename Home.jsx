import React from "react";
import web from "../src/images/Cyber.jpg";
import Common from "./Common";
const Home = () => {
    return( 
    <>
    <Common 
      name= "Grow your business with"
      imgsrc={web} 
      visit='/services'
      btname="Get Started" 
       />
    
      </>
    );
  };
  
  export default Home;
  