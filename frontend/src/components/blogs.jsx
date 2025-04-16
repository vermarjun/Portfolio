import React, { useState } from "react";
import clock from "/clock.png";
import Liked from "/liked.png";
import notLiked from "/notLiked.png";
import commentsImage from "/comments.png";
import eye from "/eye.png";
import closeImage from "/close.png";
import postImage from "/postImage.png";
import SearchBar  from "./searchBar";
import { CSSTransition } from "react-transition-group";
import arrowDown from "/arrowDown.png";
import checkmark from "/checked.png";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");
  const options = ["Idea", "Blog", "Project"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      {/* Dropdown Header */}
      <div
        className="flex items-center justify-between bg-neutral-800 text-white px-6 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-neutral-700 transition-all"
        onClick={toggleDropdown}
      >
        <span className="text-lg font-medium">{selected}</span>
        <img
          src={arrowDown}
          alt="Toggle"
          className={`h-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Dropdown Options */}
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames={{
          enter: "opacity-0 translate-y-2",
          enterActive: "opacity-100 translate-y-0 transition-all duration-200",
          exit: "opacity-100 translate-y-0",
          exitActive: "opacity-0 translate-y-2 transition-all duration-200",
        }}
        unmountOnExit
      >
        <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-6 py-3 text-white hover:bg-neutral-700 transition-all cursor-pointer ${
                selected === option ? "bg-neutral-700" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span className="text-lg font-medium">{option}</span>
              {selected === option && (
                <img src={checkmark} alt="Selected" className="h-5" />
              )}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}


function Button({ children }) {
  return (
    <button className="hover:bg-neutral-700 bg-neutral-800 rounded-xl px-3 py-1 text-white font-semibold">
      {children}
    </button>
  );
}

function Card({
  image,
  title,
  caption,
  tag,
  date,
  Likes,
  Comments,
  views,
  postLiked,
}) {
  const [likes, setLikes] = useState(parseInt(Likes));
  const [liked, setLiked] = useState(postLiked);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tagColors = {
    Project: "bg-blue-500",
    Blog: "bg-teal-600",
    Thought: "bg-purple-600",
    Idea: "bg-indigo-600",
  };

  return (
    <div className="max-w-96 p-4 bg-black shadow-lg rounded-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-neutral-800 hover:cursor-pointer">
      <div className="relative h-60 w-full bg-gray-800 rounded-lg">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div
          className={`absolute bottom-0 left-[8rem] translate-y-1/2 inline-block px-5 py-1 text-sm font-semibold text-white rounded-full ${
            tagColors[tag] || "bg-gray-500"
          }`}
        >
          {tag}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-neutral-300">{title}</h2>
        <p className="line-clamp-3 text-neutral-400">{caption}</p>
        <div className="flex items-center mt-2 text-sm text-neutral-500 gap-1">
          <img src={clock} alt="" className="h-4" />
          {date}
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm text-neutral-400">
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => setLiked((liked) => !liked)}
        >
          <img
            src={liked ? Liked : notLiked}
            alt=""
            className="h-5"
            onClick={() =>
              setLikes((prev) => (liked ? prev - 1 : prev + 1))
            }
          />
          <span>{likes} Likes</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer"
        >
          <img src={commentsImage} alt="" className="h-5" />
          <span>{Comments}12 Comments</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src={eye} alt="" className="h-5" />
          <span>{views} Views</span>
        </div>
      </div>
      {isModalOpen && <Modal comments={comments} onClose={closeModal} />}
    </div>
  );
}

const CateogriesOrTags = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    "Development",
    "Design",
    "Personal Experiences",
    "Tech Reviews",
    "React",
    "Python",
    "AI",
  ];

  const handleCategoryClick = (category) => {
    setSelectedTags((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((tag) => tag !== category) // Deselect tag
        : [...prevSelected, category] // Select tag
    );
  };

  return (
      <div className="flex flex-wrap gap-3 px-2">
        {categories.map((category) => (
          <span
            key={category}
            className={`px-3 py-1 rounded-full cursor-pointer transition-all duration-200 ${
              selectedTags.includes(category)
                ? "bg-blue-700 text-white font-bold border-2 border-blue-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>
  );
};

function Blogs() {
  const posts = [
    {
        image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
        title:"BlockChain for blah",
      caption:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit distinctio expedita magni repellat asperiores ad pariatur, minus repellendus eaque omnis velit itaque enim consectetur quod rerum facilis nam temporibus aut.`,
      tag:"Idea",
      date:"November 30, 2024",
      likes:23,
      comments:10,
      views:120, 
    },
    {
        image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
        title:"My First Project",
      caption:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit distinctio expedita magni repellat asperiores ad pariatur, minus repellendus eaque omnis velit itaque enim consectetur quod rerum facilis nam temporibus aut.`,
      tag:"Blog",
      date:"November 30, 2024",
      likes:23,
      comments:10,
      views:120, 
      liked:true,
    },
    {
        image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
        title:"My First Project",
        caption:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit distinctio expedita magni repellat asperiores ad pariatur, minus repellendus eaque omnis velit itaque enim consectetur quod rerum facilis nam temporibus aut.`,
        tag:"Blog",
        date:"November 30, 2024",
        likes:23,
        comments:10,
        views:120, 
        liked:true,
    },
    {
      title: "Blockchain for Beginners",
      caption: "Sample caption 2",
      tag: "Idea",
      image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
      date: "November 30, 2024",
      likes: 23,
      comments: 10,
      views: 120,
      liked: false,
    },
    {
      title: "Blockchain for Beginners",
      caption: "Sample caption 2",
      tag: "Idea",
      image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
      date: "November 30, 2024",
      likes: 23,
      comments: 10,
      views: 120,
      liked: false,
    },
    {
      title: "Blockchain for Beginners",
      caption: "Sample caption 2",
      tag: "Idea",
      image: "https://arjunverma.netlify.app/img/random-thoughts.jpg",
      date: "November 30, 2024",
      likes: 23,
      comments: 10,
      views: 120,
      liked: false,
    },
  ];
  const navigate = useNavigate();
  return (
        <div className="w-full bg-neutral-950 text-white">
        <div className="w-full px-24 h-72 bg-neutral-800 flex justify-center items-center">
            <div className="w-full flex flex-col items-center justify-center">
            <p className="mb-5 text-5xl font-bold">Canvas</p>
            <div className="flex flex-row gap-6">
                <Button>Ideas</Button> | <Button>Blogs</Button> | <Button>Projects</Button>
            </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
    <div className="w-5/6 flex flex-row justify-center items-start">
        <div className="w-4/6 py-10 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {posts.map((data, index) => (
          <div key={index} onClick={()=>navigate(`/Canvas/${index}`)} >
            <Card {...data  }/>
          </div>
        ))}
        </div>
        <div className="max-w-80 w-full my-10 flex flex-col gap-10">
        <div className="bg-neutral-900 flex flex-col gap-5 py-6 px-2 rounded-md">
            <p className="px-2 font-bold text-xl border-l-4 border-blue-500 text-white">
            Search
            </p>
            <div className="w-full">
            <SearchBar />
            </div>
        </div>
        <div className="bg-neutral-900 flex flex-col gap-5 py-6 px-2 rounded-md">
            <p className="px-2 font-bold text-xl border-l-4 border-blue-500 text-white">
            Sort By
            </p>
            <div className="w-full flex justify-center items-center">
            <Dropdown />
            </div>
        </div>

        {/* New Categories or Tags Component */}
        <div className="bg-neutral-900 flex flex-col gap-5 py-6 px-2 rounded-md">
            <p className="px-2 font-bold text-xl border-l-4 border-blue-500 text-white">
            Categories or Tags
            </p>
            <CateogriesOrTags/>
        </div>

        <div className="bg-neutral-900 flex flex-col gap-5 py-6 px-2 rounded-md">
            <p className="px-2 font-bold text-xl border-l-4 border-blue-500 text-white">
            Recent Posts
            </p>
            <ul className="text-white list-disc list-inside">
            <li>Post Title 1</li>
            <li>Post Title 2</li>
            <li>Post Title 3</li>
            <li>Post Title 4</li>
            </ul>
        </div>

        </div>
    </div>
    </div>

    </div>
  );
}

export default Blogs;
