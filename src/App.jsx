import React, { useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Meme from "./assets/Meme";

export default function App() {
  return (
    <div className='everything'>
      <Header />
      <Meme />
    </div>
  );
}
