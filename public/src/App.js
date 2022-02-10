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
  return (
    <div>
      <video loop autoPlay muted id="background">
        <source src={require('/src/assets/neon-background.mp4')} />
      </video>
    </div>
  );
}

export default function App() {
  return <div>{Intro()}</div>;
}
