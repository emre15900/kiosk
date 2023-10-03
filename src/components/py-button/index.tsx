import React from "react";

interface PyButtonProps {
  title: string;
  padding: string;
}

function PyButton({ title, padding }: PyButtonProps) {
  return (
    <div>
      <button
        className="hoverButton"
        style={{
          padding: padding,
          background: "#444094",
          color: "#ffffff",
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

export default PyButton;
