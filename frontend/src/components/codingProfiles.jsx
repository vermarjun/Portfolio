import axios from "axios";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useEffect, useState, React, useRef } from "react";
import "./custom.css"
import prevIcon from "/prevIcon.png";
import prevDisabledIcon from "/prevDisabledIcon.png"
import nextDisabledIcon from "/nextDisabledIcon.png"
import nextIcon from "/nextIcon.png";
import leetcode from "/leetcode.png";
import github from "/github.png";
import codeforces from "/codeforces.png"
import atcoder from "/atcoder.png";
import hackerrank from "/hackerrank.png"
import codechef from "/codechef.png"

const CODEFORCES_API = import.meta.env.VITE_API_CODEFORCES;
const LEETCODE_API = import.meta.env.VITE_API_LEETCODE;
const GITHUB_API = import.meta.env.VITE_API_GITHUB;
const GITHUB_URL = import.meta.env.VITE_URL_GITHUB;

const DonutChart = ({ a, b, c = 0 }) => {
  const total = a + b + c;
  const percentageA = (a / total) * 100;
  const percentageB = (b / total) * 100;
  const percentageC = (c / total) * 100;

  // SVG circle dimensions
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const offsetA = 0;
  const offsetB = (circumference * percentageB) / 100;
  const offsetC = (circumference * percentageC) / 100;

  return (
    <div className="flex items-center justify-center w-fit h-full text-white">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="relative text-white"
      >
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="10"
            className="stroke-green-600"
          />
        {/* Segment for A */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="yellow"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offsetB - offsetC}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          className="stroke-yellow-500"
          />
        {/* Segment for B */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="green"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offsetB}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          className="stroke-green-800"
          />
        {/* Segment for C */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="blue"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offsetB - offsetA}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          className="stroke-red-600"
        />
        {/* Text in the center */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          className="font-bold text-xl"
        >
          {total}
        </text>
      </svg>
    </div>
  );
};

function endDateGen() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
function startDateGen() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()-1;

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const Carousel = ({ images }) => {
    console.log(images);
    const [imagesInOneView, setImagesInOneView] = useState(4);
    const [visibleImages, setVisibleImages] = useState(images.slice(0, imagesInOneView));
  
    function handlePrev() {
      setVisibleImages((prev) => {
        const firstImageIndex = (images.indexOf(prev[0]))
        const prevImage = images[firstImageIndex - 1];
        return [prevImage , ...prev.slice(0, imagesInOneView - 1)];
      });
    };
    function handleNext(){
        setVisibleImages((prev) => {
          const lastImageIndex = (images.indexOf(prev[imagesInOneView-1]))
          const nextImage = images[lastImageIndex + 1];
          return [...prev.slice(1, imagesInOneView), nextImage];
        });
    };
    useEffect(() => {
        const updateImagesInOneView = () => {
          if (window.innerWidth > 1024) {
            setImagesInOneView(6); // For laptops/desktops
          } else {
            setImagesInOneView(3); // For mobile
          }
        };
        // Call the function initially
        updateImagesInOneView();
        // Add event listener for resize
        window.addEventListener("resize", updateImagesInOneView);
        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener("resize", updateImagesInOneView);
        };
      }, []);
    // Update `visibleImages` whenever `imagesInOneView` changes
    useEffect(() => {
        setVisibleImages(images.slice(0, imagesInOneView));
    }, [imagesInOneView, images]);    
    return (
      <div className={`relative w-full h-fit flex justify-center items-center`}>
        {/* Image Container */}
        <div className="flex w-full overflow-hidden space-x-4 justify-center items-center h-fit">
          {visibleImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 object-cover sm:w-20 sm:h-20 rounded-md shadow-md">
              {
                image
              }
            </div>
          ))}
        </div>
  
        {/* Prev Button */}
        {
        <button
            disabled={(images.indexOf(visibleImages[0]) == 0)}
            onClick={handlePrev}
            className={`absolute top-1/2 -left-9 transform -translate-y-1/2 text-white disabled:text px-4 py-2 rounded-full shadow-md focus:outline-none `}
        >
            <img src={prevIcon} alt="" className={`${(images.indexOf(visibleImages[0]) == 0)?"hidden":"visible"} h-10`}/>
            <img src={prevDisabledIcon} alt="" className={`${(images.indexOf(visibleImages[0]) == 0)?"visible":"hidden"} h-10`}/>
          </button>
        }
        {/* Next Button */}
        {
        <button
            disabled={(images.indexOf(visibleImages[imagesInOneView-1]) == images.length-1)}
            onClick={handleNext}
            className="absolute top-1/2 -right-9 transform -translate-y-1/2 text-white px-4 py-2 rounded-full focus:outline-none"
        >
            <img src={nextIcon} alt="" className={`${(images.indexOf(visibleImages[imagesInOneView-1]) == images.length-1)?"hidden":"visible"} h-10`} loading="lazy"/>
            <img src={nextDisabledIcon} alt="" className={`${(images.indexOf(visibleImages[imagesInOneView-1]) == images.length-1)?"visible":"hidden"} h-10`} loading="lazy"/>
          </button>
        }
      </div>
    );
  };

