import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ServiceCom({
    name,
    para,
    icon
}
) {

    return (
        <>
            <div className="p-7 about_card">
                <div className="">
                    <FontAwesomeIcon icon={icon} className="text-5xl text-[#009e66] mb-4" />
                </div>
                <div className="about_services">
                    <p>{name}</p>
                </div>
                <div className="text-[15px] text-[#777] pb-2">
                    <p>{para}</p>
                </div>
            </div>
        </>
    )

}

export default ServiceCom;