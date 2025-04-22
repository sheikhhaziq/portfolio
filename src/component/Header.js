import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png"
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function Header() {
    function Nav() {
        return (
            <>
                <NavLink className={({ isActive }) => `nnn py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => `nnn py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => `nnn py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/resume">Resume</NavLink>
                <NavLink className={({ isActive }) => `nnn py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/project">Project</NavLink>
            </>
        )
    
    }
    const [ham, setHam] = useState(faBars);
    const [content, setContent] = useState('hidden');
    useEffect(() => {
        if (ham === faXmark) {
            setContent('block');
        } else {
            setContent('hidden');
        }
    }, [ham]);

    const toggleSidebar = () => {
        setHam(ham === faBars ? faXmark : faBars);
    };
    const motLogo=useRef()

    useGSAP(()=>{

        gsap.from(motLogo.current,{
            x:-30,
            opacity:0,
            duration:1,
        })
    })

    return (
        <>
            <header className="fixed z-50 w-full pt-3 flex justify-between">
                <div className="">
                    <NavLink to="/" ><img alt="" src={logo} width="100px" ref={motLogo}   className=" absolute top-0 left-[00px] bg-blend-color-burn" /></NavLink>
                </div>
                <div className="block md:hidden text-xl">
                    <span className="nnn text-[#009e66] absolute right-1 py-2 px-3 "><FontAwesomeIcon icon={ham} onClick={toggleSidebar} /></span>
                    <div className={`w-[200px] h-screen ${content} right-1 py-10 side_nav`}>
                        <div className="flex-col flex gap-2">
                            <Nav />
                        </div>

                    </div>

                </div>
                <nav  className="hidden  md:block px-5">
                    <div className="  md:flex md:gap-6" >
                        <Nav />
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header;