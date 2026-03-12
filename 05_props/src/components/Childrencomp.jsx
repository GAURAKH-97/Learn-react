import React from "react";
export default function Childrencomp({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}