import React from 'react';
import styled from 'styled-components'

const MissContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2 {
    font-size: 3em;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
  }
  blockquote {
    font-size: 1.2em;
    width: 60%;
    font-family: 'Noto Sans', sans-serif;
    text-align: left;
  }
`

const Mission = () => {
  return (
    <div className="blue-see-thru">
    <MissContainer>
      <h2>
        Nerds with a goal
      </h2>
      <blockquote>
        There's no need to have an ugly, confusing, and broken site. We love to code and to bring to life elegant and innovative experiences. We want to help businesses have 
      a great looking and functional web presence and bring a little more beauty into the world.
      </blockquote>
      <a class="btn">Work with us</a>
      </MissContainer>
    </div>
  );
};

export default Mission;