const LinksToCodingProfiles = () => {
    const profiles = [
        {
          name: "GitHub",
          url: "https://github.com/your-username",
          image: github,
        },
        {
          name: "Leetcode",
          url: "https://stackoverflow.com/users/your-username",
          image: leetcode,
        },
        {
          name: "Codeforces",
          url: "https://stackoverflow.com/users/your-username",
          image: codeforces,
        },
        {
          name: "Atcoder",
          url: "https://stackoverflow.com/users/your-username",
          image: atcoder,
        },
        {
          name: "Hacker Rank",
          url: "https://codepen.io/your-username",
          image: hackerrank,
        },
        {
          name: "Code Chef",
          url: "https://codepen.io/your-username",
          image: codechef,
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/users/your-username",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg",
        },
      ];
      function BadgeComponent({profile, index}){
        return (
            <div key={index} className="flex flex-col items-center justify-center">               
                <div className="">
                    <div className="w-full h-full flex justify-center items-center">
                        <a href={profile.url}>
                            <img src={profile.image} alt="" className="sm:h-14 h-12"/>
                        </a>
                    </div>
                    <p className="text-xs mt-3 text-center font-mono font-normal text-white">
                        {
                            profile.name
                        }
                    </p>
                </div>
            </div>
        )
      }
      const Badges = profiles.map((profile, key)=>{
         return <BadgeComponent profile={profile} index={key}/>
      })
      return (        
            <div className="sm:bg-black bg-neutral-900 h-full">
                <div className=" flex flex-col justify-center items-start">
                    <p className="text-sm font-semibold px-5 mt-5">
                        Coding Profile Links
                    </p>
                    <div className="w-full h-full flex justify-center items-center p-5">
                        <Carousel images={Badges}/>
                    </div>
                </div>
            </div>
      );
};

function BadgesAcrossAllPlatforms(){
    const images = [
        "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png",
        "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png",
        "https://assets.leetcode.com/static_assets/public/images/badges/dcc-2024-8.png",
        "https://assets.leetcode.com/static_assets/public/images/badges/dcc-2024-9.png",
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
        "https://assets.holopin.io/hf2024levels/level4-sloth-hello-0-0-0-0.webp",
      ];
      const Badges = images.map((image, index)=>{
        return <img key={index} src={image} className="object-contain w-14 h-14 sm:h-20 sm:w-20"/> 
      })
    return (
            <div className="flex flex-col w-full h-full">
                <div className="sm:bg-black bg-neutral-900 py-5 h-full">
                    <div className="w-full flex justify-start items-baseline gap-2 mb-5 ml-5">
                        <p className=" text-sm">Badges</p>
                        <p className="font-bold text-lg">{images.length}</p>
                    </div>
                    <div className="h-20 w-full flex gap-5 justify-center items-center p-5">
                        <Carousel images={Badges} />
                    </div>
                </div>
            </div>
    )
}

