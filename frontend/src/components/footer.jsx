import linkedin from "/linkedin.png"
import instagram from  "/instagram.png"
import twitterIcon from  "/twitterIcon.png"

function SocialLinks(){
    return (
        <div className="sm:w-fit h-fit">
                <div className="flex justify-around items-center sm:gap-x-2">
                    <a href="https://in.linkedin.com/in/arjun-verma-59962528a" target="_blank">
                        <img src={linkedin} alt="" loading="lazy" className="sm:h-12 h-10"/>
                    </a>
                    <a href="https://www.instagram.com/vermarjun_/" target="_blank">
                        <img src={instagram} alt="" loading="lazy" className="sm:h-12 h-10"/>
                    </a>
                    <a href="https://www.instagram.com/vermarjun_/" target="_blank">
                        <img src={twitterIcon} alt="" loading="lazy" className="sm:h-10 h-8"/>
                    </a>
                </div>
                <p className="text-xs text-center font-extralight">
                    Social Links
                </p>
            </div>
    )
}

function AuthorCredits(){
    return (
        <div className="sm:gap-2 gap-0 flex justify-center items-center w-fit">   
                <span className="text-lg font-semibold">Designed & Made by -</span> 
                <span className="text-lg">Arjun Verma</span>
            </div>
    )
}

function Footer(){
    return (
        <div className="flex sm:flex-row flex-col justify-between items-center bg-black h-fit w-full text-white px-5">
            <div className="sm:w-fit w-full h-fit rounded-lg sm:px-5 py-2 flex justify-between items-center">
                <div>
                    <div className="flex justify-start items-end w-full h-fit gap-1">
                        <h1 className="font-bold text-4xl h-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            349
                        </h1>
                        <div className="mb-1 h-full w-fit flex justify-end items-end text-xs text-center ">
                            <p>Visits</p>
                        </div>
                    </div>
                    <div className="font-extralight text-xs">
                        See How I'm counting visits?
                    </div>
                </div>
                <div className="sm:hidden w-fit h-full">
                    <SocialLinks/>
                </div>
            </div>
            <div className="sm:flex hidden">
                <AuthorCredits/>
            </div>
            <div className="sm:flex hidden">
                <SocialLinks/>
            </div>
        </div>
    )
}

export default Footer