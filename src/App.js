import { useState } from "react";

import ColorsList from "./ColorsList";

import "./app.css";

const App = () => {
  const colors = ["red", "green", "blue"];

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
      <ColorsList colors={colors} />
    </div>
  );
};

export default App;
