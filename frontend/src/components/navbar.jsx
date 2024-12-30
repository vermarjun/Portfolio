import { useState, useEffect } from "react";

function Navbar({divRef}){
    const [active, setactive] = useState("none");
    const [scrollInfo, setScrollInfo] = useState({
        scrollTop: 0,
        scrollHeight: 0,
        clientHeight: 0,
      });
      useEffect(() => {
        const handleScroll = () => {
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
          setScrollInfo({
            scrollTop,
            scrollHeight,
            clientHeight,
          });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`flex sm:justify-between justify-start sm:px-24 px-4 items-center text-[1.6rem] font-[600] font-sans h-20 fixed sm:w-full w-screen ${scrollInfo.scrollTop == 0? "bg-opacity-20 text-white":"bg-opacity-80 -translate-y-3 text-blue-600"} duration-300 ease-linear transition-all top-0 left-0 z-50  backdrop-filter bg-black`}>
          <div className="text-[1.6rem]">
            <p>vermarjun.com</p>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-10 text-[1rem] font-semibold">
            <div className="group">
                <p className="cursor-pointer">HOME</p>
                <div className={`${scrollInfo.scrollTop == 0? "bg-white":"bg-blue-600"} transition-all duration-300 ease-linear h-[2px] w-0 group-hover:w-5/6 rounded-full`}></div>
            </div>
            <div className="group">
                <p className="cursor-pointer">ABOUT</p>
                <div className={`${scrollInfo.scrollTop == 0? "bg-white":"bg-blue-600"} transition-all duration-300 ease-linear h-[2px] w-0 group-hover:w-5/6 rounded-full`}></div>
            </div>
            {/* <div className="group">
                <p className="cursor-pointer">BLOG</p>
                <div className={`${scrollInfo.scrollTop == 0? "bg-white":"bg-blue-600"} transition-all duration-300 ease-linear h-[2px] w-0 group-hover:w-5/6 rounded-full`}></div>
            </div> */}
            <div className="group">
                <p className="cursor-pointer">CANVAS</p>
                <div className={`${scrollInfo.scrollTop == 0? "bg-white":"bg-blue-600"} transition-all duration-300 ease-linear h-[2px] w-0 group-hover:w-5/6 rounded-full`}></div>
            </div>
            <div className="group">
                <p className="cursor-pointer">CONTACT</p>
                <div className={`${scrollInfo.scrollTop == 0? "bg-white":"bg-blue-600"} transition-all duration-300 ease-linear h-[2px] w-0 group-hover:w-5/6 rounded-full`}></div>
            </div>
          </div>
        </div>
    )
}
export default Navbar;