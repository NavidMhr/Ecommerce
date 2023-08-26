import React from "react";
import Header from "./header";
import SideBar from "./sideBar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout(){

    return(
    <>
   <div className="container">
   <Header/>
   <SideBar/>
   <Footer/>
   <Outlet/>
   </div>
   </>
    )
}