function ProblemsSolvedDonutGraph(){
    return (
        <>
            {/* c = yellow b = red a = green */}
            <div className="sm:flex-none flex flex-col gap-2 w-full bg-neutral-950">
                <div className="w-full sm:bg-black bg-neutral-900 px-5 py-3">
                        <p className="ml-10 mb-4 font-semibold">DSA</p>
                    <div className="flex w-full gap-5">
                        <DonutChart a={254} b={27} c={255}/>
                        <div className="gap-2 w-full flex flex-col">
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-green-500 text-sm">Easy</p>
                                <p className="font-bold">254</p>
                            </div>
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-yellow-500 text-sm">Medium</p>
                                <p className="font-bold">255</p>
                            </div>
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-red-500 text-sm">Hard</p>
                                <p className="font-bold">27</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:bg-black bg-neutral-900 px-5 py-3">
                        <p className="ml-10 mb-4 font-semibold">COMPETITIVE PROGRAMMING</p>
                    <div className="flex w-full gap-5">
                        <DonutChart a={34} b={18} c={67}/>
                        <div className="gap-2 w-full flex flex-col">
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-green-500 text-sm">AtCoder</p>
                                <p className="font-bold">34</p>
                            </div>
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-yellow-500 text-sm">CodeChef</p>
                                <p className="font-bold">18</p>
                            </div>
                            <div className=" bg-black w-full flex justify-between items-center p-1">
                                <p className="text-red-500 text-sm">CodeForces</p>
                                <p className="font-bold">67</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
    )
}

