import React from "react";
import ReactDOM from "react-dom/client";

const parent = document.getElementById("rcnt");
console.log("[DEBUG][EXT] parent", parent)
if (parent) {
  const root = document.createElement("div");
  root.id = "crx-root";
  parent.appendChild(root);

  const Content = () => {
    return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>ChatGPT</div>
      <div>This is your result</div>
    </div>
    );
  };

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Content />
    </React.StrictMode>
  );
}
