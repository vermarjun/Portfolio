import React, { useState } from 'react';
import clock from "/clock.png"
import Liked from "/liked.png"
import notLiked from "/notLiked.png"
import commentsImage from "/comments.png"
import eye from "/eye.png"
import closeImage from "/close.png"
import postImage from "/postImage.png"
import { useNavigate } from 'react-router-dom';

function Comment({comment}){
  const [liked, setLiked] = useState(comment.liked);
  const [commentLikes, setCommentLikes] = useState(parseInt(comment.likes));
  return (
    <div key={comment.id} className="mb-4 border-b pb-2 last:border-none border-neutral-500">
      <div className='flex justify-between items-center mb-1'>
        <p className="font-semibold text-base">{comment.user.charAt(0).toUpperCase() + comment.user.slice(1)}</p>
        <div className='flex gap-1 text-xs'>
          {/* <img src={clock} alt="" className='h-5'/> */}
          <p>{comment.date}</p>
        </div>
      </div>
      <div>
        <p className="text-neutral-200 text-sm font-light text-left pl-2">{comment.text}</p>
      </div>
      <div className='p-2 flex items-center gap-1'>
        <img src={liked?Liked:notLiked} alt="" className='h-5' onClick={()=>{setLiked((liked)=>!liked); setCommentLikes((likes)=>liked? likes-1: likes+1)}}/>
        <p className='text-sm font-light'>{commentLikes} Likes</p>
      </div>
    </div>
  )
}

