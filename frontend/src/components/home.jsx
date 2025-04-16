import bg from "/bg.jpg"
// import CanvasLayout from "./components/canvasLayout"
import { useEffect, useState } from "react";

function Home(){
    const words = ["Aspiring SWE", "Competitive Programming", "Web-3", "Block Chain", "Full Stack Webdev"]
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [displayedText, setDisplayedText] = useState("");
    const [speed, setSpeed] = useState(100);
    useEffect(()=>{
        const currentWord = words[currentWordIndex];
        let typingTimeout; 
        if (deleting){
            typingTimeout = setTimeout(()=>{
                setDisplayedText(currentWord.slice(0, displayedText.length - 1));
                if (displayedText === ""){
                    setDisplayedText("");
                    setSpeed(150);
                    setDeleting(false);
                    setCurrentWordIndex((currentWordIndex)=> (currentWordIndex+1) % words.length);
                } 
            }, speed)
        } else {
            typingTimeout = setTimeout(()=>{
                setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                if (displayedText === currentWord){
                    const wait = setTimeout(()=>{
                        clearTimeout(wait);
                        setDeleting(true);
                    }, 1000);
                    setSpeed(50);
                }
            }, speed);
        }
        return ()=> clearTimeout(typingTimeout);
    }, [deleting, displayedText, currentWordIndex]);
    return(
        <div className="text-white flex justify-center items-center z-0 h-screen w-full bg-cover bg-center sm:bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
            <div className="z-10 w-full">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-center sm:text-7xl text-5xl font-semibold w-5/6">Hey, I am Arjun Verma</h1>
                </div>
                <div className="sm:mt-8 mt-6 flex justify-center items-center h-16">
                    {/* typewriter animation */} 
                    <span className="text-center sm:text-3xl text-2xl font-normal ">{displayedText}</span>
                    <div className="border-r h-8 w-[2px] bg-white"></div>
                </div>
            </div>
            <div className="z-0 absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    )
}

export default Home