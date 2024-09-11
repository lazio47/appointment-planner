import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {
        list.map(
          ({name, ...rest}, index) => {
            return <Tile name={name} description={rest} key={index} />;
          }
        )
      }
    </div>
  );
};
