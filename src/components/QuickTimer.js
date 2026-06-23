import { useEffect, useState, useRef } from "react";

export default function QuickTimer({ isExpanded, setIsExpanded }) { 
  const [elapsed, setElapsed] = useState(() => {
    const savedElapsed = localStorage.getItem("quickTimerElapsed");
    return savedElapsed ? parseInt(savedElapsed, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(true);
  
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    let id;
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsed;
      id = setInterval(() => {
        setElapsed((prevElapsed) => {
          const newElapsed = Date.now() - startTimeRef.current;
          localStorage.setItem("quickTimerElapsed", newElapsed); // Save to localStorage
          return newElapsed;
        });
      }, 100); 
    }
    return () => clearInterval(id);
  }, [isRunning, elapsed]);

  // Format as mm:ss:ms (1-digit ms)
  const minutes      = Math.floor(elapsed / 60000).toString().padStart(2, "0");
  const seconds      = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, "0");
  const milliseconds = Math.floor((elapsed % 1000) / 100).toString();
  const formatted    = `${minutes}:${seconds}:${milliseconds}`;

  return (
    <>
      {/* collapsed: show small timer button */}
      {!isExpanded && (
        <button
          className="header-timer-button"
          onClick={() => {
            setElapsed(0);
            setIsExpanded(!isExpanded);
            setIsRunning(isExpanded);
          }}
        >
          {formatted}
        </button>
      )}

      {/* expanded: full-screen view */}
      {isExpanded && (
        <div className="timer-fullscreen">
          <button
            className="timer-close-button"
            onClick={() => {
              setIsExpanded(!isExpanded)
              setIsRunning(isExpanded)
            }}
          >
            ×
          </button>

          <div className="timer-display">{formatted}</div>
          <div className="timer-controls">
            {isRunning ? (
              <button onClick={() => setIsRunning(!isRunning)}>Stop</button>
            ) : (
              <button onClick={() => setIsRunning(!isRunning)}>Start</button>
            )}
            <button
              onClick={() => {
                setElapsed(0);
                setIsRunning(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )} 
    </> 
  );
}