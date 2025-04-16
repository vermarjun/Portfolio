import email from "/email.png"
import call from "/call.png"
function Contact(){
    const aboutme =  `Let’s cook something awesome! Got a cool project idea, a wild collaboration plan, or just feel like chatting over a virtual cup of coffee? Hit me up! I’m always down to connect with like-minded people—because great ideas don’t just spark themselves, right? Who knows, we might not only build something epic but also kick off a solid friendship. So, don’t be shy—drop me a message, and let’s make it happen!`
    return (
        <>
        <div className="w-full sm:h-screen h-fit bg-[hsl(0,0%,3.53%)] text-white flex justify-center items-center p-5 sm:p-0">
            <div className="sm:w-5/6 sm:h-5/6 sm:flex bg-black">
                <div className="sm:w-1/2 h-full sm:p-10 sm:py-0 p-3 py-5 mt-10">
                    {/* message me */}
                    <div className="w-fit">
                        <div >
                            <p className="text-3xl font-semibold">Message me</p>
                            <div className="bg-blue-600 w-5/6 mt-2 h-1 rounded-full"></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <input type="text" name="" id="" className="w-full bg-neutral-700 rounded-md mt-5 p-2 border border-gray-600" placeholder="Your Name"/>
                        <input type="text" name="" id="" className="w-full bg-neutral-700 rounded-md mt-5 p-2 border border-gray-600" placeholder="Your Email"/>
                        <input type="text" name="" id="" className="w-full bg-neutral-700 rounded-md mt-5 p-2 border border-gray-600" placeholder="Subject"/>
                        <textarea name="" id="" className="w-full h-44 bg-neutral-700 rounded-md mt-5 p-2 border border-gray-600" placeholder="Message"></textarea>
                        <button className="px-5 p-3 mt-2 bg-blue-600 rounded-full">Send Message</button>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:p-10 p-5 h-full">
                    {/* get in touch */}
                    <div className="w-full">
                        <div className="w-fit h-fit">
                            <p className="text-3xl font-semibold">Get in touch</p>
                            <div className="bg-blue-600 w-5/6 mt-2 h-1 rounded-full"></div>
                        </div>
                        <div>
                            <div className="text-base font-normal text-balance">
                                {
                                    aboutme.split('\n').map((line, index)=>{
                                        return <p key={index} className="mt-2">{line}<br/></p>
                                    })      
                                }
                            </div>
                        </div>
                        <div className="w-fit h-fit">
                            <div className="mt-2 flex gap-2 justify-start items-center">
                                <img src={email} alt="" className="h-4" loading="lazy"/>
                                <p>vermarjun26@gmail.com</p>
                            </div>
                            <div className="mt-2 flex gap-2 justify-start items-center">
                                <img src={call} alt="" className="h-4 " loading="lazy"/>
                                <p>6378560286</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact