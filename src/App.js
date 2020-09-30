import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  // Initialize

  // Add number

  const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
      if (gridFull) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] === 0) {
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        added = true;
      }
    //   if (attempts > 50) {
    //     gridFull = true;
    //     let gameOverr = checkIfGameOver();
    //     if (gameOverr) {
    //       alert("game over");
    //       // setGameOver(true);
    //     }
    //     // setGameOver(true);
    //   }
    // }
  };

  // Swipe left up right down

  // Check Gameover

  // Reset Game

  return (
    <div
      style={{
        background: "#AD9D8F",
        width: "max-content",
        height: "max-content",
        margin: "auto",
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        position: "relative",
      }}
    >
        {data.map((row, oneIndex) => {
          return (
            <div style={{ display: "flex" }} key={oneIndex}>
              {row.map((digit, index) => (
                <Block num={digit} key={index} />
              ))}
            </div>
          );
        })}
    </div>
  );
}
  const Block = ({ num }) => {
    const { blockStyle } = style;

    return (
      <div
        style={{
          ...blockStyle,
          // background: getColors(num),
          color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
        }}
      >
        { num }
        {/* {num !== 0 ? num : ""} */}
      </div>
    );
  };

  const style = {
    blockStyle: {
      height: 80,
      width: 80,
      background: "lightgray",
      margin: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 45,
      fontWeight: "800",
      color: "white",
    },
  };
export default App;