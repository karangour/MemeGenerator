import React from "react";
import troll from "./../../public/images/troll-face.png";

export default function Header() {
  return (
    <div className='header'>
      <img src={troll} className="troll--image" />
      <h2>MemeGenerator</h2>
    </div>
  );
}
