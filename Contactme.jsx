import React from "react";

const Contactme = () => {
  return (
    <>
    <div className="back">
      <div  className="box">
        <h1 style={{ margin: "35px", paddingTop: "45px" }}>Contact Me on..!</h1>
        <div className='con'>
          <div className='con1'>
            <a href='https://www.linkedin.com/in/nishitha-570bb022b/?originalSubdomain=in'>
              <img
                src='https://tse1.mm.bing.net/th?id=OIP.MTEMlUcQ4cwxpvek9MZepQHaHa&pid=Api&rs=1&c=1&qlt=95&h=180'
                alt='github'
                style={{ height: "60px", width: "60px",borderRadius:"10px" }}
              />
            </a>

            <p>Linkedin</p>
          </div>

          <div className='con1'>
            <a href='https://github.com/Nishitha202'>
              {" "}
              <img
                src='https://static.vecteezy.com/system/resources/previews/025/270/403/original/github-logo-icon-free-vector.jpg'
                alt='github'
                style={{ height: "60px", width: "60px",borderRadius:"10px" }}
              />
            </a>

            <p>Github</p>
          </div>

          <div className='con1'>
            <img
              src='https://clipartcraft.com/images/instagram-logo-transparent-background-2.png'
              alt='github'
              style={{ height: "60px", width: "60px",borderRadius:"10px" }}
            />
            <p>Instagram</p>
          </div>
        </div>
      </div>

      </div>
      
    </>
  );
};

export default Contactme;
