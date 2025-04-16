import Arjun from "/Arjun.jpg"
import chatBotIcon from "/chatBotIcon.png"
import leetcode from "/leetcode.png"
import github from "/github.png"
import linkedin from "/linkedin.png"
import instagram from  "/instagram.png"
import codeforces from "/codeforces.png"
import c from "/c++.png";
import js from "/js.png";
import py from "/py.png";
import ts from "/ts.png";
import react from "/react.png"
import git from "/git.png"
import nextjs from "/nextjs.png"
import nodejs from "/nodejs.png"
import express from "/express.png"
import mongo from "/mongo.png"

import React, { useState } from "react";

const Skills = ({skill, aboutSkill, skillTitle}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
  className="w-fit h-fit rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onMouseMove={handleMouseMove}
>
  <img src={skill} alt="" className="-z-50"/>
  <p className="mt-0 text-xs font-semibold w-full text-center">{skillTitle}</p>
  {isHovered && (
    <div
      className="absolute z-50 p-1 bg-neutral-800 border border-neutral-500 rounded-lg shadow-lg w-fit text-left px-2"
      style={{
        top: `50px`,
        left: `2px`,
      }}
    >
      <p className="text-sm text-white">{aboutSkill}</p>
    </div>
  )}
</div>
  );
};

function Aboutme(){
    const skills = [{skill:c, aboutSkill:"Most preferable language for CP/DSA problems", skillTitle: "C++"},
      {skill:js, aboutSkill:"I have done many web dev project with javascript initially", skillTitle: "JavaScript"},
      {skill:ts, aboutSkill:"I use typescript mostly for my latest projects", skillTitle: "TypeScript"},
      {skill:py, aboutSkill:"Go To language for projects including Scraping, ML or Data analysis", skillTitle: "Python"},
      {skill:git, aboutSkill:"VCS", skillTitle: "Git"},
      {skill:react, aboutSkill:"", skillTitle: "React.js"},
      {skill:nextjs, aboutSkill:"", skillTitle: "Next.js"},
      {skill:express, aboutSkill:"", skillTitle: "Express.js"},
      {skill:nodejs, aboutSkill:"", skillTitle: "Node.js"},
      {skill:mongo, aboutSkill:"", skillTitle: "MongoDb"},
    ]
    const intrests = ["Web3", "BlockChain", "NLP", "AI", "Machine Learning", "Computer Vision", "Robotics", "IoT"]
    const aboutme =  `Hey, I’m Arjun Verma, a sophomore at Guru Ghasidas University, majoring in Information Technology. I’ve been hooked on tech since middle school, where I dabbled in cybersecurity and robotics. These days, I’m learning about blockchains and Web3 while keeping my problem-solving game sharp—whether it’s cracking LeetCode questions or brainstorming over a tough project. I also enjoy writing technical blogs, share my thoughts and ideas (Check out my canvas below). If you’ve got a cool idea you think I can contribute to, do drop me a message below! Bonus points if you’re looking for a coding buddy—we could brainstorm, build, and debug our way to something awesome.

      On the tech side, I’m fluent in C++, JavaScript, TypeScript, and Python. Lately, I’ve been diving into Rust to write smart contracts I’ve got hands-on experience in web development, having built and deployed some exciting projects. My go-to stack is MERN, but I’m also familiar with Django.`
    
    return (
        <div className="text-white bg-[hsl(0,0%,3.53%)] sm:h-fit h-fit w-full flex justify-center items-center p-5">
        <div className="bg-black sm:w-5/6 w-full h-5/6 sm:p-10 p-7 sm:flex justify-between items-center mb-5">
          <div className="sm:w-5/12 h-full ">
            <div className="sm:h-fit w-full sm:flex justify-between items-start">
              <img src={Arjun} alt="" className="h-40 rounded-lg" loading="lazy"/>
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
            <div className="border border-white my-5"></div>
            <div className="mt-0">
              <p className="font-semibold text-lg mb-2 bg-gradient-to-r from-blue-600 to-teal-500 text-center rounded-lg px-5 py-1 w-full">Skills: </p>
              {/* <p className="text-xs w-full sm:flex hidden text-gray-300">*To know more about a skill, hover over it</p> */}
              <div className="text-white sm:text-center w-full flex flex-wrap justify-start items-end sm:gap-5 gap-4 mt-2 mb-2 ">
                {
                  skills.map((data, index)=>{
                     return <Skills skill={data.skill} aboutSkill={data.aboutSkill} key={index} skillTitle={data.skillTitle}/>
                  })
                }
              </div>
            </div>
            <div className="border border-white my-5"></div>
            <div className="flex justify-between items-center py-2 font-semibold text-lg bg-neutral-900 text-left rounded-lg px-2 w-full cursor-pointer">
                <img src={chatBotIcon} alt="" className="h-8"/>
                <button className="mr-5">Chat</button>
            </div>
            <p className="text-sm mt-2 text-gray-300">
            (Working on it) Talk to a fun chat bot that I trained on my own personal data and talks similar to i do, Try it out to know more! 
            </p>
          </div>
          <div className="sm:w-6/12 h-full sm:my-0 my-8 flex flex-col justify-start items-start">
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