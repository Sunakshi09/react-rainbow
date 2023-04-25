import React, { useState } from "react";
// Make sure to import t component we just built:
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";
function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });
  /*return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock Key={color} />
      ))}
    </div>
  );*/

  const addColor = (newColor) => {
    setColors([colors, newColor]);
  };

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
