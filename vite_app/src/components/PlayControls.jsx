import image11 from '../assets/image11.png';
import heart2 from '../assets/bx_bxs-heart.png';
import music from '../assets/Music.png';
import right from '../assets/right.png';

import './PlayControls.css'

function PlayControls(){
    return(
        <>
        <div className="footer">
        <div className="footer-2">
          <img className="img11" src={image11}
            alt="" />
          <span className="DremingOn">Dreming On</span>
          <span className="nef">NEFFEX</span>
          <img className="heart2" src={heart2} alt="" />
          <img className="music" src={music} alt="" />
          <img className="right" src={right} alt="" />
        </div>
      </div>

      <div className="green">
        <span className="listen">Listening on ASUS-ROG-G531GT</span>
      </div>
        </>
    );
}

export default PlayControls;