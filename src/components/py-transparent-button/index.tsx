import React from "react";

interface PyButtonProps {
  title: string;
  padding: string;
}

function PyTransparentButton({ title, padding }: PyButtonProps) {
  return (
    <div>
      <button
        className="hoverButtonTransparent"
        style={{
          padding: padding,
          background: "#ffffff",
          border: "1px solid #444094",
          color: "#444094",
          borderRadius: "30px",
          textAlign: "center",
          transition: "all 0.5s ease",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default PyTransparentButton;
