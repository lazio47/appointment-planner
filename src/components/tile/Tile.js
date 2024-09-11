import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      
      {
        Object.keys(description).map(element => {
          return <p className="tile">{description[element]}</p>;
        })
      }
    </div>
  );
};