function CodingProfiles(){
    // Github ka activity heatmap wala data is in graphql api
    const [values, setValues] = useState([]);
    const [gh_submissions, setghsubmissions] = useState(0);
    const [problemsSolved, setProblemsSolved] = useState(0);
    const [easy, setEasy] = useState(0);
    const [medium, setMedium] = useState(0);
    const [hard, setHard] = useState(0);
    const [badges, setBadges] = useState([]); 
    async function fetchActivityData() {
        const endpoint = GITHUB_URL;
        const headers = {
            "Authorization": GITHUB_API
        };
        const graphqlQuery = {
            "query": `query($userName:String!) { 
                        user(login: $userName){
                            contributionsCollection {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    }`,
            "variables": { "userName": "vermarjun"}
        };
        try {
            const response = await axios({
                url: endpoint,
                method: 'post',
                headers: headers,
                data: graphqlQuery
            });
            if (response.error){
                console.log(response.error);
            } else {
                const data = response.data.data.user.contributionsCollection.contributionCalendar;
                const totalContributions = data.totalContributions;
                const weeks = data.weeks; // Arrays of weeks
                const values = [];
                let total_submissions = 0;
                weeks.map((week)=>{
                    const contributionDays = week.contributionDays;
                    contributionDays.map((day)=>{
                        total_submissions+=day.contributionCount;
                        values.push({
                            date : day.date,
                            count : day.contributionCount,
                        })
                    })
                })
                setghsubmissions(total_submissions);
                setValues(values);
            }
        } catch(error){
            console.log("Error fetching activity data");
            console.log(error);
        }
    }
    async function fetchCodeForcesData(){
        try {
            
            const response = await axios.get(`${CODEFORCES_API}`)
            let submissions = [];
            if (response.data.result){
                submissions = response.data.result;
                const solvedProblems = new Set();
                submissions.map((submission)=>{
                    if (submission.verdict == "OK"){
                        
                        const problemKey = `${submission.problem.contestId}-${submission.problem.index}-${submission.problem.name}-${submission.problem.rating}`;
                        solvedProblems.add(problemKey);
                    }
                })
                setProblemsSolved((s)=>s+(solvedProblems.size));
            }
        } catch(error){
            console.log(error);
        }
    }
    async function fetchLeetCodeData(){
        try {
            const response = await axios.get(LEETCODE_API);
            if (response.data){
                const data = response.data;
                console.log(response);
                setProblemsSolved((s)=>s+parseInt(data.solvedProblem));
                setEasy(data.easySolved);
                setMedium(data.mediumSolved);
                setHard(data.hardSolved);
            }
        } catch (error){
            console.log(error);
        }
    }
    useEffect(()=>{
        // fetch activity data as soon as this component mounts!
        fetchActivityData();
        setProblemsSolved(0); //Ye gandu dev me 2 baar chalta hai uske liye set it to 0 before fetching it again
        fetchCodeForcesData();
        fetchLeetCodeData();
    }, []);
    return (
        <div className="flex flex-col gap-5 justify-center items-center w-full h-full sm:h-screen bg-neutral-950  text-white">
            <div>
                <p className="mb-5 text-center text-5xl font-bold">Coding Profiles</p>
                <p className="text-center">Across Various Platforms (Displaying real time data)</p>
            </div>
            <div className="sm:flex sm:w-5/6 w-full h-fit px-5 mt-2">
                <div className="sm:flex justify-between gap-5 sm:w-1/2 sm:mr-5">
                    <div className="flex justify-center items-center sm:bg-black bg-neutral-900 w-full sm:h-40 py-5 sm:py-0 sm:p-5 mb-2 sm:mb-0">
                        <div>
                        <p className="text-xs">
                            Total Questions
                        </p>
                        <p className="font-bold text-5xl sm:mt-0 mt-2">
                            {
                                problemsSolved
                            }
                        </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-6 sm:bg-black bg-neutral-900 sm:w-fit w-full sm:h-40 p-5 mb-2 sm:mb-0">
                        <div>
                            <p className="text-xs">
                                Total Contests
                            </p>
                            <p className="font-bold text-5xl">
                                {
                                    10
                                }
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <div className="flex w-44 justify-between p-1">
                                <p>Leetcode</p>
                                <p>{6}</p>
                            </div>
                            <div className="flex justify-between w-full p-1">
                                <p>Codeforces</p>
                                <p>{1}</p>
                            </div>
                            <div className="flex justify-between w-full p-1">
                                <p>AtCoder</p>
                                <p>{3}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 w-full sm:h-40 h-fit flex flex-col gap-2 sm:bg-black bg-neutral-900 py-5 sm:p-5 px-2">
                    <div className="w-full flex justify-between items-center">
                        Github
                        <div className="sm:flex gap-8 justify-between items-center hidden">
                            <div className="flex gap-1 text-xs font-extralight"> <p className="font-bold">{gh_submissions}</p> submissions in past 1 year</div>
                            <div className="flex gap-1 text-xs font-extralight"> Max Streak <p className="font-bold">{gh_submissions}</p></div>
                            <div className="flex gap-1 text-xs font-extralight"> Current Streak <p className="font-bold">{gh_submissions}</p></div>
                        </div>
                    </div>
                    <CalendarHeatmap
                        // startDate={startDateGen()}
                        startDate={new Date('2024-01-01')}
                        endDate={endDateGen()}
                        values={values}
                        classForValue={(value) => {
                            if (!value || value.count === 0) {
                                return 'color-empty';
                            } else if (value.count < 5){
                                return "color-scale-1";
                            } else if (value.count < 10){
                                return "color-scale-2";
                            } else if (value.count < 15){
                                return "color-scale-3";
                            } else {
                                return "color-scale-4";
                            }
                        }}
                    />
                    <div className="w-full flex justify-between items-center sm:hidden visible">
                        <div className="flex flex-col text-xs font-normal"> <p className="font-bold text-center text-lg">{gh_submissions}</p> Submissions in past 1 year</div>
                        <div className="flex flex-col text-xs font-normal"> <p className="font-bold text-center text-lg">{gh_submissions}</p> Max Streak</div>
                        <div className="flex flex-col text-xs font-normal"> <p className="font-bold text-center text-lg">{gh_submissions}</p> Current Streak</div>
                    </div>
                </div>
            </div>
            <div className="sm:flex sm:w-5/6 w-full h-full sm:px-0 px-5 sm:gap-0 mb-8">
                <div className="h-full sm:w-2/6 flex flex-col gap-10 sm:ml-5 items-center justify-center  text-white sm:bg-black bg-neutral-900">
                    <ProblemsSolvedDonutGraph/>
                </div>
                <div className="flex flex-col sm:w-4/6 w-full sm:h-full h-full sm:px-5 sm:mt-0 mt-2 gap-2">
                    <div className="w-full h-1/2">
                        <BadgesAcrossAllPlatforms/>
                    </div>
                    <div className="w-full h-1/2">
                        <LinksToCodingProfiles/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingProfiles;