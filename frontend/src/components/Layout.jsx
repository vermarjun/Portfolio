import Navbar from "./navbar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import bg from "/bg.jpg";
import loader from "/loader.webm"

function Loader(){
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <video autoPlay loop muted playsInline>
                <source src={loader} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

function Layout(){
    const [loadedImage, setLoadedImage] = useState(false);
    useEffect(()=>{
        const image = new Image();
        image.src = bg;
        image.onload = ()=>{
            setLoadedImage(true);
        }
    }, []);
    return (
        <>
            <Navbar/>
                {
                    loadedImage? <Outlet/> : <Loader/>
                }
            <Footer/>
        </>
    )
}

export default Layout