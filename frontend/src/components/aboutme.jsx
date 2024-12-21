import Arjun from "/Arjun.jpg"
import leetcode from "/leetcode.png"
import github from "/github.png"
import linkedin from "/linkedin.png"
import instagram from  "/instagram.png"
import codeforces from "/codeforces.png"
function Aboutme(){
    const skills = ["Html", "CSS", "Java Script", "Type Script", "C++", "Git", "Git Hub", "React.js", "Node.js", "Express", "Mongodb", "Python",]
    const intrests = ["IoT", "Web3", "Natural Language Processing", "ComputerVision", "AI", "Machine Learning", "BlockChain"]
    const aboutme =  `Hello, I'm Arjun Verma, currently a first-year Computer Science Engineering student at Guru Ghasidas Central University. My journey into the world of coding began with a fervent passion for technology and a constant curiosity to explore new things. As a dedicated coder, I find joy in unraveling the intricacies of programming and experimenting with the latest in the tech realm. 
                
    Recently, I took a leap into web development, culminating in the creation of my first website This project serves as a testing ground for my burgeoning skills, a testament to my commitment to continuous growth in the ever-evolving world of technology.
    
    In essence, I am Arjun Verma—an aspiring coder, avid learner, and technology enthusiast on a journey to turn passion into proficiency, one line of code at a time.`   
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
                    return <span className="" key={index}>{data},</span>
                  })
                }
              </div>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">Intrests:</p>
              <div className="text-neutral-400 sm:text-center flex flex-wrap gap-x-2">
                {
                  intrests.map((data, index)=>{
                    return <span className="" key={index}>{data},</span>
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
            <div className="text-neutral-400 sm:mt-4 mt-8 sm:text-base sm:font-normal text-[1.25rem] font-light">
              <p>
              {
                aboutme.split('\n').map((line, index)=>{
                    return <p key={index}>{line}<br/></p>
                })      
              }
              </p>
            </div>
            <div className="flex sm:justify-around justify-between items-center w-full sm:mt-5 mt-10">
                <a href="https://github.com/vermarjun" target="_blank" className="shadow-2xl shadow-neutral-600">
                    <img src={github} alt="" />
                </a>
                <a href="https://codeforces.com/profile/vermarjun" target="_blank" className="shadow-2xl shadow-neutral-600">
                    <img src={codeforces} alt="" />
                </a>
                <a href="https://leetcode.com/u/vermarjun/" target="_blank" className="shadow-2xl shadow-neutral-600">
                    <img src={leetcode} alt="" className="h-[40px]"/>
                </a>
                <a href="https://in.linkedin.com/in/arjun-verma-59962528a" target="_blank" className="shadow-2xl shadow-neutral-600">
                    <img src={linkedin} alt="" className="group"/>
                </a>
                <a href="https://www.instagram.com/vermarjun_/" target="_blank" className="shadow-2xl shadow-neutral-600">
                    <img src={instagram} alt="" />
                </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Aboutme