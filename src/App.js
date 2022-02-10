import React, { useState, PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSpring, animated, config, Spring } from 'react-spring';
import TypeWriterEffect from 'react-typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Test() {
  const styles = useSpring({
    loop: false,
    config: { friction: 100, tension: 150 },
    from: { x: 0, y: 0, rotate: 360, opacity: 0 },
    to: { x: 550, y: 250, rotate: 0, opacity: 1 },
    delay: 2000,
  });

  return (
    <animated.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: '',
        borderRadius: 16,
        ...styles,
      }}
    >
      <h1
        className="text"
        style={{
          paddingTop: '4vh',
          textAlign: 'center',
          fontSize: '10vh',
        }}
      >
        Soooo
      </h1>
    </animated.div>
  );
}

function Intro() {
  const styling = useSpring({
    from: { y: 0, x: 0 },
    to: { x: 550, y: 250 },
  });

  return (
    <div>
      <div className="row align-items-center move-me">
        <animated.div
          style={{ styling }}
          className="col d-flex justify-content-center align-self-center"
        >
          <TypeWriterEffect
            className="typeWriter"
            textStyle={{
              fontFamily: 'montserrat, sans-serif',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '4vw',
              borderBottom: '5px solid',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Hey there, this is the assignment you gave me',
              'I didnt know how to make an intro so I did a',
              'TypeWriterEffect animation thing yay!!',
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </animated.div>
      </div>
    </div>
  );
}

export default function App() {
  return <div>{Intro()}</div>;
}
