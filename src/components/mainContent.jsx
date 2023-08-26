import React from "react";

import { AiOutlineReload } from 'react-icons/ai';
import imageOne from "../images/image1.webp";
import imageTwo from "../images/image2.webp";
import imageThree from "../images/image3.webp";
import imageFour from "../images/image4.webp";
import imageFive from "../images/image5.webp";
import imageSix from "../images/image6.webp";

export default function MainContent() {
  return (
    <div className="main-container">

      <div className="row">
        <div className="col-lg-4 list-card">
          <img src={imageOne} alt=""/>
          <h6>
          Ruffle Halterneck Maxi Dress
          </h6>
          <p>579$</p>
        </div>
        <div className="col-lg-4 list-card">
          <img src={imageTwo} alt="" />
          <h6>
          One Shoulder Maxi Slip Dress
          </h6>
          <p>559$</p>
        </div>
        <div className="col-lg-4 list-card">
          <img src={imageThree} alt="" />
          <h6>
           Satin V Neck Ruched Mini Dress
          </h6>
          <p>600$</p>
        </div>


      </div>
      <div className="row mt-5">
        <div className="col-lg-4 list-card">
          <img src={imageFour} alt="" />
          <h6>
          Satin Lace Up One Shoulder Mini Dress
          </h6>
          <p>420$</p>
        </div>
        <div className="col-lg-4 list-card">
          <img src={imageFive} alt="" />
          <h6>
          Bold Floral Print Square Neck Satin Midi Dress
          </h6>
          <p>399$</p>
        </div>
        <div className="col-lg-4 list-card">
          <img src={imageSix} alt="" />
          <h6>
          Diamante Trim Satin Maxi Split Dress
          </h6>
          <p>550$</p>
        </div>
      </div>
      <p className="text-center reload" onClick={() => { window.location.reload(); }}>Reload The Page
      <AiOutlineReload className="reload-icon" size={20}/>
      </p>
    </div>
  );
}
