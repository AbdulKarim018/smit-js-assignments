import React from "react";
import Button from "./Button";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function ColorPicker({
  backgroundColor,
  setBackgroundColor,
  textColor,
  setTextColor,
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 ">
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            // defaultValue={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center gap-2 ">
          <label htmlFor="textColor">Text Color</label>
          <input
            type="color"
            id="textColor"
            value={textColor}
            // defaultValue={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>
      <Button
        text={
          <p className="flex items-center gap-2">
            Reset <FaArrowRotateLeft />
          </p>
        }
        onClick={() => {
          setBackgroundColor("#000000");
          setTextColor("#ffffff");
        }}
      />
    </div>
  );
}
