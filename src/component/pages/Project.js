
import React from "react";
import ProjectCard from "../page_component/Project_card";
import gyawun from "../../img/cover.png"




function Project() {
    const text2="Gyawun Music is a cross-platform music application developed using Flutter, designed to offer a highly customizable and seamless listening experience. Built with a modular plugin-based architecture, the app allows users to extend its functionality by installing community or custom-developed plugins. Its intelligent homescreen, powered by Last.fm, provides personalized music recommendations, trending tracks, and listening history insights."
    const text1="Key Warden is a secure, lightweight password manager application focused on privacy and local-first data storage. Built with strong AES-256 encryption, it ensures that all stored website credentials remain protected and inaccessible without user authorization. The app saves passwords entirely on the user's device—never in the cloud—offering complete control over sensitive data. To enhance convenience without compromising security, Key Warden also supports biometric authentication, allowing users to unlock their vault using fingerprint or face recognition. Designed with simplicity and privacy at its core, Key Warden is a dependable tool for users who value security and local data ownership."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Project</h1>

                    <ProjectCard  img={gyawun}  heading={"Gyawun Music app"} para={text2}  website={"https://gyawunmusic.vercel.app"} github={"https://github.com/jhelumcorp/gyawun"} rev={"md:flex-row-reverse"}/>
                    <ProjectCard img={gyawun} heading={"Key Warden"} para={text1}  github={"https://github.com/jhelumcorp/keywarden"} rev={"md:flex-row"}/>
                     </div>

            </div>
        </div>
    );
};

export default Project;