import React from "react";
import { FillStarIcon, StarIcon } from "../assets/Icons/Icon";

const StareRate = ({ rate = 0 }) => {
  return (
    <ul className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <li key={index}>{index < rate ? <FillStarIcon /> : <StarIcon />}</li>
      ))}
    </ul>
  );
};

export default StareRate;
