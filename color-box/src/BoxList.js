import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <>
        {boxes.map((box) => (
          <Box
            key={box.id}
            color={box.color}
            width={box.width}
            height={box.height}
            deleteBox={deleteBox}
            box={box}
          />
        ))}
      </>
    );
  };

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const deleteBox = (box) => {
    setBoxes((boxes) => boxes.filter((b) => b.id !== box.id));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
};

export default BoxList;
