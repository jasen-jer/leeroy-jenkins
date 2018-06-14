import React from 'react';

const Projects = () => (
  <div className="blue-see-thru">
    <div className="card-row-wrapper">
      <div className="card">
        <div className="card-image">
          <img src="/hair_app_preview_350.png" alt="Hair Appointment scheduling app" />
          <span className="card-title white-text">H.A.I.R</span>
        </div>
        <div className="card-content">
          <span>
            Most hair stylists still use a paper and pen appointment book, so here is a scheduling app. The main idea is you can access your appointments from anywhere. Built using React, Ruby on Rails, and PostgreSQL.
          </span>
        </div>
        <div className="card-action">
          <a href="https://hair-scheduler.herokuapp.com/" target="_blank">Launch project</a>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src="/art_app_preview_350.png" alt="Art Inventory Manager" />
          {/* title currently doesn't show well against mixed light-dark background */}
          {/* <span className="card-title light-blue-text darken-2">Art Inventory Manager</span> */}
        </div>
        <div className="card-content">
          <span>In this app, you play the part of a prestigious art dealer. After creating your user account, you can create an art gallery (or several galleries) and then create or select paintings to display in your new space. 
          </span>
        </div>
        <div className="card-action">
          <a href="https://warhol-inv.herokuapp.com/" target="_blank">Launch project</a>
        </div>
      </div>

      <div className="card">
        <div className="card-image small">
          <img src="/tome_app_preview_350.png" alt="Tome adventure app" />
          <span className="card-title black-text">Tome</span>
        </div>
        <div className="card-content">
          <span>
            One app to rule them all. Tome allows you to run your Dungeons &amp; Dragons adventures all in place. No more juggling multiple books or resources to find the right piece of information for your game.
          </span>
        </div>
        <div className="card-action">
          <a href="https://tome-dm.herokuapp.com/"  target="_blank">Launch project</a>
        </div>
      </div>
    </div>

  </div>
)

export default Projects;
