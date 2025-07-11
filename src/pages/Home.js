import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Template from '../layouts/Template';
import OptionButton from "../components/OptionButton";


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
        <OptionButton label="Create Timer" to="/create-timer" />
        <OptionButton label="My Timers" to="/my-timers" />
        <OptionButton label="Browse Timers" to="/browse-timers" />
        <OptionButton label="Stats" to="/stats" />
      </div>
    </Template>
  );
}