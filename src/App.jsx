import React, { useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Textboxes from "./assets/Textboxes";

export default function App() {
  return (
    <div className='everything'>
      <Header />
      <Textboxes />
    </div>
  );
}
