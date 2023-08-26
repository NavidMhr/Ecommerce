import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Layout from "./components/layout";
import NotFound from './pages/NotFound'

export default function App(){


    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Layout/>} >
                <Route path="home" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="*" element={<NotFound/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}