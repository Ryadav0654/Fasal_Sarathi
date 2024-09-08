import { useState } from "react";
import "./App.css";

function App() {
  const [randomY, setRandomY] = useState(0);
  const [randomX, setRandomX] = useState(0);

  const handleMouseEnter = () => {
    const newRandomY = randomNumberY();
    const newRandomX = randomNumberX();
    setRandomY(newRandomY);
    setRandomX(newRandomX);
  };

  const randomNumberY = () => {
    return Math.floor(Math.random() * 100 + 1);
  };
  const randomNumberX = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  return (
    <>
      <h1
        className={`text-8xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold hover:scale-110 hover:-translate-y-5  hover:cursor-pointer duration-300`}
      >
        FasalSarathi
      </h1>
    </>
  );
}

export default App;
