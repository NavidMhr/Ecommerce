import React from "react";
import { Link} from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';


export default function Header(){

    return(
      <>
<nav class="navbar navbar-expand-lg border-secondary ">
  <a class="nav-link active">

    <Link to='/home' className="home-page" >SHOP

    </Link>
    </a>
  <a class="nav-link active mx-4">
    <Link to='/about' className="about-page">
        About
    </Link>
    </a>
   <div className="icons">
      <AiOutlineUser className="nav-icon mx-3"/>
      <AiOutlineHeart className="nav-icon mx-3"/>
      <AiOutlineSearch className="nav-icon mx-3"/>
      <FaShoppingCart className="nav-icon mx-3"/>
   </div>
</nav>

<div className="gender">
   Women
</div>
    </>
)}