import Home from "./home"
import Aboutme from "./aboutme"
import Blogs from "./blogs"
import Projects from "./projects"
import Contact from "./Contact"
import CodingProfiles from "./codingProfiles"
import Experience from "./experience"

function Homepage(){
    return (
        <>
            <Home/>
            <Aboutme/>
            {/* <Experience/> */}
            <CodingProfiles/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Homepage