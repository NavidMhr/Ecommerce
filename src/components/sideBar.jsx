import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import MainContent from "./mainContent";

export default function SideBar() {
  const [show, setShow] = useState(true);
  const [showStyle, setShowStyle] = useState(false);

  function handleApparels() {
    setShow((prevState) => !prevState);
  }

  function handleStyle() {
    setShowStyle((prevState) => !prevState);
  }

  return (
    <>
      <div class="container-sidebar">
        <div class="sidebar">
          <h5 className="d-flex">Filtrs</h5>
          <h5 className="filter-list" onClick={handleApparels}>
            Apparels
            {show ? (
              <FaChevronUp className="list-chevron" />
            ) : (
              <FaChevronDown className="list-chevron" />
            )}
          </h5>
          <li className="toggle-li">{show ? "> PANTS" : ""}</li>
          <li className="toggle-li">{show ? "> JUMPSUITS" : ""}</li>
          <li className="toggle-li">{show ? "> SHORTS" : ""}</li>
          <li className="toggle-li">{show ? "> TOPS" : ""}</li>
          <h5 className="filter-list">Accesories</h5>
          <h5 className="filter-list">
            Houseware <FaChevronUp className="list-chevron" />
          </h5>
          <h5 className="filter-list">
            Other <FaChevronUp className="list-chevron" />
          </h5>
          <h5 className="filter-list">Techniques </h5>

          <h5 className="filter-list" onClick={handleStyle}>
            Styles
            {showStyle ? (
              <FaChevronUp className="list-chevron" />
            ) : (
              <FaChevronDown className="list-chevron" />
            )}
          </h5>
          <li className="toggle-li">{showStyle ? "> TOPS" : ""}</li>
          <li className="toggle-li">{showStyle ? "> Bold" : ""}</li>
          <li className="toggle-li">{showStyle ? "> Neutrals" : ""}</li>
          <hr />
          {/* Sizs */}
          <p className="">Sizes</p>
          <button className="btn btn-sm btn-outline-secondary mx-1">Xs</button>
          <button className="btn btn-sm btn-outline-secondary mx-1">S</button>
          <button className="btn btn-sm btn-outline-secondary mx-1">M</button>
          <button className="btn btn-sm btn-outline-secondary mx-1">X</button>
          {/* Sizs */}
        </div>
        {/* Content */}
        <div class="content"> 
        
        <MainContent/>
        
         </div>
      </div>
    </>
)
}
