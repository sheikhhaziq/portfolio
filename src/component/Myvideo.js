import React, { useContext, useRef,useEffect } from 'react';
import videoBg from '../assest/video/myVideo.mp4';
import { DataContext } from '../App';


function Myvideo() {
    const {sharedData} =useContext(DataContext);
    const videoref=useRef()
    useEffect(() => {
        if(videoref.current){
            videoref.current.volume=0.1;
        }
      }, []);
    return (
        <>
        <div className='video_main brightness-[40%] z-0'>
            <video ref={videoref} autoPlay muted={sharedData} loop className='react_player'>
            <source src={videoBg} type="video/mp4" />
            </video>
            
        </div>
        </>
    );
}

export default Myvideo;