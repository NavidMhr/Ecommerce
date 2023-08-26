import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){

    return(
        <>
        <div className="container-fluid">
                <h1 className="text-center text-secondary">Sorry page Not Found</h1>
            <Link to='/' className=" btn btn-outline-success" >back to Home</Link>
        </div>
        </>
    )
}