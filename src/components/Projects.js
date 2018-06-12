import React from 'react';

const Projects = () => (
  <div className="card-row-wrapper blue-see-thru">
    <div className="card">
      <div className="card-image">
        <img src="https://i.imgur.com/Apqxbbk.jpg" alt="Hair Appointment scheduling app" />
        <span className="card-title black-text">H.A.I.R</span>
      </div>
      <div className="card-content">
        <span>
          Most hair stylists still use a paper and pen appointment book, so I decided to make a scheduling app. The main idea behind the app is to have access to your appointments from anywhere. Built using React, Ruby on Rails, and PostgreSQL.
        </span>
      </div>
      <div className="card-action">
        <a href="https://hair-scheduler.herokuapp.com/">Visit project</a>
      </div>
    </div>

      <div className="card large">
        <div className="card-image">
          <img src="https://i.imgur.com/UkUOmdn.png" alt="Art Inventory Manager" />
          <span className="card-title black-text">Art Inventory Manager</span>
        </div>
        <div className="card-content">
          <span>In this app, you play the part of a prestigious art dealer. After creating your user account, 
        you can create an art gallery (or several galleries) 
        and then create or select paintings to display in your new space. 
          </span>
        </div>
        <div className="card-action">
          <a href="https://warhol-inv.herokuapp.com/">Visit project</a>
        </div>
      </div>

      <div className="card large">
        <div className="card-image small">
          <img src="https://i.imgur.com/OoMZYVL.png" alt="Tome adventure app" />
          <span className="card-title black-text">Tome</span>
        </div>
        <div className="card-content">
          <span>One app to rule them all, Tome allows you to run your dungeons and dragons adventures all from one app! 
            Gone are the days of juggling multiple resources, flipping through books and notes to find the right piece of information for your game.
          </span>
        </div>
        <div className="card-action">
          <a href="https://tome-dm.herokuapp.com/">Visit project</a>
        </div>
      </div>

  </div>
)

export default Projects;
