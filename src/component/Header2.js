import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from "@fortawesome/free-solid-svg-icons";


import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <div className='absolute w-full flex justify-between p-10 z-50' >
            <div className=''>
                <img className='header_logo w-24' src={null} alt='' />
            </div>
            <div>
                <ul className='header_li flex gap-10 cursor-pointer'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => `hover:text-[#099e66] header_hide ${isActive ? "text-[#099e66]" : "text-white"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => `hover:text-[#099e66] header_hide ${isActive ? "text-[#099e66]" : "text-white"}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' className={({ isActive }) => `hover:text-[#099e66] header_hide ${isActive ? "text-[#099e66]" : "text-white"}`}>
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/project' className={({ isActive }) => `hover:text-[#099e66] header_hide ${isActive ? "text-[#099e66]" : "text-white"}`}>
                            Project
                        </NavLink>
                    </li>
                    
                    <li className={`sm:hidden text-[28px] hover:text-[#099e66]`}><FontAwesomeIcon icon={faBars} /></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;
