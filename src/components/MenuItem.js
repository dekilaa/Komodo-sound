import React from "react";
import { IoLogoYoutube } from "react-icons/io";

function MenuItem({ image, name, price,  }) {
  return (
    <a className = "ytAnchor" href={price}>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <IoLogoYoutube/>
    </div>
    </a>
  );
}

export default MenuItem;
