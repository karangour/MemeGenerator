import React, { useState } from "react";
import memesData from "../memesData";

export default function Textboxes() {
  const [things, setThings] = useState({
    topText: "",
    bottomText: "",
    memeLocation: "./../../public/images/dummy-meme.png"
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => memesData = data.data.memes)
  }, [])

  function handleClick() {
    let randomMeme = Math.floor(Math.random() * memesData.data.memes.length);
    things.memeLocation = memesData.data.memes[randomMeme].url;
    setThings((prev) => ({
      ...prev,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setThings((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="textboxes">
      <div className="boxes">
        <label className="top--label">
          Top text
          <input
            type="text"
            name="topText"
            placeholder="Enter top text here.."
            className="top--text"
            onChange={handleChange}
            value={things.topText}
          />
        </label>
        <label className="bottom--label">
          Bottom text
          <input
            type="text"
            name="bottomText"
            placeholder="Enter bottom text here.."
            className="bottom--text"
            onChange={handleChange}
            value={things.bottomText}
          />
        </label>
      </div>
      <button type="button" className="button" onClick={handleClick}>
        GET A NEW MEME IMAGE 🖼
      </button>
      <div className="meme">
        <img src={things.memeLocation} className="image" />
        <h2 className="meme--text top">{things.topText}</h2>
        <h2 className="meme--text bottom">{things.bottomText}</h2>
      </div>
    </div>
  );
}
