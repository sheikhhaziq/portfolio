import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";


function ProjectCard({
    img,
    heading,
    para,
    rev,
    website,
    github,
}) {
    return (
        <div className={`flex ${rev} flex-col border mt-10 py-5 md:p-5 glass`}>
            <div className="w-full md:w-1/2 p-0 md:p-0 rounded-xl" >
                <img src={img} alt="" className="w-[100%] h-[100%] p-10"/>
            </div>
            <div className="w-full md:w-1/2 ">
                <div>
                    <h1 className="text-[#099e66] text-2xl pt-5 md:pt-0">
                        <Typewriter
                            words={[heading]}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="py-5 px-9 text-[#777] leading-6 tracking-[1px]">{para}</p>
                    {/* <div className="text-xl ">
                        <p className=" text-center text-[#099e66] font-bold">
                            Tech
                            <div className="flex justify-center flex-wrap gap-4 pt-2">
                                <img src={logo1} alt={logo1} width="50px" className="cursor-pointer"></img> 
                                <img src={logo2} alt="react" width="50px"  className="cursor-pointer"></img> 
                                <img src={logo3} alt="react" width="50px" className="cursor-pointer"></img> 
                                <img src={logo4} alt="react" width="50px" className="cursor-pointer"></img> 
                                <img src={logo5} alt="react" width="50px" className="cursor-pointer"></img> 
                                
                            </div>
                        </p>

                    </div> */}
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                        <button className="button"><Link to={website} target="blank">Website</Link></button>
                        <button className="button"><Link to={github} target="blank">Github</Link></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;