// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickTimer from "../components/QuickTimer";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className={`page-header${isExpanded ? " expanded" : ""}`}>
      <Link to="/" className={`header-title${isExpanded ? " expanded" : ""}`}>
        hangTimer
      </Link>
      <QuickTimer isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </header>
  );
}

