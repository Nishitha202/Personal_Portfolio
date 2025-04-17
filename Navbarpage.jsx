import React from "react";
import { Link } from "react-router-dom";
import "./Navbarpage.css";

const Navbarpage = () => {
  return (
    <div className='nav_bar'>
      {/* <Link className='items' to={"/"}>
        Home
      </Link> */}

      <div className='rightitems'>
      <Link className='items' to={"/"}>
        Home
      </Link>
      
        <Link className='items' to={"/aboutme"}>
          About{" "}
        </Link>

        <Link className='items' to={"/contactme"}>
          Contact{" "}
        </Link>

        <Link className='items' to={'/project'}>Projects</Link>
      </div>
    </div>
  );
};

export default Navbarpage;