function Modal({ comments, onClose }){

  return (
    <div className="text-white fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-neutral-900 w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6 relative">
        <button className="absolute top-6 right-4" >
          <img src={closeImage} alt="" className='h-5' onClick={onClose}/>
        </button>
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <div className="max-h-72 overflow-y-scroll p-4">
          {comments.map((comment, index) => {
            return <Comment comment={comment} key={index}/>
          })}
        </div>
        <div className='w-full h-20 flex justify-center items-center'>
          <div className='flex h-4/6 justify-between bg-neutral-700 px-3 mt-5 rounded-2xl  w-full'>
            <input type="text" className='rounded-lg bg-neutral-700 w-5/6 focus:outline-none hover:border-none active:border-none h-full' placeholder='Add Comment' />
            <button className='rounded-lg'><img src={postImage} alt="" className='h-7'/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card ({ image, title, caption, tag, date, Likes, Comments, views, postLiked }){
  const [likes, setLikes] = useState(parseInt(Likes));
  const [liked, setLiked] = useState(postLiked);
  const [displayComments, setDisplayComments] = useState(false);
  // Define colors for different tags
  const tagColors = {
    Project: 'bg-blue-500',
    Blog: 'bg-teal-600',
    Thought: 'bg-purple-600',
    Idea: 'bg-indigo-600',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const postComments = [
    { id: 1, likes:10, liked:true, user: "divyanshu", text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt quae, quo delectus esse architecto rerum dolore, alias aut suscipit quos consectetur dignissimos tempora culpa modi eum. Aperiam, ipsa placeat.` ,  date:"20/11/24" },
    { id: 2, likes:20, liked:false, user: "ravi", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt quae, quo delectus esse architecto rerum dolore, alias aut suscipit quos consectetur dignissimos tempora culpa modi eum. Aperiam, ipsa placeat.", date:"20/11/24"  },
    { id: 3, likes:50, liked:true, user: "arjun", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt quae, quo delectus esse architecto rerum dolore, alias aut suscipit quos consectetur dignissimos tempora culpa modi eum. Aperiam, ipsa placeat.", date:"20/11/24" },
  ];
  function openModal(){
    setComments(postComments); // Load the comments dynamically
    setIsModalOpen(true);
  };

  function closeModal(){
    setIsModalOpen(false);
  };

  // 3D TILT ANIMATION:

  const [tiltStyle, setTiltStyle] = useState({});
  const [cursorStyle, setCursorStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate rotation values
    const x = e.clientX - rect.left; // Cursor position in the card
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -20; // Adjust sensitivity
    const rotateY = ((x - centerX) / centerX) * -20;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    // Update spotlight position
    setCursorStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), rgba(255,255,255,0) 30%)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
    setCursorStyle({ background: "none" });
  };

  return (
    <div 
      className="realtive max-w-[22rem] p-4 bg-black shadow-lg rounded-lg hover:shadow-xl transition sm:mb-0 mb-4"  
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}>
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          ...cursorStyle,
          transition: "background 0.1s ease",
        }}></div>
      {/* Image Section */}
      <div className="relative h-60 w-full bg-gray-200 rounded-lg">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {/* Tag */}
        <div className={`absolute bottom-0 left-[8rem] translate-y-1/2 inline-block px-5 py-1 text-sm font-semibold text-white rounded-full ${tagColors[tag] || 'bg-gray-500'}`}>
            {tag}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4">

        <div className='flex justify-between items-center'>
            <div>
              {/* Title */}
            <h2 className="text-lg font-semibold text-neutral-400">{title}</h2>
            {/* caption */}
            <p className='line-clamp-5'>{caption}</p>
            </div>
        </div>

        {/* Date */}
        <div className="flex justify-start items-center mt-2 text-sm text-neutral-400 gap-1">
            <img src={clock} alt=""  className="h-[0.9rem]"/> 
            {date}
        </div>
      </div>

      {/* Interaction Fields */}
      <div className="mt-4 flex justify-between text-sm text-neutral-400">
        {/* Likes */}
        <div className="flex items-center space-x-1">
            <img src={liked?Liked:notLiked} alt="" className='h-5 hover:cursor-pointer transition-all duration-500 ease-linear' onClick={()=>{setLiked((liked)=>!liked); liked?setLikes((likes)=>--likes):setLikes((likes)=>++likes)}}/>
          <span>{likes} Likes</span>
        </div>

        {/* Comments */}
        <div className="flex items-center space-x-1" onClick={openModal}>
          <img src={commentsImage} alt="" className='h-5 hover:cursor-pointer' />
          {isModalOpen && <Modal comments={comments} onClose={()=>closeModal()}/>}
          <span>{Comments} Comments</span>
        </div>

        {/* Views */}
        <div className="flex items-center space-x-1">
          <img src={eye} alt="" className='h-5'/>
          <span>{views} Views</span>
        </div>
      </div>
    </div>
  );
};

function Projects(){
  const posts = [
    {
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
      title:"BlockChain for blah",
      caption:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit distinctio expedita magni repellat asperiores ad pariatur, minus repellendus eaque omnis velit itaque enim consectetur quod rerum facilis nam temporibus aut.`,
      tag:"Idea",
      date:"November 30, 2024",
      likes:23,
      comments:10,
      views:120, 
    },
    {
      title:"AudienceAlchemy",
      caption:`AudienceAlchemy is a one-stop solution for content creators to stay ahead of trends, understand their audience, and create impactful content efficiently.`,
      tag:"Project",
      date:"November 30, 2024",
      likes:23,
      comments:10,
      views:120, 
    }
  ]
  const navigate = useNavigate();
    return (
        <>
        <div className="sm:w-full sm:h-screen h-fit bg-[hsl(0,0%,3.53%)] text-white sm:py-0">
            <div className="w-full h-1/6 flex justify-center items-center">
                <div>
                    <p className="mb-5 text-center text-5xl font-bold">CANVAS</p>
                    <p className='text-center sm:px-0 px-5'>Welcome to my digital canvas! Here I share Projects, Blogs, and Ideas. </p>
                    {/* <div className="bg-blue-600 mt-5 rounded-full h-[2px]"></div> */}
                </div>
            </div>
            <div className=" flex justify-center items-center">
                <div className="sm:w-5/6 sm:p-0 p-5 sm:h-full h-fit sm:flex justify-between items-center">
                    {
                        posts.map((data, index)=>{
                            return  <Card image="https://arjunverma.netlify.app/img/random-thoughts.jpg"
                              caption={data.caption} 
                              title = {data.title} 
                              tag = {data.tag} 
                              Likes = {data.likes} 
                              Comments={data.comments} 
                              views={data.views} 
                              date = {data.date} 
                              postLiked = {data.liked}
                              key={index}
                            />
                        })
                    }
                </div>
            </div>
            <div className="w-full sm:mt-10 flex items-center justify-center">
              <button onClick={()=>{navigate("/Canvas")}} className="w-fit px-10 py-2 bg-gradient-to-r from-indigo-600 from-1% via-sky-600 via-20% to-emerald-600 to-90%  rounded-full text-sm font-semibold">
              Show More
              </button>
            </div>
        </div>
        </>
    )
    
}
export default Projects