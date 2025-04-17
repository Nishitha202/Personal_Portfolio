import React from "react";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className='main'></div>

        <div className='mainbox'>
          <h1>Hi there! 👋 I'm Nishitha</h1>
          <p>
            B.E in Computer scence and Engineering | MERN Stack Intern @Zephyr
            Technology
          </p>

         <div>

        <div  style={{padding:"30px",margin:"10px"}}>
        <a
            href=' https://drive.google.com/file/d/1lT_6-MVorpFBXBY3alsY_HNdwSx-SajC/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button style={{padding:"20px",borderRadius:"10px",fontSize:"20px",backgroundColor:"black",color:"white"}}>Download Resume</button>
          </a>
        </div>
        </div>
        </div>
      </div>

      
    </>
  );
};

export default Homepage;
