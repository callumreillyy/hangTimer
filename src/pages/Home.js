import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Template from '../layouts/Template';

const TITLE = "Home Page";

export default function Home() {
  const words = TITLE.split(" ");
  const [bouncingIndex, setBouncingIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setBouncingIndex(index);
      index = (index + 1) % words.length;
    }, 1000); // bounce each word every 1s
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Template
      title={
        <span>
          {words.map((word, i) => (
            <span
              key={i}
              className={bouncingIndex === i ? 'bounce' : ''}
              style={{ marginRight: i < words.length - 1 ? 8 : 0 }}
            >
              {word}
            </span>
          ))}
        </span>
      }
    >
      <div className='options-wrapper'>
        <Link to={'/create-timer'} className="options-button"><p>Create Timer</p></Link>
        <Link to={'/my-timers'} className="options-button"><p>My Timers</p></Link>
        <Link to={'/browse-timers'} className="options-button"><p>Browse Timers</p></Link>
        <Link to={'/stats'} className="options-button"><p>Stats</p></Link>
      </div>
    </Template>
  );
}