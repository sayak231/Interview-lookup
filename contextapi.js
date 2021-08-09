import React, { useState, createContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [startgame, setStartgame] = useState(false);

  return (
    <GameContext.Provider
      value={{
        name: [name, setName],
        color: [color, setColor],
        game: [startgame, setStartgame],
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
