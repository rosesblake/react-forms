import React, { useState } from "react";

const Box = ({ color, width, height, deleteBox, box }) => {
  return (
    <div
      data-testid="box"
      className="Box"
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <button onClick={() => deleteBox(box)}>X</button>
    </div>
  );
};

export default Box;
