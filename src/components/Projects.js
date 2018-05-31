import React from 'react';


const Projects = () => (

  <div className="projects-wrapper">

    <div className="projects-div">
      <div className="project-div">
        <a className="styled-link" href="https://hair-scheduler.herokuapp.com/">
          <h3 className="project-title">H.A.I.R</h3>
          <img className="project-img" src="https://i.imgur.com/eYQZg5j.png?1" alt="Hair Appointment scheduling app" />
          <p>Most hair stylists still use a paper and pen appointment book
          so I decided to make a scheduling app.
          The main idea behind the app is to have access to your appointments from anywhere.
          Built using React, Ruby on Rails, and PostgreSQL.
          </p>
        </a>
      </div>
      <div className="project-div">
        <a className="styled-link" href="https://warhol-inv.herokuapp.com/">
          <h3 className="project-title">Art Inventory Manager</h3>
          <img className="project-img" src="https://i.imgur.com/q4jzsXh.png?1" alt="Western Hangman" />
          <p>In this app, you play the part of a prestigious art dealer. After creating your user account, 
            you can create an art gallery (or several galleries) 
            and then create or select paintings to display in your new space. 
          </p>
        </a>
      </div>
      <div className="project-div">
        <a className="styled-link" href="https://young-bastion-12479.herokuapp.com/">
          <h3 className="project-title">Jasen's app</h3>
          <img className="project-img" src="https://i.imgur.com/dZsLQ5Z.png?1" alt="Tree Time app" />
          <p>I am Singing Wind, Chief of the Martians. Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. Incidentally, you have a dime up your nose.
Robot 1-X, save my friends! And Zoidberg! Well, then good news! It's a suppository. Moving along… Good news, everyone! I've taught the toaster to feel love! Tell them I hate them.
          </p>
        </a>
      </div>

    </div>

  </div>
)

export default Projects;
