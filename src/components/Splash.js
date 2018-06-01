import React from 'react';

const Splash = () => {
  return (
    <div className="container-splash">

      <div className="container-splash-top">
        {/* hidden for now */}
        <div className="nav-splash">Home | Mission | About Us | Project Samples | Contact</div>
        <h1 className="headline-splash">! GriffinPuff !</h1>
        <h3>The other courageous guys.</h3>
      </div>
      
      {/* scroll button */}
      <div className="container-splash-bottom">
        <div>
          <i className="material-icons btn-splash-scroll">keyboard_arrow_down</i>
        </div>

        <div className="bg-splash"></div>
      </div>      

    </div>
  );
};

export default Splash;