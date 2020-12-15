import React from "react";

const SystemSpinner = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <span
        className="ml-3 spinner-border"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
};

export default SystemSpinner;
