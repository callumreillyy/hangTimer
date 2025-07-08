import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const lastTimeRef = useRef(Date.now());
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      lastTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const delta = now - lastTimeRef.current;
        setElapsed(prev => prev + delta);
        lastTimeRef.current = now;
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Format as mm:ss:ms (1 digit ms)
  const minutes      = Math.floor(elapsed / 60000).toString().padStart(2, "0");
  const seconds      = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, "0");
  const milliseconds = Math.floor((elapsed % 1000) / 100).toString();
  const formatted    = `${minutes}:${seconds}:${milliseconds}`;

  // Inline style for title positioning when expanded (top-left)
  const titleStyle = isExpanded
    ? { position: 'absolute', top: '25px', left: '25px'}
    : { position: 'static' };

  return (
    <header className={`page-header${isExpanded ? " expanded" : ""}`}>
      <Link to='/' className="header-title" style={titleStyle}>
        hangTimer
      </Link>

      {!isExpanded && (
        <button
          className="header-timer-button"
          onClick={() => { 
            setIsExpanded(true);
            setIsRunning(false);
            // setElapsed(0); don't reset, can add badges for achieving really long time :o
        }}  
        >
          {formatted}
        </button>
      )}

      {isExpanded && (
        <div className="timer-fullscreen">
          {/* Close button to collapse back */}
          <button
            className="timer-close-button"
            onClick={() => setIsExpanded(false)}
          >
            ×
          </button>

          <div className="timer-display">{formatted}</div>
          <div className="timer-controls">
            {isRunning ? (
              <button onClick={() => setIsRunning(false)}>Stop</button>
            ) : (
              <button onClick={() => setIsRunning(true)}>Start</button>
            )}
            <button onClick={() => { setElapsed(0); setIsRunning(false); }}>
              Reset
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
