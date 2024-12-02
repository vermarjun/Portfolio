import Home from "./home"
import Aboutme from "./aboutme"
import Blogs from "./blogs"
import Projects from "./projects"
import Contact from "./Contact"

function Homepage(){
    return (
        <>
            <Home/>
            <Aboutme/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Homepage