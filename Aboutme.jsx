import React, { useState } from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  const [showskills, setskills] = useState(false);
  const [showskillsc, setskillsc] = useState(false);
  const [showskillshtml, setskillshtml] = useState(false);
  const [showskillscss, setskillscss] = useState(false);
  const [showskillsml, setskillsml] = useState(false);
  const [showskillsmern, setskillsmern] = useState(false);

  const skillsy = () => {
    setskills(!showskills);
  };
  const skillsc = () => {
    setskillsc(!showskillsc);
  };
  const skillshtml = () => {
    setskillshtml(!showskillshtml);
  };
  const skillscss = () => {
    setskillscss(!showskillscss);
  };
  const skillsml = () => {
    setskillsml(!showskillsml);
  };
  const skillsmern = () => {
    setskillsmern(!showskillsmern);
  };

  return (
    <>
      <div style={{ display: "flex" }} className='background'>
        <div className='container3'>
          <h1 style={{ padding: "10px" }}>About Me...!</h1>
          <p style={{ padding: "10px" }}>
            Hi there! 👋 I'm Nishitha, a passionate and driven Computer Science
            Engineer with a strong foundation in C++, Data Structures and
            Algorithms, and a growing expertise in Web Development and the MERN
            Stack. I’m currently sharpening my development skills as a MERN
            Stack Intern at Zephyr Technologies and Solutions Pvt. Ltd., where
            I’m involved in building dynamic and responsive web applications.
          </p>
          <h3 style={{ padding: "10px" }}>My key areas of interest include:</h3>
          <button
            style={{
              margin: "5px",

              borderRadius: "5px",
              padding: "10px",
            }}
            onClick={skillsy}
          >
            👉 Click here to see Area of Interest
          </button>

          {showskills && (
            <div style={{ padding: "10px" }}>
              <ul>
                <li>💻 C++ Programming</li>
                <li>🧠 Data Structures and Algorithms</li>
                <li>🌐 Web Development</li>
                <li>🚀 MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              </ul>
            </div>
          )}
          <div style={{ padding: "10px" }}>
            I enjoy solving coding problems, building user-friendly websites,
            and learning new technologies that can make a real difference. I’ve
            also worked on a number of academic and personal projects that
            reflect my problem-solving mindset and curiosity to explore.
          </div>

          {/* <div className='card2'> */}
          <h3 style={{ padding: "10px" }}>My key areas of interest include:</h3>
          <div className='card21'>
            <button
              style={{
                margin: "5px",

                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={skillsc}
            >
              👉 C++
            </button>
            {showskillsc && (
              <div
                style={{
                  padding: "14px",
                  border: "2px solid white",
                  borderRadius: "6px",
                  textAlign: "justify",
                }}
              >
                I have been actively learning C++ to build a strong foundation
                in programming and problem-solving. My focus has been on
                understanding core concepts such as variables, data types,
                control structures, functions, object-oriented programming
                (OOP).
              </div>
            )}

            <button
              style={{
                margin: "5px",

                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={skillshtml}
            >
              👉 HTML
            </button>

            {showskillshtml && (
              <div
                style={{
                  padding: "14px",
                  border: "2px solid white",
                  borderRadius: "6px",
                  textAlign: "justify",
                }}
              >
                I have been learning front-end web development, focusing on
                HTML, CSS, and JavaScript. Through this journey, I’ve understood
                how to structure web pages using HTML, style them with CSS, and
                add interactivity using JavaScript. To apply my knowledge, I
                have built simple projects like a personal portfolio website and
                a temperature converter, which have helped strengthen my
                practical skills and boost my confidence in web development.
              </div>
            )}

            <button
              style={{
                margin: "5px",

                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={skillscss}
            >
              👉 CSS
            </button>
            {showskillscss && (
              <div
                style={{
                  padding: "14px",
                  border: "2px solid white",
                  borderRadius: "6px",
                  textAlign: "justify",
                }}
              >
                I have been learning front-end web development, focusing on
                HTML, CSS, and JavaScript. Through this journey, I’ve understood
                how to structure web pages using HTML, style them with CSS, and
                add interactivity using JavaScript. To apply my knowledge, I
                have built simple projects like a personal portfolio website and
                a temperature converter, which have helped strengthen my
                practical skills and boost my confidence in web development.
              </div>
            )}
            <br />
            <button
              style={{
                margin: "5px",

                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={skillsml}
            >
              👉 Machine Learning
            </button>
            {showskillsml && (
              <div
                style={{
                  padding: "14px",
                  border: "2px solid white",
                  borderRadius: "6px",
                  textAlign: "justify",
                }}
              >
                Machine Learning Learning Journey: I have been exploring the
                fundamentals of Machine Learning, focusing on key concepts such
                as supervised and unsupervised learning, model training,
                evaluation, and data preprocessing. To deepen my understanding,
                I have worked on beginner-level projects that involve making
                predictions based on real-world datasets.
              </div>
            )}
            <br />
            <button
              style={{
                margin: "5px",

                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={skillsmern}
            >
              👉 MERN Stack
            </button>
            {showskillsmern && (
              <div
                style={{
                  padding: "14px",
                  border: "2px solid white",
                  borderRadius: "6px",
                  textAlign: "justify",
                }}
              >
                I have been actively learning the MERN Stack, which includes
                MongoDB, Express.js, React.js, and Node.js. I started by
                understanding how each component works individually and
                gradually began integrating them to build full-stack web
                applications. Through hands-on practice, I’ve learned to create
                RESTful APIs using Node.js and Express, design dynamic frontend
                interfaces with React, and manage data using MongoDB. This
                journey has helped me understand the complete workflow of
                building modern web apps from backend to frontend.
              </div>
            )}
          </div>
        </div>
        <div className='imgcon'>
          <img className='img' src='src/Myportfolio/nish.png' alt='' />
          {/* <video src="https://static.vecteezy.com/system/resources/thumbnails/022/649/382/small_2x/animated-mono-web-developer-class-programming-software-tutorials-2d-black-and-white-flat-character-4k-footage-with-alpha-channel-transparency-thin-line-art-concept-animation-for-web-design-video.jpg"></video> */}
        </div>
      </div>
    </>
  );
};

export default Aboutme;
