import React from "react";


function ResumeSec({
    heading,
    year,
    para,
    college
}) {
    return (
        <div class="resume-item relative ">
            <span class="item-arrow"></span>
            <h5 class="item-title">{heading}</h5>
            <p class="item-details">{college} <span className="edu_tag px-3 bg-[#009e66]/30 "> {year}</span></p>
            <p class="item-description">{para}</p>
        </div>
    )
}
export default ResumeSec;