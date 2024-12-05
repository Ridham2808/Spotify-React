import top from '../assets/top.png';
import user from '../assets/user.png';
import object1 from '../assets/object1.png';
import heart from '../assets/heart.png';
import image4 from '../assets/image4.png';
import image3 from '../assets/image3.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image9 from '../assets/image9.png';
import image8 from '../assets/image8.png';
import image7 from '../assets/image7.png';
import image6 from '../assets/image6.png';
import image5 from '../assets/image5.png';
import image10 from '../assets/image10.png';

import './MainBar.css'

function Main(){

  const boxItems = [
    { image: object1, otherImg: heart, text: "Liked Songs", className: "box1" },
    { image: image4, text: "Netflix Playlist", className: "box2" },
    { image: image3, text: "K/DA", className: "box3" },
    { image: image1, text: "Liked Songs", className: "box4" },
  ];

  const items = [
    { image: image9, text: "Weekly Motivation" },
    { image: image8, text: "Meditation Self" },
    { image: image7, text: "Words Beyond Act" },
    { image: image6, text: "The Alexa Show" },
    { image: image5, text: "The Stories Of Ma..." },
    { image: image10, text: "Motivation Daily..." },
  ];


    return(
        <>
        <div className="main">
        <img src={top} alt="Arrow" className="arrow" />
        <img src={user} alt="Profile" className="profile" />
        <p className="greeting"><b>Good morning</b></p>
      </div>

      <div className="boxes">
        {boxItems.map((box, index) => (
          <div className={box.className} key={index}>
            <img src={box.image}  />
            {box.otherImg && <img src={box.otherImg}  className="photo2" />}
            <p>{box.text}</p>
          </div>
        ))}
      </div>

      <div className="box5">
        <img src={image2} alt="" />
        <p>Dance/Electronic Mix</p>
      </div>

      <div className="content2"><b>Shows You Might Like</b></div>
      <div className="see">SEE ALL</div>

      <div className="ri">
      {items.map((item, index) => (
        <div className="main_boxes" key={index}>
          <img src={item.image} alt="" />
          <p>{item.text}</p>
        </div>
      ))}
      </div>
        </>
    );
}

export default Main;