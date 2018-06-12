import React from 'react';

const Team = () => {
  return (
    <div className="blue-see-thru">
      <h2>Meet the Team</h2>

      <div className="row-team-cards">
        <div className="card">
          <div className="card-image">
            <img src="/jasen_bio.jpg" />
            <span className="card-title">Jasen Baker</span>
          </div>
          <div className="card-content">
            <p>
              Jasen loves coding. It’s problem-solving and puzzle-building. As a writer, Jasen's overactive imagination makes it easy to visualize complex problems and to find the most efficient path to a solution. As a result, Jasen produces demiurgic ideas to create functional MERN stack apps with great user experiences.
            </p>
          </div>
          <div className="card-action">
            <a href="http://jasenbaker.herokuapp.com/" target="_blank">Jasen's Website</a>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/jeremy_bio.png" />
            <span className="card-title">Jeremy Abernathy</span>
          </div>
          <div className="card-content">
            <p>
              Jeremy takes great pride in writing clean code and designing creative solutions for real-world application. Agile planning, team collaboration, and client communications are among his highest values. Also, Jeremy enjoys chatting about Walking Dead and Game of Thrones.
            </p>
          </div>
          <div className="card-action">
            <a href="http://ghostmapmedia.com/" target="_blank">Jeremy's Website</a>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="/tyler_bio.jpg" />
            <span className="card-title">Tyler McDonald</span>
          </div>
          <div className="card-content">
            <p>
              Tyler is a full-stack developer who enjoys a collaborative work environment while solving problems small and large with clean, concise code. Having worked in fields strongly relying on my education in psychology, Tyler brings an understanding of human behavior and interactions that is valuable when working with teams and clients.
            </p>
          </div>
          <div className="card-action">
            <a href="http://www.tylerwmcdonald.com/" target="_blank">Tyler's Website</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;