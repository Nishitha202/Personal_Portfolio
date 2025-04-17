import React, { useState } from "react";

const Projectwork = () => {
  const [showskills, setskills] = useState(false);

  const [showproject, showtheproject] = useState(false);
  const [showproject2, showtheproject2] = useState(false);
  const [showproject3, showtheproject3] = useState(false);
  const [showproject4, showtheproject4] = useState(false);
  const [showproject5, showtheproject5] = useState(false);
  const [showproject6, showtheproject6] = useState(false);
  const [showproject7, showtheproject7] = useState(false);
  const [showproject8, showtheproject8] = useState(false);

  const skillsy = () => {
    setskills(!showskills);
  };

  const project = () => {
    showtheproject(!showproject);
  };
  const project2 = () => {
    showtheproject2(!showproject2);
  };
  const project3 = () => {
    showtheproject3(!showproject3);
  };
  const project4 = () => {
    showtheproject4(!showproject4);
  };
  const project5 = () => {
    showtheproject5(!showproject5);
  };
  const project6 = () => {
    showtheproject6(!showproject6);
  };

  const project7 = () => {
    showtheproject7(!showproject7);
  };
  const project8 = () => {
    showtheproject8(!showproject8);
  };

  return (
    <>
      <div>
        <div>
          <h1 style={{ margin: "30px" }}>Check Out My Projects:</h1>

          <div className='maincard'>
            <div className='subcard'>
              <h1>Project 1:</h1>
              <img
                src='src/Myportfolio/drug.png'
                alt='drug recommendation'
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Smart drug recommendation</p>
              <button onClick={project} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Smart Drug Recommendation System is an intelligent
                    healthcare web application designed to assist users in
                    identifying potential health conditions and recommending
                    suitable medications. By leveraging the power of machine
                    learning and natural language processing, the system allows
                    users to input their symptoms and receive:
                  </p>
                  <ul>
                    <li>
                      🎯 Predicted Disease/Condition based on symptom analysis
                    </li>
                    <li>
                      💊 Recommended Drugs or Medicines commonly used to treat
                      the predicted condition
                    </li>
                    <li>🏡 One-Night/Home Remedies for temporary relief</li>
                    <li>
                      🇮🇳 Indian Drug Alternatives with pricing, manufacturers,
                      and effectiveness
                    </li>
                    <li>
                      🤖 Integrated AI Chatbot for real-time interaction and
                      support
                    </li>
                    <li>
                      ⏰ Medicine Reminders to help users stay on track with
                      their prescriptions
                    </li>
                  </ul>
                  <p>
                    This system enhances healthcare accessibility by offering
                    smart suggestions in real-time, ultimately helping users
                    make informed decisions and manage minor health issues
                    without immediate doctor visits.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 2:</h1>
              <img
                src='src/Myportfolio/malaria.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Malaria Prediction Model</p>
              <button onClick={project2} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject2 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Malaria Prediction Model is a machine learning-based
                    application developed to accurately detect and classify
                    malaria infections using medical input data. The goal is to
                    assist healthcare professionals and organizations in early
                    diagnosis, reducing the time taken for manual testing and
                    improving patient outcomes.
                  </p>
                  <p>Key features of the model include:</p>
                  <ul>
                    <li>
                      📊 Input Analysis of symptoms or microscopic image data
                    </li>
                    <li>
                      🧠 Machine Learning Algorithms trained on labeled datasets
                      (e.g., infected vs. uninfected cells)
                    </li>
                    <li>
                      🧪 Accurate Classification of malaria-positive and
                      malaria-negative cases
                    </li>
                    <li>
                      🚀 Fast and Efficient Predictions enabling quick medical
                      responses
                    </li>
                    <li>
                      📈 Model Evaluation using accuracy, precision, recall, and
                      F1-score
                    </li>
                  </ul>
                  <p>
                    This project demonstrates practical applications of AI in
                    healthcare and reflects a strong understanding of data
                    preprocessing, model building, and evaluation techniques.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 3:</h1>
              <img
                src='src/Myportfolio/women.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Women Safety Website</p>
              <button onClick={project3} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject3 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Women Safety Website is a secure and user-friendly web
                    platform designed to empower women with safety tools,
                    real-time assistance, and vital information. The website
                    integrates multiple features to ensure that help is always
                    just a click away.
                  </p>
                  <p>Key Features:</p>
                  <ul>
                    <li>
                      📍 Live Location Tracking – Shares user's real-time
                      location with trusted contacts during emergencies
                    </li>
                    <li>
                      📩 Emergency Alert System – Sends instant alerts via
                      email/SMS to pre-registered emergency contacts
                    </li>
                    <li>
                      📖 Latest Safety Updates – Displays news and
                      safety-related announcements with clickable links to
                      reliable sources
                    </li>
                    <li>
                      📚 Women Safety Laws & Helplines – Educates users about
                      their legal rights and provides access to national
                      helpline numbers
                    </li>
                    <li>
                      👥 Trusted Contact Manager – Allows users to add and
                      manage a list of trusted contacts
                    </li>
                    <li>
                      🔐 Login/Signup System – Secures user data with
                      authentication
                    </li>
                    <li>
                      💬 Informative UI/UX – Simple, mobile-friendly design for
                      quick navigation in urgent situations
                    </li>
                  </ul>
                  <p>
                    This project reflects a strong focus on social impact, web
                    development, and real-time interaction, making it a
                    practical solution for increasing safety and awareness.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 4:</h1>
              <img
                src='src/Myportfolio/songs.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Songs Recommendation</p>
              <button onClick={project4} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject4 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Songs App is a dynamic React-based music library
                    application that allows users to view, search, and filter a
                    list of songs using core JavaScript functions like map() and
                    filter().
                  </p>
                  <p>Key Features:</p>
                  <ul>
                    <li>
                      📄 List Rendering with map() – Displays a collection of
                      songs including details like song name, artist, and genre
                      in a structured and visually appealing format
                    </li>
                    <li>
                      🔍 Search & Filter Songs – Implements filter() to allow
                      users to easily search for songs based on keywords, artist
                      name, or genre
                    </li>
                    <li>
                      🧩 Reusable Components – Designed using React components
                      to ensure clean, modular, and maintainable code
                    </li>
                    <li>
                      ⚡ Real-time Interaction – Updates the song list
                      dynamically as users type or apply filters
                    </li>
                    <li>
                      🎨 Styled UI – Basic CSS styling for a neat and organized
                      layout
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 5:</h1>
              <img
                src='src/Myportfolio/movies.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>React Movie Recommendation</p>
              <button onClick={project5} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject5 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Movie Recommendation App is a user-friendly React
                    application that helps users discover and explore movies
                    based on their interests. The app leverages JavaScript’s
                    map() and filter() functions to dynamically render and
                    filter movie data, providing personalized suggestions.
                  </p>
                  <p>Key Features:</p>
                  <ul>
                    <li>
                      🗂️ Dynamic Movie List Rendering – Uses map() to display a
                      curated list of movies with posters, titles, genres, and
                      ratings
                    </li>
                    <li>
                      🔍 Smart Filtering – Implements filter() to allow users to
                      search for movies by genre, title, or rating in real-time
                    </li>
                    <li>
                      📱 Responsive UI – Built with modern CSS for a clean,
                      mobile-friendly user interface
                    </li>
                    <li>
                      🧩 Component-Based Architecture – Developed using reusable
                      React components for better structure and maintainability
                    </li>
                    <li>
                      ⚙️ Interactive Search – Instantly updates movie results as
                      users type, providing a smooth and engaging experience
                    </li>
                  </ul>
                  <p>
                    This project highlights your grasp of React fundamentals,
                    efficient data handling using array methods, and creating
                    real-time interactivity within a modern web app.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 6:</h1>
              <img
                src='src/Myportfolio/random.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Random Quote Generator</p>
              <button onClick={project6} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject6 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Random Quote Generator is a simple yet powerful React
                    project that fetches and displays motivational quotes using
                    a third-party public API. It demonstrates your ability to
                    work with external APIs and manage asynchronous data in
                    React.
                  </p>
                  <p>Key Features:</p>
                  <ul>
                    <li>
                      🌐 API Integration – Fetches random quotes from a public
                      quotes API (like https://api.quotable.io) using fetch() or
                      Axios
                    </li>
                    <li>
                      🔁 New Quote on Click – Generates a new inspirational or
                      motivational quote each time the user clicks the “Get
                      Quote” button
                    </li>
                    <li>
                      💬 Dynamic Quote Display – Shows the quote text and author
                      in a visually appealing layout
                    </li>
                    <li>
                      ⚙️ React State Management – Uses useState() and
                      useEffect() hooks to manage data and API calls
                    </li>
                    <li>
                      🎨 Minimal & Clean UI – Designed with user experience in
                      mind, featuring centered content and smooth transitions
                    </li>
                  </ul>
                  <p>
                    This project showcases your skills in React hooks, API
                    consumption, and creating interactive UI components—perfect
                    for demonstrating frontend development proficiency.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 7:</h1>
              <img
                src='src/Myportfolio/food.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>
                Food Recommendation using Api
              </p>
              <button onClick={project7} style={{ marginLeft: "12px" }}>
                👉 Click here to explore the project
              </button>
              {showproject7 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description:</h4>
                  <p>
                    The Food Recommendation App is an engaging and interactive
                    React project that helps users discover delicious food and
                    recipes based on their preferences. It fetches real-time
                    data from a food-related API to suggest meals with
                    ingredients, images, and preparation steps.
                  </p>
                  <p>Key Features:</p>
                  <ul>
                    <li>
                      🍱 API Integration – Uses a public food/recipe API (like
                      TheMealDB or Edamam) to fetch meals and food suggestions
                      dynamically
                    </li>
                    <li>
                      🔍 Search & Filter – Allows users to search for food items
                      by name, ingredient, or cuisine type
                    </li>
                    <li>
                      🖼️ Visual Display – Presents dishes with images,
                      ingredients, cooking instructions, and nutritional info
                    </li>
                    <li>
                      ⚛️ React Hooks – Utilizes useState() and useEffect() to
                      handle API calls and UI updates smoothly
                    </li>
                    <li>
                      💡 Personalized Suggestions – Recommends random meals or
                      recipes based on user-selected preferences
                    </li>
                  </ul>
                  <p>
                    This project highlights your ability to work with real-time
                    APIs, manage dynamic data in React, and create an intuitive
                    user interface—making it a perfect addition to your
                    full-stack development portfolio.
                  </p>
                </div>
              )}
            </div>
            <div className='subcard'>
              <h1>Project 8:</h1>
              <img
                src='src/Myportfolio/temp.png'
                alt=''
                height='250px'
                width='520px'
                style={{ marginLeft: "12px" }}
              />
              <p style={{ marginLeft: "12px" }}>Temperature Converter</p>
              <button onClick={project8} style={{ marginLeft: "12px" }}>
                To Know more about Project
              </button>
              {showproject8 && (
                <div style={{ textAlign: "justify" }}>
                  <h4>Description</h4>

                 <p> The Temperature Converter is a simple and interactive web application built using HTML, CSS, and JavaScript. It allows users to seamlessly convert temperature values between Celsius and Fahrenheit.</p>

                  <p>Key Features:</p>
                  <ul>
                    <li>
                      🌡️ Temperature Conversion – Converts Celsius to Fahrenheit
                      and vice versa with real-time calculations
                    </li>
                    <li>
                      🎨 User-Friendly Interface – Clean and intuitive design for
                      easy input and output display
                    </li>
                    <li>
                      📱 Responsive Design – Optimized for both desktop and
                      mobile devices
                    </li>
                    <li>
                      ⚛️ JavaScript Functionality – Utilizes JavaScript for
                      dynamic calculations and event handling
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectwork;
