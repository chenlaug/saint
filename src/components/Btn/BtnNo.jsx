import React from "react";
import "./BtnNo.css";

export default function BtnNo() {
  const moveButton = (e) => {
    // Assuming a maximum button size for calculation
    const maxButtonWidth = 50;
    const maxButtonHeight = 50;

    // Adjust the window dimensions to account for the button's dimensions
    const windowHeight = window.innerHeight - maxButtonHeight; // Adjust for the button's height
    const windowWidth = window.innerWidth - maxButtonWidth; // Adjust for the button's width

    // Randomly generate top and left values within the adjusted viewport
    const newTop = Math.random() * windowHeight;
    const newLeft = Math.random() * windowWidth;

    // Apply the new position ensuring the button stays within the viewport
    e.target.style.position = "absolute";
    e.target.style.top = `${newTop}px`;
    e.target.style.left = `${newLeft}px`;
  };

  return (
    <button className="btnNo" onMouseOver={moveButton}>
      Non
    </button>
  );
}
