import { Link } from "react-router-dom";

export default function OptionButton({
  label,
  to = null,
  onClick = null,
  isExpanded = false,
  isExpandable = false,
}) {
  const buttonClass = `options-button ${isExpanded ? "expanded" : ""}`;

  // check if button is expandable, then if isExpanded
  const textClass = isExpandable
    ? isExpanded
      ? "move-top-left"
      : "move-center"
    : "";

  if (to) {
    // Render as a link
    return (
      <Link to={to} className={buttonClass}>
        <p className={textClass}>{label}</p>
      </Link>
    );
  }

  // Render as a clickable <a>
  return (
    <a className={buttonClass} onClick={onClick}>
      <p className={textClass}>{label}</p>
    </a>
  );
}
