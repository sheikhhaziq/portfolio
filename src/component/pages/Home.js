import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { Typewriter } from 'react-simple-typewriter'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef, useState } from 'react';
import { DataContext } from '../../App';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


function Home() {

    const [icon, seticon] = useState(faVolumeXmark)
    const { setSharedData } = useContext(DataContext);

    function mutebtn() {
        if (icon === faVolumeHigh) {
            seticon(faVolumeXmark);
            setSharedData(true)
        } else {
            seticon(faVolumeHigh);
            setSharedData(false)
        }
    }
    const motName = useRef()
    const motLeft =useRef()
    const motRight =useRef()

    useGSAP(() => {
        gsap.from(motName.current, {
            y: -30,
            opacity: 0,
            delay:1.2,
            duration: 1,
        })
        gsap.from(motLeft.current, {
            x: -500,
            opacity: 0,
            delay:1.2,
            duration: 1.5,
        })
        gsap.from(motRight.current, {
            x: 500,
            delay:1.2,
            opacity: 0,
            duration: 1.5,
        })
        gsap.from(".nnn",{
            x:30,
            opacity:0,
            stagger:.2,
        })
    })
    return (
        <>
            <div className="home_center absolute z-20 ">
                <h1 ref={motName} className=" text-[70px] font-bold mb-[34px] md:w-[560px] tracking-[5px]">Sheikh Haziq</h1>
                <p ref={motLeft} className="text-center text-[25px] md:text-[30px] tracking-wide"> I'm a <span className=' text-[#099e66]'> <Typewriter
                    words={['Developer', 'Freelancer', 'Designer', 'Engineer']}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                /></span></p>
                <p ref={motRight} className="text-center pt-10 text-[25px] md:text-[30px]  text-[#099e66] tracking-wide"> <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                /></p>
            </div>

            <div className="absolute z-20 bottom-3 right-0 m-3 flex flex-col gap-5 ">
                <FontAwesomeIcon onClick={mutebtn} icon={icon} className="nnn mx-2 text-xl hover_social hover:text-[#009e66] relative "/>
                <a  href="https://github.com/sheikhhaziq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="nnn mx-2 text-xl hover_social  hover:text-[#009e66] relative " /></a>
                <a  href="https://in.linkedin.com/in/sheikh-haziq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="nnn mx-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                 </div>
        </>
    );
}
export default Home;