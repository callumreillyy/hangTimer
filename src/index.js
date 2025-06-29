import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MyTimers from './pages/MyTimers';
import CreateTimer from './pages/CreateTimer';
import BrowseTimers from './pages/BrowseTimers';
import Stats from './pages/Stats';
import reportWebVitals from './reportWebVitals';

/**
 * Render pages.
 */
const root = ReactDOM.createRoot(document.getElementById('root')); // <-- updated
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/my-timers" element={<MyTimers />}/>
        <Route path="/create-timer" element={<CreateTimer />}/>
        <Route path="/browse-timers" element={<BrowseTimers />}/>
        <Route path="/stats" element={<Stats />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
