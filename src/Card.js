import React from "react";

function Card({ Name, Age, Place }) {
  return (
    <div>
      <p>{Name}</p>
      <p>{Age}</p>
      <p>{Place}</p>
    </div>
  );
}

export default Card;
