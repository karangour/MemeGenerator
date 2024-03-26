import React, {useState} from "react";
import memesData from "../memesData";
import dummymeme from './../../public/images/dummy-meme.png'

export default function Textboxes() {
  
  
  let [memeLocation, setmemeLocation] = useState(dummymeme);
  
  function handleClick() {
    let randomMeme = Math.floor(Math.random() * memesData.data.memes.length);
    memeLocation = memesData.data.memes[randomMeme].url;
    // console.log(memeLocation)
    setmemeLocation(memeLocation)
  }

  return (
    <div className="textboxes">
      <div className="boxes">
        <label className="top--label">
          Top text
          <input
            type="text"
            name="toptext"
            placeholder="Enter top text here.."
            className="top--text"
          />
        </label>
        <label className="bottom--label">
          Bottom text
          <input
            type="text"
            name="bottomtext"
            placeholder="Enter bottom text here.."
            className="bottom--text"
          />
        </label>
      </div>
      <button type="button" className="button" onClick={handleClick}>
        GET A NEW MEME IMAGE 🖼
      </button>
      <div >
            <img src={memeLocation} className='image'/>
        </div>
    </div>
  );
}
