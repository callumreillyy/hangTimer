import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <Link to={'/'} className="header-title">hangTimer</Link>
      {/* timer hh:mm:ss */}
      <span className="header-timer">timer</span>
    </header>
  );
}