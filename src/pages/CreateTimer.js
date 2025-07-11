import OptionButton from "../components/OptionButton";
import { useState } from "react";
import Template from "../layouts/Template";

export default function CreateTimer() {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleExpandClick = (key) => {
    setIsExpanded((prev) => (prev === key ? null : key));
  };

  const buttons = [
    {label: "AI Timer", key: "ai"},
    {label: "Manual Timer", key: "manual"},
  ];

  return (
    <Template title="Create Timer">
      <div className="options-wrapper">
        {buttons.map(btn => (
          <OptionButton
            key={btn.key}
            label={btn.label}
            isExpanded={isExpanded === btn.key}
            isExpandable
            onClick={() => handleExpandClick(btn.key)}
          />
        ))}
      </div>
    </Template>
  );
}
