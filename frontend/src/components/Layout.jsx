import Navbar from "./navbar"
import Footer from "./footer"
import { Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout