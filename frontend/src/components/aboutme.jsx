import Arjun from "/Arjun.jpg"
import leetcode from "/leetcode.png"
import github from "/github.png"
import linkedin from "/linkedin.png"
import instagram from  "/instagram.png"
import codeforces from "/codeforces.png"
function Aboutme(){
    const skills = ["C++", "Java Script", "Type Script", "Python", "Git", "Git Hub", "React.js", "Next.js", "Node.js", "MongoDb"]
    const intrests = ["Web3", "BlockChain", "NLP", "AI", "Machine Learning", "Computer Vision", "Robotics", "IoT"]
    const aboutme =  `Hey, I’m Arjun Verma, a sophomore at Guru Ghasidas University, majoring in Information Technology. I’ve been hooked on tech since middle school, where I dabbled in cybersecurity and robotics. These days, I’m learning about blockchains and Web3 while keeping my problem-solving game sharp—whether it’s cracking LeetCode questions or brainstorming over a tough project. I also enjoy writing technical blogs, share my thoughts and ideas (Check out my canvas below). If you’ve got a cool idea you think I can contribute to, do drop me a message below! Bonus points if you’re looking for a coding buddy—we could brainstorm, build, and debug our way to something awesome.

      On the tech side, I’m fluent in C++, JavaScript, TypeScript, and Python. Lately, I’ve been diving into Rust to write smart contracts I’ve got hands-on experience in web development, having built and deployed some exciting projects. My go-to stack is MERN, but I’m also familiar with Django.`
    
    return (
        <div className="text-white bg-[hsl(0,0%,3.53%)] sm:h-screen h-fit w-full flex justify-center items-center p-5">
        <div className="bg-black sm:w-5/6 w-full h-5/6 sm:p-10 p-7 sm:flex justify-between items-center">
          <div className="sm:w-5/12 h-full ">
            <div className="sm:h-1/2 w-full sm:flex justify-between items-start">
              <img src={Arjun} alt="" className="sm:h-full rounded-lg" loading="lazy"/>
              <div className="sm:my-0 my-3">
                <div className="mb-3">
                  <span className="text-lg">Name:</span>
                  <span className="text-neutral-400"> Arjun Verma</span>
                </div>
                <div className="mb-3">
                  <span className="text-lg">Email:</span>
                  <span className="text-neutral-400"> vermarjun26@gmail.com</span>
                </div>
                <div className="mb-3">
                  <span className="text-lg">Education:</span>
                  <span className="text-neutral-400"> Btech-IT</span>
                </div>  
                <div className="mb-3">
                  <span className="text-lg">Contact:</span>
                  <span className="text-neutral-400"> (+91) 6378560286</span>
                </div>  
              </div>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">Skills: </p>
              <div className="text-neutral-400 sm:text-center w-full flex flex-wrap gap-x-2">
                {
                  skills.map((data, index)=>{
                    return <span className="" key={index}>{data} |</span>
                  })
                }
              </div>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">Intrests:</p>
              <div className="text-neutral-400 sm:text-center flex flex-wrap gap-x-2">
                {
                  intrests.map((data, index)=>{
                    return <span className="" key={index}>{data} | </span>
                  })
                }
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 sm:h-fit h-full sm:my-0 my-8">
            <div className="group w-fit">
              <p className="font-semibold text-3xl">About me</p>
              <div className="bg-blue-600 h-1 mt-2 w-2/3"></div>
            </div>
            <div className="text-neutral-400 sm:mt-4 mt-8 sm:text-base text-balance sm:font-normal text-[1.25rem] font-light">
              {
                aboutme.split('\n').map((line, index)=>{
                    return <p key={index}>{line}<br/></p>
                })      
              }
            </div>
          </div>
        </div>
      </div>
    )
}

export default Aboutme