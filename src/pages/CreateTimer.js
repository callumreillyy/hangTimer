import Template from "../layouts/Template";
import { useState } from "react";

export default function CreateTimer() {
    const [isExpanded, setIsExpanded] = useState(null);

    const handleExpandClick = (key) => {
        setIsExpanded((prev) => (prev === key ? null : key));
    };

    const getButtonStyle = (expanded) => ({
        width: expanded ? "90vw" : "",
        height: expanded ? "60vh" : "",
        backgroundColor: expanded ? "var(--blue-light)" : "",
        color: expanded ? "var(--black)" : "",
        transition: "width 1s ease, height 1s ease",
        overflow: "hidden",
    });

    const getTextStyle = (expandedKey, currentKey) => ({
        position: "absolute",
        padding: expandedKey === currentKey ? "0 0 0 0" : "0 0 0 1rem",
        top: expandedKey === currentKey ? "1rem" : "0%",
        left: expandedKey === currentKey ? "1rem" : "0%",
        transform: expandedKey === currentKey ? "none" : "translate(0%, 150%)",
        transition: "all 0.6s ease",
        margin: 0,
    });

    return (
        <Template title="Create Timer">
            <div className="options-wrapper">
                <a
                    className="options-button"
                    style={getButtonStyle(isExpanded === "ai")}
                    onClick={() => handleExpandClick("ai")}
                >
                    <p style={getTextStyle(isExpanded, "ai")}>AI Timer</p>

                </a>
                <a
                    className="options-button"
                    style={getButtonStyle(isExpanded === "manual")}
                    onClick={() => handleExpandClick("manual")}
                >
                    <p style={getTextStyle(isExpanded, "manual")}>Manual Timer</p>
                </a>
            </div>
        </Template>
    );
}
