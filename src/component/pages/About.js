import React from "react";

import m5 from "../../img/m5.png";
import resume from "../../assest/Resume/sheikh-haziq.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn,faHtml5,} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faGears, faServer, faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import ServiceCom from "../page_component/Service_page.js";
import { Link } from "react-router-dom";


function About() {
    return (
        <div className="absolute bg-black z-20 w-screen">
            <div className="w-[90%] md:w-[80%] m-auto my-[10px] pt-[100px] px-2 ">
                <div className="text-center mb-[40px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">About Me</h1>
                </div>
                <div className="flex g-4 flex-col md:flex-col lg:flex-row justify-between mb-[90px]">
                    <div className=" w-[100%] lg:w-[100rem] md:w-[100%]  pt-3">
                        <img className=" rounded-[20px] w-full h-full removeb" src={m5} alt="" />
                    </div>
                    <div className="">
                        <h2 className=" text-[25px] mb-4 font-bold text-[#009e66]">Who am I?</h2>
                        <p className="text-[27px] font-bold ">I'm Sheikh Haziq,  a Web Developer & Software Engineer </p>
                        <p className="text-[15px] text-[#9f9f9f] py-2"> I am a Full-Stack based in the India. Results-oriented Web and App Developer with a passion for crafting dynamic and user-friendly web and Mobile applications. Proven expertise in front-end development using frameworks like ReactJS and Flutter, complemented by a strong foundation in back-end technologies such as Node.js and MySQL.</p>
                        <div className="mt-4">
                            <div className="flex flex-col md:flex-row lg:flex-row about_content py-4">
                                <div className="w-full">
                                    <p className="py-2 w-max">Name: <span>Sheikh Haziq</span></p>
                                    <p className="py-2 w-max">Age: <span>24</span></p>
                                </div>
                                <div className="w-[100%]">
                                    <p className="py-2 w-max">Email: <span><Link to="mailto:sheikhhaziq76@proton.me"  className="text-[#009e66]">sheikhhaziq76@proton.me</Link></span></p>
                                    <p className="py-2 w-max">From: <span>J&K,India</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                            <div>
                                <a href={resume} download><button className="btn p-3 px-7 ">Downlode CV</button></a>
                            </div>

                            <div className="social_btn pt-7 md:p-3">
                                <a href="https://github.com/sheikhhaziq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://in.linkedin.com/in/sheikh-haziq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-[100px]">My Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ">
                        <ServiceCom 
                        name="Design Trends"
                        para="Design trends growing emphasis on voice user interfaces, and dark mode."
                        icon={faHtml5}
                        />
                         <ServiceCom 
                        name="Fully Responsive"
                        para="Creating websites that adapt to different screen sizes and devices."
                        icon={faUpDownLeftRight}
                        />
                         <ServiceCom 
                        name="SEO"
                        para="Optimizing websites for better search engine rankings."
                        icon={faGears}
                        />
                         <ServiceCom 
                        name="Web and Flutter Development"
                        para="Building the foundation of Apps and websites using these core web technologies and Flutter."
                        icon={faCode}
                        />
                         <ServiceCom 
                        name="Database Management"
                        para="Working with databases like MySQL, PostgreSQL, or MongoDB."
                        icon={faDatabase}
                        />
                         <ServiceCom 
                        name="Server-Side Development"
                        para=" Building the logic and functionality behind websites."
                        icon={faServer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;